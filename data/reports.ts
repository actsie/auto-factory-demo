export interface Report {
  id: string;
  company: string;
  logo: string;
  logoNeedsBg?: boolean; // true = add white background, false = transparent
  url: string;
  industry: string;
  pages: number;
  hostingCost: number;
  waitDays: number;
  aiExamples: {
    prompt1: string;
    result1: string;
    prompt2: string;
    result2: string;
    prompt3: string;
    result3: string;
  };
}

export const reports: Report[] = [
  {
    id: "magnettu",
    company: "Magnettu",
    logo: "/assets/reports/magnettu/magnettu.png",
    logoNeedsBg: false,
    url: "https://magnettu.com",
    industry: "Marketing & Tech Agency",
    pages: 18,
    hostingCost: 48,
    waitDays: 4,
    aiExamples: {
      prompt1: "Rewrite our homepage headline 'Gestiona el contenido...' to speak directly to founder pain points",
      result1: "✓ 3 founder-focused headlines in English + Spanish",
      prompt2: "Change our CTA from 'Solicitar demo' to something more action-oriented",
      result2: "✓ 5 CTA options ready to test",
      prompt3: "Update our service descriptions — focus on time saved vs tools required",
      result3: "✓ Service benefits rewritten + ROI paragraph added"
    }
  },
  {
    id: "rad-collab",
    company: "Rad Collab",
    logo: "/assets/reports/rad-collab/logo.svg",
    logoNeedsBg: false,
    url: "https://radcollab.com",
    industry: "Creative Collaboration",
    pages: 14,
    hostingCost: 42,
    waitDays: 3,
    aiExamples: {
      prompt1: "Our headline 'Hey, we're Rad' is too casual — make it highlight what we actually do",
      result1: "✓ 3 benefit-focused headlines ready",
      prompt2: "Replace 'Get Started' CTA with something more specific to our service",
      result2: "✓ 4 CTA options ready to test",
      prompt3: "Rewrite our tagline about design & social content — make it clearer",
      result3: "✓ Tagline rewritten + 2 alternative versions"
    }
  },
  {
    id: "seed-through-series",
    company: "Seed Through Series",
    logo: "/assets/reports/seed-through-series/seedthroughseries.png",
    logoNeedsBg: true,
    url: "https://seedthroughseries.com",
    industry: "Startup Advisory",
    pages: 16,
    hostingCost: 45,
    waitDays: 5,
    aiExamples: {
      prompt1: "Our 'Get In Touch' CTA is generic — make it specific to fundraising stages",
      result1: "✓ 3 stage-specific CTAs with placement notes",
      prompt2: "Make our about section feel less corporate — add founder story elements",
      result2: "✓ Rewritten about section + 1 founder narrative version",
      prompt3: "Create FAQ for common founder questions about Series A timing",
      result3: "✓ 8 FAQs with answers ready to publish"
    }
  },
  {
    id: "structured-consulting",
    company: "Structured Consulting",
    logo: "/assets/reports/structured-consulting/logo.svg",
    logoNeedsBg: false,
    url: "https://structuredconsulting.com",
    industry: "Strategy Consulting",
    pages: 12,
    hostingCost: 38,
    waitDays: 4,
    aiExamples: {
      prompt1: "Our headline 'Keep More of What You Win' is vague — add specifics on settlement types",
      result1: "✓ 3 headlines with settlement focus ready",
      prompt2: "Rewrite service descriptions without consultant jargon — focus on outcomes",
      result2: "✓ All service descriptions rewritten",
      prompt3: "Update our CTA from 'Keep More' to something specific per service area",
      result3: "✓ 4 service-specific CTAs ready to test"
    }
  },
  {
    id: "bocg-ventures",
    company: "BoCG Ventures",
    logo: "/assets/reports/bocg-ventures/bocg-ventures.png",
    logoNeedsBg: true,
    url: "https://bocgventures.com",
    industry: "Venture Capital & Private Equity",
    pages: 12,
    hostingCost: 65,
    waitDays: 4,
    aiExamples: {
      prompt1: "Replace 'A Leading Antifragile Firm' headline with language founders actually understand — focus on what we do, not philosophy",
      result1: "✓ 3 founder-focused headlines emphasizing hands-on partnership",
      prompt2: "Rewrite our value propositions section — replace 'antifragile' jargon with concrete founder benefits and examples",
      result2: "✓ All 5 value props rewritten with founder context + 2 supporting case snippets",
      prompt3: "Make our partnership model clearer — who we work with, what we actually provide, how founders reach us",
      result3: "✓ Partnership overview rewritten + updated CTA + founder testimonial section ready"
    }
  },
  {
    id: "the-sales-doctor",
    company: "The Sales Doctor",
    logo: "/assets/reports/the-sales-doctor/logo.svg",
    logoNeedsBg: true,
    url: "https://www.thesalesdocrx.com/",
    industry: "Sales Training & Enablement",
    pages: 18,
    hostingCost: 75,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the headline from 'Revenue health for a modern sales team' to something about what we actually solve — like fixing rep turnover",
      result1: "✓ Headline updated to 'Stop losing reps. Build teams that stay.'",
      prompt2: "Group the 4 services by the problem they solve instead of listing them all equally",
      result2: "✓ Services reorganized into 3 problem-focused groups",
      prompt3: "Change each service's 'Learn more' button to show what they'll actually get",
      result3: "✓ Button text updated: Bootcamps → 'See bootcamp demo', Consulting → 'Get proposal', Media → 'View sample'"
    }
  },
  {
    id: "vom",
    company: "Vom",
    logo: "/assets/reports/vom/logo.jpeg",
    logoNeedsBg: false,
    url: "https://www.vomdecision.com/",
    industry: "FinTech / Decision Intelligence",
    pages: 1,
    hostingCost: 50,
    waitDays: 3,
    aiExamples: {
      prompt1: "Change the headline from 'The decision platform for fast-moving risk strategies' to something about updating policies faster",
      result1: "✓ Headline updated to 'Update risk policies in hours, not weeks'",
      prompt2: "Group the 5 use cases into 3 sections by persona instead of equal tabs",
      result2: "✓ Use cases reorganized into 3 visible persona sections",
      prompt3: "Change the 'Book a demo' button to 'See policy updates live' on the hero section",
      result3: "✓ CTA updated across hero and use cases section"
    }
  }
];
