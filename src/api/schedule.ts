import { RecipeCategory } from '@/types/recipe'
import { Schedule } from '@/types/schedule'
import { mockUser } from './users'

const mockSchedule: Schedule[] = [{
    id: '1',
    menuId: '1',
    date: new Date(2020, 0, 1),
    options: [{
        id: '1',
        name: 'Pennette',
        description: 'Pennette with Sicilian Sausage, Spinach Tomato Sauce & Feta',
        category: RecipeCategory.Pasta,
        img: 'recipe.jpg',
        votes: [mockUser]
    },
    {
        id: '2',
        name: 'Ribeye',
        description: 'Ribeye with Pepper Sauce',
        category: RecipeCategory.Vegeterian,
        img: 'recipe-2.jpg',
        votes: [mockUser, mockUser, mockUser, mockUser, mockUser]
    },
    {
        id: '3',
        name: 'Chicken Caesar Salad',
        description: 'Salad with Bacon, Croutons and Parmesan',
        category: RecipeCategory.Salad,
        img: 'recipe-3.jpg',
        votes: [mockUser]
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
        category: RecipeCategory.Pasta,
        img: 'recipe.jpg',
        votes: [mockUser]
    },
    {
        id: '2',
        name: 'Ribeye',
        description: 'Ribeye with Pepper Sauce',
        category: RecipeCategory.Vegeterian,
        img: 'recipe-2.jpg',
        votes: [mockUser, mockUser, mockUser]
    },
    {
        id: '3',
        name: 'Chicken Caesar Salad',
        description: 'Salad with Bacon, Croutons and Parmesan',
        category: RecipeCategory.Salad,
        img: 'recipe-3.jpg',
        votes: [mockUser, mockUser, mockUser, mockUser, mockUser, mockUser, mockUser]
    }]
}]

export function getSchedule(): Promise<Schedule[]> {
    return new Promise((resolve) => resolve(mockSchedule))
}
