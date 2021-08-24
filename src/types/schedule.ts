import { Recipe } from "./recipe"

export interface Schedule {
    id: string,
    menuId: string,
    date: Date,
    options: Recipe[]
}
