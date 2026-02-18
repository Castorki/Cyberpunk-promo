import type { ListItem } from "../types/types";

export const buyListItem: ListItem[] = [
    {
        id: Math.floor(Math.random() * 1000000),
        mark: 'disk',
        descr: 'Футляр с игровыми дисками'
    },
    {
        id: Math.floor(Math.random() * 1000000),
        mark: 'codeForLoadGame',
        descr: 'Футляр с кодом для загрузки игры и дисками (pc)'
    },
    {
        id: Math.floor(Math.random() * 1000000),
        mark: 'gameWorldInfo',
        descr: 'Справочник с информацией об игровом мире'
    },
]