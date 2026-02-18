import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { ReactNode } from "react";

interface ScrollRestorationProps {
    children: ReactNode;
}

export const ScrollRestoration = ({ children }: ScrollRestorationProps) => {
    const location = useLocation();

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

    }, [location]);

    return children;
};