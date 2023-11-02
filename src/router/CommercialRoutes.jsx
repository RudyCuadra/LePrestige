import { Route, Routes } from "react-router-dom"
import { miami_1 } from "../content/commercialGallery"
import { ConstructionCommercialProj } from "../components/ConstructionCommercialProj"
//import { MainCarrousel } from "../pages/proejct-pages/MainCarrousel"
import { NewGallery } from "../pages/proejct-pages/NewGallery"

export const CommercialRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ConstructionCommercialProj
                headTitle="Commercial"
                projects={
                    [
                        miami_1,
                        miami_1,
                        miami_1,
                        miami_1
                    ]
                } />} />
            {/* COMMERCIAL CARROUSEL (child of commercial projects) */}
            
            {/*
            <Route path="miami-1" element={<NewGallery info={miami_1}/>} />
            */}
        </Routes>
    )
}
