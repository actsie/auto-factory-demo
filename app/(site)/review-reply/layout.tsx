import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "https://fountainofscale.com/review-reply" },
    openGraph: { url: "https://fountainofscale.com/review-reply" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
