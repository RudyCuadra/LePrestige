import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { HomePage, AboutPage, ContactPage, Reviews } from "../pages";
import { ResidentialRoutes, CommercialRoutes, AccesoriesRoutes, MillworkRoutes, FurnitureRoutes } from "./";
import { UnderConstructionPage } from "../pages/UnderContructionPage";
import { SubmitReviewPage } from "../pages/SubmitReviewPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<HomePage />} />

                {/* RESIDENTIAL PROJECTS*/}
                <Route path="/construction/*" element={<ResidentialRoutes />} />

                {/* Note: Commercial now it inside RESIDENTIAL
                 * COMMERCIAL PROJECTS
                <Route path="/commercial/*" element={<CommercialRoutes />} />
                  */}

                {/* ACCESOSORIES
                <Route path="/accesories/*" element={<AccesoriesRoutes />} />
					*/}
				<Route path="/coming-soon" element={<UnderConstructionPage />} />

                {/* MILLWORK */}
                <Route path="/millwork/*" element={<MillworkRoutes />} />

                {/* FURNITURE */}
                <Route path="/furniture/*" element={<FurnitureRoutes />} />

                <Route path="about" element={<AboutPage />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="submit-review" element={<SubmitReviewPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="*" element={<HomePage />} />
            </Route>
        </Routes>
    )
}
