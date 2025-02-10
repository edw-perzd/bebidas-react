import { create } from "zustand";
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipeSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a)
})))