import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const urbanist = Urbanist({
    variable: "--font-urbanist",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Fountain of Scale",
        template: "%s | Fountain of Scale",
    },
    description:
        "Fountain of Scale builds and runs done-for-you automation systems for small businesses: follow-ups, lead capture, review replies, appointment reminders, website replacement, and more. Free to start.",
    keywords: [
        "small business automation",
        "done-for-you automation",
        "lead capture automation",
        "review reply automation",
        "appointment reminders",
        "website migration",
        "follow-up automation",
        "AI automation for small business",
    ],
    authors: [{ name: "Fountain of Scale" }],
    creator: "Fountain of Scale",
    applicationName: "Fountain of Scale",
    appleWebApp: {
        title: "Fountain of Scale",
        capable: true,
        statusBarStyle: "default",
    },
    openGraph: {
        title: "Fountain of Scale – Done-for-you automation for small businesses",
        description:
            "Fountain of Scale builds and runs automation systems for small businesses: follow-ups, lead capture, review replies, appointment reminders, website replacement, and more. Free to start.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fountain of Scale – Done-for-you automation for small businesses",
        description:
            "Fountain of Scale builds and runs automation systems for small businesses: follow-ups, lead capture, review replies, appointment reminders, website replacement, and more. Free to start.",
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZC38R6HLVP" strategy="afterInteractive" />
                <Script id="gtag-init" strategy="afterInteractive">{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-ZC38R6HLVP');
                `}</Script>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
