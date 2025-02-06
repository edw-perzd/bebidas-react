import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";
import Layout from "./layouts/Layout";

export default function AppRouter(){
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites/" element={<FavoritePage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}