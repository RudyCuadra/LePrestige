import { Route, Routes } from "react-router-dom"
import { ServicesPage } from "../pages/proejct-pages/ServicesPage"
//import { MainCarrousel } from "../pages/proejct-pages/MainCarrousel"
import { accesories, accsBathRoom, accsDinningRoom, accsKitchen } from "../content/accesoriesItems"
import { NewGallery } from "../pages/proejct-pages/NewGallery"

export const AccesoriesRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ServicesPage />} />

            <Route path="kitchen" element={<NewGallery info={accsKitchen} />} />
            <Route path="bathrooms" element={<NewGallery info={accsBathRoom} />} />
            <Route path="dinningrooms" element={<NewGallery info={accsDinningRoom} />} />
            <Route path="accesories" element={<NewGallery info={accesories} />} />
            {/*
            <Route path="kitchen" element={<MainCarrousel info={accsKitchen} isTitle={false} />} />
            <Route path="bathrooms" element={<MainCarrousel info={accsBathRoom} isTitle={false} />} />
            <Route path="dinningrooms" element={<MainCarrousel info={accsDinningRoom} isTitle={false} />} />
            <Route path="accesories" element={<MainCarrousel info={accesories} isTitle={false} />} />
             */}
        </Routes>
    )
}
