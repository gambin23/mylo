import { RecipeType } from '../types/recipe'
import { Schedule } from './../types/schedule'

const mockSchedule: Schedule[] = [{
    id: '1',
    menuId: '1',
    date: new Date(2020, 0, 1),
    options: [{
        id: '1',
        name: 'Pennette',
        description: 'Pennette with Sicilian Sausage, Spinach Tomato Sauce & Feta',
        type: RecipeType.Pasta,
        img: 'recipe.jpg'
    },
    {
        id: '2',
        name: 'Ribeye',
        description: 'Ribeye with Pepper Sauce',
        type: RecipeType.Vegeterian,
        img: 'recipe-2.jpg'
    },
    {
        id: '3',
        name: 'Chicken Caesar Salad',
        description: 'Salad with Bacon, Croutons and Parmesan',
        type: RecipeType.Salad,
        img: 'recipe-3.jpg'
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
        type: RecipeType.Pasta,
        img: 'recipe.jpg'
    },
    {
        id: '2',
        name: 'Pennette (V)',
        description: 'Pennette with Sicilian Sausage, Spinach Tomato Sauce & Feta\nGluten Free & Vegan Options Available',
        type: RecipeType.Vegeterian,
        img: 'recipe.jpg'
    },
    {
        id: '3',
        name: 'Chicken Caesar Salad',
        description: 'Chicken Caesar Salad with Bacon, Croutons and Parmesan',
        type: RecipeType.Salad,
        img: 'recipe.jpg'
    }]
}]

export function getSchedule(): Promise<Schedule[]> {
    return new Promise((resolve) => resolve(mockSchedule))
}
