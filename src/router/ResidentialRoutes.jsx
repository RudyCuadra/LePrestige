import { Route, Routes } from "react-router-dom"
//import { ConstructionsProjects } from "../components/ConstructionsProjects"
//import { MainCarrousel } from "../pages/proejct-pages/MainCarrousel"
import { venetianIslands_1, residentialBalHarbour_1, residentialBalHarbour_2, residentialLaGorce, venetianIslands_2, residentialPorto_1, residentialBocaRaton, residentialHollywood1, constructionR1, constructionC3, constructionC2  } from "../content/residentialGallery"
import { NewGallery } from "../pages/proejct-pages/NewGallery"
import { ConstructionsProjectsDouble } from "../components/ConstructionProjectsDouble"
import { miami_1 } from "../content/commercialGallery"
import { ConstructionsProjects } from "../components/ConstructionsProjects"

export const ResidentialRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={</*ConstructionsProjectsDouble*/ ConstructionsProjects
                headTitle="Construction"
                projects={
                    [
                        residentialBalHarbour_2,
                        residentialBocaRaton,
                        residentialLaGorce,
                        residentialPorto_1,
                        residentialBalHarbour_1,
                        residentialHollywood1,
                        venetianIslands_1,
                        venetianIslands_2,
                        miami_1,
                        constructionR1,
                        constructionC3,
                        constructionC2,
                    ]
                } />} />
            {/* RESIDENTIAL CARROUSEL (child of residential projects) */}
            <Route path="venetian-islands-1" element={<NewGallery info={venetianIslands_1} />} />
            <Route path="venetian-islands-2" element={<NewGallery info={venetianIslands_2} />} />
            <Route path="la-gorce" element={<NewGallery info={residentialLaGorce} />} />
            <Route path="porto-1" element={<NewGallery info={residentialPorto_1} />} />
            <Route path="bal-harbour-1" element={<NewGallery info={residentialBalHarbour_1} />} />
            <Route path="bal-harbour-2" element={<NewGallery info={residentialBalHarbour_2} />} />
            <Route path="boca-raton" element={<NewGallery info={residentialBocaRaton} />} />
            <Route path="hollywood-1" element={<NewGallery info={residentialHollywood1} />} />
            <Route path="miami-1" element={<NewGallery info={miami_1} />} />

            <Route path="C2" element={<NewGallery info={constructionC2} />} />
            <Route path="C3" element={<NewGallery info={constructionC3} />} />
            <Route path="R1" element={<NewGallery info={constructionR1} />} />
            {/*

		     Rutas eliminadas de la ultima actualizacion 
            <Route path="unamed-2" element={<NewGallery info={residentialUnamed2} />} />
Rutas quitadas desde el inicio jaja
            <Route path="9-island-514" element={<MainCarrousel info={residencial9Island514} isTitle={true} />} />
            <Route path="katz-residence" element={<MainCarrousel info={residentialKatz} isTitle={true} />} />
            <Route path="unamed-2" element={<MainCarrousel info={residentialUnamed2} isTitle={true} />} />
            <Route path="9-island-1114" element={<MainCarrousel info={residencial9Island1114} isTitle={true} />} />
                 */}
        </Routes>
    )
}
