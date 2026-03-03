"use client";
import { createContext, useContext, useState } from "react";

type AiModalContextType = {
    open: boolean;
    source: string;
    openAiModal: (source?: string) => void;
    closeAiModal: () => void;
};

const AiModalContext = createContext<AiModalContextType>({
    open: false,
    source: "",
    openAiModal: () => {},
    closeAiModal: () => {},
});

export function AiModalProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [source, setSource] = useState("");
    return (
        <AiModalContext.Provider value={{ open, source, openAiModal: (src = "") => { setSource(src); setOpen(true); }, closeAiModal: () => setOpen(false) }}>
            {children}
        </AiModalContext.Provider>
    );
}

export const useAiModal = () => useContext(AiModalContext);
