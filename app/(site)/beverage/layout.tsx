import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "https://fountainofscale.com/beverage" },
    openGraph: { url: "https://fountainofscale.com/beverage" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
