import { StateCreator } from "zustand"
import { Recipe } from "../types"

export type FavoritesSliceType = {
    favorites: Recipe[]
    addFavorites: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
    loadFavorites: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    addFavorites: (recipe) => {
        if(get().favorites.some(d => d.idDrink === recipe.idDrink)){
            set({
                favorites: [...get().favorites.filter(d => d.idDrink !== recipe.idDrink)]
            })
        } else {
            set({
                favorites: [...get().favorites, recipe]
            })
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExist: (id) => {
        return !get().favorites.some(d => d.idDrink === id)
    },
    loadFavorites: () => {
        const dataStorage = localStorage.getItem('favorites')
        set({
            favorites: dataStorage? JSON.parse(dataStorage): []
        })
    }
})