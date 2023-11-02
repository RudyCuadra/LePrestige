import { Link } from "react-router-dom"
import "../../styles/constructionsProjects.css"
//import image004 from "../../assets/images/IMG_006-min.webp"
import { millwork } from "../../content/millwork"
import { useContext } from "react"
import { ShowImgContext } from "../../context/ShowImgContext"

export const MillworkPage = () => {
    const millIMG01 = millwork[0].img
    /*
    const millIMG02 = millwork[1].img
    const millIMG03 = millwork[2].img
    const millIMG04 = millwork[3].img
    */
    const {showBigIMG} = useContext(ShowImgContext)
    return (
        <section className="allWidth">
            <article className="newGallery">
                <div className="vertical-div first-div horizon-div-father">
                    <div className="horizontal-div">
                        <Link onClick={() => showBigIMG(0)} to="millwork">
                            <img className="image--saturation" src={millIMG01} alt="image001" />
                        </Link>
                        <div className="accesoriesDesc">
                        </div>
                    </div>
                    <div className="horizontal-div">
                        {/*
                        <Link  onClick={() => showBigIMG(1)}  to="millwork">
                            <img className="image--saturation" src={millIMG02} alt="image001" />
                        </Link>
                        */}
                        <div className="accesoriesDesc">
                        </div>
                    </div>
                </div>
                <div className="vertical-div second-div">
                        {/*
                    <Link  onClick={() => showBigIMG(2)} to="millwork">
                        <img className="image--saturation" src={millIMG03} alt="image001" />
                    </Link>
                        */}
                    <div className="accesoriesDesc">
                    </div>
                </div>
                <div className="vertical-div first-div">
                        {/*
                    <Link  onClick={() => showBigIMG(3)} to="millwork">
                        <img className="image--saturation" src={millIMG04} alt="image001" />
                    </Link>
                        */}
                    <div className="accesoriesDesc">
                    </div>
                </div>
            </article>
        </section >
    )
}
