import { Menu } from '@/types/Menu'

const mockMenus: Menu[] = [{
    id: '1',
    name: 'GiG Lunch | Malta',
    description: 'All the lunch menu offered at GiG Beach. You can book your lunch from here.',
    img: 'gig.png'
},
{
    id: '2',
    name: 'GiG Lunch | Spain',
    description: 'All the lunch menu offered at GiG Marbella. You can book your lunch from here.',
    img: 'gig.png'
}]

export function getMenus (): Promise<Menu[]> {
    return new Promise((resolve) => resolve(mockMenus))
}

export function getMenu (id: string): Promise<Menu> {
    return new Promise((resolve) => resolve(mockMenus.find(x => x.id === id)))
}
