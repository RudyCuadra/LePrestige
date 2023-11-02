//import { Link } from "react-router-dom"
import "../../styles/constructionsProjects.css"
//import { furniture } from "../../content/furniture"
//import { useContext } from "react"
//import { ShowImgContext } from "../../context/ShowImgContext"

export const FurniturePage = () => {
    /*
    const furnitureIMG01 = furniture[0].img
    const furnitureIMG02 = furniture[1].img
    const furnitureIMG03 = furniture[2].img
    const furnitureIMG04 = furniture[1].img
    const {showBigIMG} = useContext(ShowImgContext)
    */
    return (
        <section className="allWidth">
            <article className="newGallery">
                <div className="vertical-div first-div horizon-div-father">
                    <div className="horizontal-div">
                            {/*
                        <Link  onClick={() => showBigIMG(0)} to="furniture">
                            <img className="image--saturation" src={furnitureIMG01} alt="image001" />
                        </Link>
                            */}
                        <div className="accesoriesDesc">
                        </div>
                    </div>
                    <div className="horizontal-div">
                            {/*
                        <Link onClick={() => showBigIMG(1)}  to="furniture">
                            <img className="image--saturation" src={furnitureIMG02} alt="image001" />
                        </Link>
                            */}
                        <div className="accesoriesDesc">
                        </div>
                    </div>
                </div>
                <div className="vertical-div second-div">
                            {/*
                    <Link  onClick={() => showBigIMG(2)} to="furniture">
                        <img className="image--saturation" src={furnitureIMG03} alt="image001" />
                    </Link>
                            */}
                    <div className="accesoriesDesc">
                    </div>
                </div>
                <div className="vertical-div first-div">
                            {/*
                    <Link  onClick={() => showBigIMG(1)} to="furniture">
                        <img className="image--saturation" src={furnitureIMG04} alt="image001" />
                    </Link>
                            */}
                    <div className="accesoriesDesc">
                    </div>
                </div>
            </article>
        </section >
    )
}
