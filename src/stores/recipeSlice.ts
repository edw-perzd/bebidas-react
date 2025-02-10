import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeServices"
import { Categories, Recipes, SearchFilters } from "../types"


export type RecipeSliceType = {
    categories: Categories
    recipes: Recipes
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>
}

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    recipes: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const recipes = await getRecipes(filters)
        set({
            recipes
        })
    }
})