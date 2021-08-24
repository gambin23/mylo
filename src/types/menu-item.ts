export enum MenuItemType {
    Meat,
    Vegeterian,
    Salad,
    Pasta,
    Fish,
}

export interface MenuItem {
    id: string;
    name: string,
    description: string
    type: MenuItemType
}
