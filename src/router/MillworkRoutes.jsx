import { Route, Routes } from "react-router-dom"
import { /*MainCarrousel,*/ MillworkPage } from "../pages/proejct-pages"
import { millwork } from "../content"
import { NewGallery } from "../pages/proejct-pages/NewGallery"

export const MillworkRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MillworkPage />} />
            <Route path="millwork" element={<NewGallery info={millwork} />} />
            {/*
            <Route path="millwork" element={<MainCarrousel info={millwork} isTitle={false} />} />
            */}
        </Routes>
    )
}