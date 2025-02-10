import { z } from "zod";
import { CategoriesAPIResponseSchema, RecipesAPIResponseSchema, SearchFiltersSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilters = z.infer<typeof SearchFiltersSchema>
export type Recipes = z.infer<typeof RecipesAPIResponseSchema>