export enum RecipeCategory {
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
    category: RecipeCategory,
    img: string
}
