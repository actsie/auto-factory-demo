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

export default function HomePage() {
    return <HomeClient />;
}
