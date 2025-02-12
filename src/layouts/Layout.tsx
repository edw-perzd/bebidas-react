import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";
import Modal from "../componentes/Modal";

export default function Layout() {
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
