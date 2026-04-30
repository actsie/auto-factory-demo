import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "https://fountainofscale.com/hvac" },
    openGraph: { url: "https://fountainofscale.com/hvac" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
