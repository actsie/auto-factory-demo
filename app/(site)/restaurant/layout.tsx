import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "https://fountainofscale.com/restaurant" },
    openGraph: { url: "https://fountainofscale.com/restaurant" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
