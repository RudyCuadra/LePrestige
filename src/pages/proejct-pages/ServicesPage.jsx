import { Link } from "react-router-dom"
import "../../styles/constructionsProjects.css"
import { accsBathRoom, accsKitchen, accsDinningRoom, accesories } from "../../content/accesoriesItems"

export const ServicesPage = () => {
    const bathroom = accsBathRoom[0].img
    const kitchen = accsKitchen[0].img
    const dinningRoom = accsDinningRoom[0].img
    const accesoriesIMG = accesories[0].img
    return (
        <section className="allWidth">
            <article className="newGallery">
                <div className="vertical-div first-div horizon-div-father">
                    <div className="horizontal-div">
                        <Link to="kitchen">
                            <img className="image--saturation" src={kitchen} alt="image001" />
                        </Link>
                        {/*
                        <div className="accesoriesDesc">
                            Kitchens
                        </div>
                         */}
                    </div>
                    <div className="horizontal-div">
                        <Link to="bathrooms">
                            <img className="image--saturation" src={bathroom} alt="image001" />
                        </Link>
                    </div>
                </div>
                <div className="vertical-div second-div">
                    <Link to="accesories">
                        <img className="image--saturation" src={accesoriesIMG} alt="image001" />
                    </Link>
                </div>
                <div className="vertical-div first-div">
                    <Link to="dinningrooms">
                        <img className="image--saturation" src={dinningRoom} alt="image001" />
                    </Link>
                </div>
            </article>
        </section >
    )
}