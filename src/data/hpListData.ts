import type { HpListItem } from "../types/types";


export const hpList: HpListItem[] =  [
    {
        id: Math.floor(Math.random() * 1000000),
        mark: 'brightColors',
        descr: 'Яркие насыщенные цвета'
    },
    {
        id: Math.floor(Math.random() * 1000000),
        mark: 'clearImages',
        descr: 'Кристальная четкость изображения'
    },
    {
        id: Math.floor(Math.random() * 1000000),
        mark: 'fastAndSmoutheMotions',
        descr: 'Быстрые движения и плавный геймплей'
    },
]