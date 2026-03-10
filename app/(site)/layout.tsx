import Navbar from "@/components/navbar";
import LenisScroll from "@/components/lenis";
import Footer from "@/components/footer";
import { ModalProvider } from "@/contexts/modal-context";
import { AiModalProvider } from "@/contexts/ai-modal-context";
import { IndieModalProvider } from "@/contexts/indie-modal-context";
import ContactModal from "@/components/contact-modal";
import AiModal from "@/components/ai-modal";
import IndieModal from "@/components/indie-modal";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <ModalProvider>
            <AiModalProvider>
                <IndieModalProvider>
                    <LenisScroll />
                    <Navbar />
                    {children}
                    <Footer />
                    <ContactModal />
                    <AiModal />
                    <IndieModal />
                </IndieModalProvider>
            </AiModalProvider>
        </ModalProvider>
    );
}
