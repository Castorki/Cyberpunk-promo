import type { Platforms } from "../types/types";

export const platformsList: Platforms[] = [
    {
        id: Math.round(Math.random() * 10000),
        img: 'pcLogo',
        alt: 'PC'
    },
    {
        id: Math.round(Math.random() * 10000),
        img: 'xboxLogo',
        alt: 'Xbox'
    },
    {
        id: Math.round(Math.random() * 10000),
        img: 'stadiaLogo',
        alt: 'Stadia'
    },
    {
        id: Math.round(Math.random() * 10000),
        img: 'playstationLogo',
        alt: 'Playstation 4'
    },
]