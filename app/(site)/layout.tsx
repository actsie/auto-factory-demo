import Navbar from "@/components/navbar";
import LenisScroll from "@/components/lenis";
import Footer from "@/components/footer";
import { ModalProvider } from "@/contexts/modal-context";
import { AiModalProvider } from "@/contexts/ai-modal-context";
import ContactModal from "@/components/contact-modal";
import AiModal from "@/components/ai-modal";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <ModalProvider>
            <AiModalProvider>
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
                <ContactModal />
                <AiModal />
            </AiModalProvider>
        </ModalProvider>
    );
}
