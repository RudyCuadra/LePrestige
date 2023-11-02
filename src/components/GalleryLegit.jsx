import { useContext, useState } from "react"
import { CardsArch } from "./CardsArch"
import { prueba } from "../helpers/imageHelper"
import { FilterContext } from "../context/FilterContext"
import { AiFillCloseSquare } from "react-icons/ai"
import "../styles/portfolioPage.css"

export const GalleryLegit = () => {
    const [selectedItemId, setSelectedItemId] = useState(null)
    const { tag  } = useContext(FilterContext)

    const handleCardClick = (itemId) => {
        setSelectedItemId(itemId)
        console.log(itemId)
    }
    return (
        <div className="portfolio--gallery">

            <CardsArch
                handleCardClick={handleCardClick}
                selectedItemId={selectedItemId}
                selectedTag={tag}
            />

            {(selectedItemId != null)
                ?
                <div className="project--container">
                    <div className="project--wrapper">
                        <div className="project--card">
                            <AiFillCloseSquare
                                onClick={() => setSelectedItemId(null)}
                                className="exit__icon" />

                            <div className="project--content">

                                <div className="project--texts">
                                    <h3 className="project--title">
                                        {prueba[selectedItemId - 1000].title}
                                    </h3>
                                    <p className="project--parr">
                                        {prueba[selectedItemId - 1000].description}
                                    </p>
                                </div>

                                <img
                                    src={prueba[selectedItemId - 1000].img}
                                    className="selected--card--img"
                                    alt="hola"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                :
                null
            }
        </div>
    )
}