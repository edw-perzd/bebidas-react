import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritePage from "./pages/FavoritePage";

export default function AppRouter(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites/" element={<FavoritePage />} />
        </Routes>
        </BrowserRouter>
    )
}