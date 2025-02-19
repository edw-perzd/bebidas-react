import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const showNotification = useAppStore(state => state.showNotification)
  const { pathname } = useLocation()
  const isHome = useMemo(() => pathname === '/', [pathname])
  const [searchFilters, setSearchFilters] = useState({
    ingredient: '',
    category: ''
  })

  const categories = useAppStore((state) => state.categories)
  const fetchCategories = useAppStore((state) => state.fetchCategories)
  const searchRecipes = useAppStore(state => state.searchRecipes)

  useEffect(() => {
    fetchCategories()
  }, [])

  function handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>){
    setSearchFilters({
      ...searchFilters, [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(Object.values(searchFilters).includes('')){
      showNotification({
        text: 'No dejar espacios en blanco',
        error: true
      })
      // console.log('No dejar campos en blanco')
      return
    }

    searchRecipes(searchFilters)
  }

  return (
    <>
    <header className={isHome? 'bg-header bg-cover bg-center px-14': 'bg-slate-800 px-14'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="logotipo" />
                </div>

                <nav className="flex gap-4">
                  <NavLink 
                    className={({isActive}) => isActive ? 
                    "text-orange-400 uppercase":
                    "text-white uppercase"
                    }
                    to='/'>Home</NavLink>
                  <NavLink 
                    className={({isActive}) => isActive ? 
                    "text-orange-400 uppercase":
                    "text-white uppercase"
                    }
                    to='/favorites'>Favoritos</NavLink>
                </nav>
            </div>
            {isHome && (
              <form onSubmit={handleSubmit} className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
              <div className="space-y-4">
                <label 
                  htmlFor="ingredient"
                  className="block text-white uppercase font-extrabold text-lg">
                    Nombre o Ingredientes
                  </label>
                  <input 
                    id='ingredient'
                    type="text" 
                    onChange={handleChange}
                    name="ingredient"
                    className="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila Café"
                    />
              </div>
              <div className="space-y-4">
                <label 
                  htmlFor="category"
                  className="block text-white uppercase font-extrabold text-lg">
                    Categoría
                  </label>
                  <select 
                    id='category'
                    name="category"
                    onChange={handleChange}
                    className="p-3 w-full rounded-lg focus:outline-none"
                    >
                      <option value="">-- Seleccione --</option>
                      {
                        categories.drinks.map(category => (
                          <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                        ))
                      }
                    </select>
              </div>
              <input 
                type="submit"
                className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" 
                value="Buscar Recetas" />
            </form>
            )}
        </div>
    </header>
    </>
  )
}
