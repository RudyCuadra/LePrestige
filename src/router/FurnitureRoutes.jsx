import { Route, Routes } from "react-router-dom"
import { FurniturePage/*, MainCarrousel*/ } from "../pages/proejct-pages"
import { furniture } from "../content"
import { NewGallery } from "../pages/proejct-pages/NewGallery"

export const FurnitureRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<FurniturePage />} />
            <Route path="furniture" element={<NewGallery info={furniture} />} />
            {/*
            <Route path="furniture" element={<MainCarrousel info={furniture} isTitle={false} />} />
    */}
        </Routes>
    )
}