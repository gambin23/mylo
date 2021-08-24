import { MenuItem } from "./menu-item"

export interface Schedule {
    id: string,
    menuId: string,
    date: Date,
    options: MenuItem[]
}
