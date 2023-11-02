/*import { galleryIMG, prueba } from "../helpers/imageHelper"*/
import { Head } from "../../layout/Head"
import "../../styles/portfolioPage.css"
//import "../styles/cardsArch.css"
//import { GalleryLegit } from "../components/GalleryLegit"
import { GalleryProjects } from "../../components/GalleryProject"

export const PortfolioPage = () => {
    return (
        <>
            <Head title="Services" />

            <GalleryProjects />
            <section className="allWidth">
                <div className="portfolio--container">
                    {/*
                    <GalleryLegit />
                    <div className="portfolio--filter">
                        <button className="filter--tag"
                            onClick={() =>setTag(null)}>
                            Show All
                        </button>
                        <button className="filter--tag"
                            onClick={() => setTag("commercial")}>
                            Commercial
                        </button>
                        <button className="filter--tag"
                            onClick={() => setTag("residential")}>
                            Residential
                        </button>
                        <button className="filter--tag"
                            onClick={() => setTag("millwork")}>
                            Millwork
                        </button>
                    </div>
                        */}
                </div>
            </section>
        </>
    )
}