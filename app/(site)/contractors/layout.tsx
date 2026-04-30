import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "https://fountainofscale.com/contractors" },
    openGraph: { url: "https://fountainofscale.com/contractors" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
