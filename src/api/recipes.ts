import { Recipe, RecipeCategory } from '@/types/recipe'

const mockRecipes: Recipe[] = [{
    id: '1',
    name: 'Grilled Ribeye',
    description: 'Grilled Ribeye with Chimichurri sauce and New Potatoes',
    category: RecipeCategory.Meat,
    img: 'https://img.apmcdn.org/f48544c79836fb494954534b16f4c5b270eb120b/uncropped/045e35-splendid-table-perfect-rib-eye-steak-potatoes-chimichurri-sauce-c-kristin-teig-lede.jpg'
},
{
    id: '2',
    name: 'Grilled Fish',
    description: 'Grilled Fish with Lemon and Parsley',
    category: RecipeCategory.Fish,
    img: 'https://media.istockphoto.com/photos/grilled-fish-plate-picture-id172380619?s=612x612'
},
{
    id: '3',
    name: 'Chicken Salad',
    description: 'Chicken Salad with a mix of vegetables and creamy white dressing',
    category: RecipeCategory.Salad,
    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190611-buffalo-chicken-salad-225-landscape-pf-1561390263.png?crop=0.910xw:0.683xh;0.0897xw,0.144xh&resize=1200:*'
},
{
    id: '1',
    name: 'Grilled Ribeye',
    description: 'Grilled Ribeye with Chimichurri sauce and New Potatoes',
    category: RecipeCategory.Meat,
    img: 'https://img.apmcdn.org/f48544c79836fb494954534b16f4c5b270eb120b/uncropped/045e35-splendid-table-perfect-rib-eye-steak-potatoes-chimichurri-sauce-c-kristin-teig-lede.jpg'
},
{
    id: '2',
    name: 'Grilled Fish',
    description: 'Grilled Fish with Lemon and Parsley',
    category: RecipeCategory.Fish,
    img: 'https://media.istockphoto.com/photos/grilled-fish-plate-picture-id172380619?s=612x612'
},
{
    id: '3',
    name: 'Chicken Salad',
    description: 'Chicken Salad with a mix of vegetables and creamy white dressing',
    category: RecipeCategory.Salad,
    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190611-buffalo-chicken-salad-225-landscape-pf-1561390263.png?crop=0.910xw:0.683xh;0.0897xw,0.144xh&resize=1200:*'
}]

export function getRecipes(): Promise<Recipe[]> {
    return new Promise((resolve) => resolve(mockRecipes))
}

export function getRecipe(id: string): Promise<Recipe> {
    return new Promise((resolve) => resolve(mockRecipes.find(x => x.id === id)))
}
