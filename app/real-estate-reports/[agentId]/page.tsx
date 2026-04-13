import { realEstateReports } from "@/data/real-estate-reports";
import { notFound } from "next/navigation";
import { readFileSync } from "fs";
import { join } from "path";

interface Props {
  params: Promise<{ agentId: string }>;
}

export async function generateStaticParams() {
  return realEstateReports.map((report) => ({
    agentId: report.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { agentId } = await params;
  const report = realEstateReports.find((r) => r.id === agentId);

  if (!report) return {};

  return {
    title: `Real Estate Lead Report — ${report.agentName}`,
    description: `Discover untapped lead opportunities in ${report.market}.`,
  };
}

export default async function RealEstateReportPage({ params }: Props) {
  const { agentId } = await params;
  const report = realEstateReports.find((r) => r.id === agentId);

  if (!report) {
    notFound();
  }

  // Read the template and substitute data
  const templatePath = join(process.cwd(), "templates/real-estate/insight-report.html");
  let template = readFileSync(templatePath, "utf-8");

  // Extract just the body content (remove DOCTYPE, html, head tags)
  const bodyMatch = template.match(/<body>([\s\S]*)<\/body>/);
  const bodyContent = bodyMatch ? bodyMatch[1] : "";

  // Extract the style tag
  const styleMatch = template.match(/<style>([\s\S]*?)<\/style>/);
  const styles = styleMatch ? styleMatch[1] : "";

  // Get agent name initial
  const agentInitial = report.agentName.charAt(0).toUpperCase();

  // Substitute template placeholders with actual data
  let htmlContent = `<style>${styles}</style>`;

  // Calculate placeholder stats
  const oppCount = report.leadsPerWeek;
  const tamValue = Math.floor(report.leadsPerWeek * 2.5);
  const hoursValue = Math.floor(report.leadsPerWeek * 0.5);

  htmlContent += bodyContent
    .replace(/\[AGENT NAME\]/g, report.agentName)
    .replace(/\[TARGET CITY\]/g, report.market.split(",")[0]) // Extract city from "City, State"
    .replace(/\+143 more leads/g, `+${report.leadsPerWeek} more leads`)
    .replace(/12500/g, report.monthlyPosts.craigslist.toString())
    .replace(/25400/g, report.monthlyPosts.facebook.toString())
    .replace(/4200/g, report.monthlyPosts.fsbo.toString())
    .replace(/1800/g, report.monthlyPosts.probate.toString())
    // Replace just the counter values, keep all script code intact
    .replace(/value: 147,/g, `value: ${oppCount},`) // Opportunities counter
    .replace(/value: 25,/g, `value: ${tamValue},`) // TAM counter
    .replace(/value: 72,/g, `value: ${hoursValue},`); // Hours counter

  // Add agentId to a data attribute for form submission
  htmlContent = htmlContent.replace(
    '<form class="email-form" id="contact-form">',
    `<form class="email-form" id="contact-form" data-agent-id="${report.id}">`
  );

  // Add scripts at the end before closing the content
  htmlContent += `
    <script>
      window.AGENT_ID = '${report.id}';
    <\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js"><\/script>
  `;

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}
