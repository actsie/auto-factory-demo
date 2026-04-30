import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "https://fountainofscale.com/fix-your-page" },
    openGraph: { url: "https://fountainofscale.com/fix-your-page" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
