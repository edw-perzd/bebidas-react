import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"

export default function HomePage(){

    const recipes = useAppStore(state => state.recipes)
    const hasRecipes = useMemo(() => recipes.drinks.length > 0, [recipes])

    return(
        <>
            <h1>Recetas</h1>
            {hasRecipes? (
                <>
                <p>Si hay recetas</p>
                <ul>
                    {
                        recipes.drinks.map(drink => (
                            <li key={drink.idDrink}>{drink.strDrink}</li>
                        ))
                    }
                </ul>
                </>
            ): (
                <p>No hay recetas todavia, busca con el formulario</p>
            )}
        </>
    )
}