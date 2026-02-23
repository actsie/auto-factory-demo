"use client";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
    open: boolean;
    source: string;
    openModal: (source?: string) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
    open: false,
    source: "",
    openModal: () => {},
    closeModal: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [source, setSource] = useState("");
    return (
        <ModalContext.Provider value={{ open, source, openModal: (src = "") => { setSource(src); setOpen(true); }, closeModal: () => setOpen(false) }}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);
