import { User } from '@/types/user';
import { Recipe } from '@/types/recipe';

export interface Schedule {
    id: string,
    menuId: string,
    date: Date,
    options: ScheduleRecipe[]
}

export interface ScheduleRecipe extends Recipe {
    votes: User[]
}
