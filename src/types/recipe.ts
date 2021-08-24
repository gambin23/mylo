export enum RecipeType {
    Meat,
    Vegeterian,
    Salad,
    Pasta,
    Fish,
}

export interface Recipe {
    id: string;
    name: string,
    description: string
    type: RecipeType,
    img: string
}
