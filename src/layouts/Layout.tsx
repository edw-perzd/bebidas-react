import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";
import Modal from "../componentes/Modal";
import { useAppStore } from "../stores/useAppStore";
import { useEffect } from "react";

export default function Layout() {
  const loadFavorites = useAppStore(state => state.loadFavorites)
  useEffect(() => {
    loadFavorites()
  })
  return (
    <>
    <Header/>
    <main className="container mx-auto py-16">
      <Outlet />
    </main>
    <Modal/>
    </>
  )
}
