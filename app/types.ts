// app/types.ts
export interface Recipe {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    ingredients: string[];
    steps: string[];
}