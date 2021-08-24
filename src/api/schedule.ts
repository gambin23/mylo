import { MenuItemType } from './../types/menu-item'
import { Schedule } from './../types/schedule'

const mockSchedule: Schedule[] = [{
    id: '1',
    menuId: '1',
    date: new Date(2020, 0, 1),
    options: [{
        id: '1',
        name: 'Pennette',
        description: 'Pennette with Sicilian Sausage, Spinach Tomato Sauce & Feta',
        type: MenuItemType.Pasta
    },
    {
        id: '2',
        name: 'Pennette (V)',
        description: 'Pennette with Sicilian Sausage, Spinach Tomato Sauce & Feta\nGluten Free & Vegan Options Available',
        type: MenuItemType.Vegeterian
    },
    {
        id: '3',
        name: 'Chicken Caesar Salad',
        description: 'Chicken Caesar Salad with Bacon, Croutons and Parmesan',
        type: MenuItemType.Salad
    }]
},
{
    id: '2',
    menuId: '1',
    date: new Date(2020, 0, 2),
    options: [{
        id: '1',
        name: 'Pennette',
        description: 'Pennette with Sicilian Sausage, Spinach Tomato Sauce & Feta',
        type: MenuItemType.Pasta
    },
    {
        id: '2',
        name: 'Pennette (V)',
        description: 'Pennette with Sicilian Sausage, Spinach Tomato Sauce & Feta\nGluten Free & Vegan Options Available',
        type: MenuItemType.Vegeterian
    },
    {
        id: '3',
        name: 'Chicken Caesar Salad',
        description: 'Chicken Caesar Salad with Bacon, Croutons and Parmesan',
        type: MenuItemType.Salad
    }]
}]

export function getSchedule(): Promise<Schedule[]> {
    return new Promise((resolve) => resolve(mockSchedule))
}
