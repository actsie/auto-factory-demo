import { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://fountainofscale.com/",
    },
    openGraph: {
        url: "https://fountainofscale.com/",
    },
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fountain of Scale",
    url: "https://fountainofscale.com",
    logo: "https://fountainofscale.com/assets/auto-factory.png",
    description: "Done-for-you automation systems for small businesses: follow-ups, lead capture, review replies, appointment reminders, and website replacement.",
    sameAs: ["https://www.linkedin.com/company/fountain-of-scale/"],
};

const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fountain of Scale",
    url: "https://fountainofscale.com",
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <HomeClient />
        </>
    );
}
