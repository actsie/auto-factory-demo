"use client";
import { createContext, useContext, useState } from "react";

type IndieModalContextType = {
    open: boolean;
    source: string;
    openIndieModal: (source?: string) => void;
    closeIndieModal: () => void;
};

const IndieModalContext = createContext<IndieModalContextType>({
    open: false,
    source: "",
    openIndieModal: () => {},
    closeIndieModal: () => {},
});

export function IndieModalProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [source, setSource] = useState("");
    return (
        <IndieModalContext.Provider value={{ open, source, openIndieModal: (src = "") => { setSource(src); setOpen(true); }, closeIndieModal: () => setOpen(false) }}>
            {children}
        </IndieModalContext.Provider>
    );
}

export const useIndieModal = () => useContext(IndieModalContext);
