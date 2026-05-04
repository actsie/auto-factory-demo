import FypClient from "./fyp-client";

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fix Your Page",
    provider: {
        "@type": "Organization",
        name: "Fountain of Scale",
        url: "https://fountainofscale.com",
    },
    description: "We rebuild your Webflow, Squarespace, or Wix site into clean custom code you actually own — same design, same URLs, 3–5 days. Make any change yourself in minutes without a developer.",
    url: "https://fountainofscale.com/fix-your-page",
    offers: [
        {
            "@type": "Offer",
            name: "The Fix",
            price: "150",
            priceCurrency: "USD",
            description: "Full site rebuild into clean custom code. Same design, same URLs. You own the files.",
        },
        {
            "@type": "Offer",
            name: "The Fix + Host",
            price: "150",
            priceCurrency: "USD",
            description: "Full site rebuild plus hosting under your domain for $20/month. You own the code either way.",
        },
    ],
    serviceType: "Website Migration",
    areaServed: "Worldwide",
};

export default function FixYourPagePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <FypClient />
        </>
    );
}
