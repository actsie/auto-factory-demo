import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "https://fountainofscale.com/real-estate" },
    openGraph: { url: "https://fountainofscale.com/real-estate" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
