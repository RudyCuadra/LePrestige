import { Head } from "../layout/Head"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "../styles/constructionsProjects.css"
import { useContext } from "react"
import { ShowImgContext } from "../context/ShowImgContext"
import noShowBig from "../assets/images/noShowIMGBig-min.webp"
import noShowSmall from "../assets/images/noShowIMGSmall-min.webp"

export const ConstructionCommercialProj = ({ headTitle, projects }) => {
    const [project001, project002, project003, project004] = projects

    const coverIMG_001 = project004[0].img
    const title01 = project004[0].title

    {/*
    const coverIMG_002 = project004[1].img
    const title02 = project004[1].title

    const coverIMG_003 = project004[0].img
    const title03 = project004[0].title

    const coverIMG_004 = project004[1].img
    const title04 = project004[1].title
    */}
    const {showBigIMG} = useContext(ShowImgContext)

    return (
        <>
            <Head title={headTitle} />
            <section className="allWidth">
                <article className="newGallery">
                    <div className="vertical-div first-div horizon-div-father">
                        <div className="horizontal-div">
                            <Link onClick={() => showBigIMG(0)}  to={`${title01.replace(/\s/g , "-").toLowerCase()}`}>
                                <img className="image--saturation" src={coverIMG_001} alt="image001" />
                            </Link>
                        </div>
                        <div className="horizontal-div">
                            {/*
                            <Link onClick={() => showBigIMG(1)}  to="">
                                <img className="image--saturation" src={noShowBig} alt="image001" />
                            </Link>
                            */}
                        </div>
                    </div>
                    <div className="vertical-div second-div">
                            {/*
                            <Link onClick={() => showBigIMG(1)}  to="">
                            <img className="image--saturation" src={noShowSmall} alt="image001" />
                        </Link>
                            */}
                    </div>
                    <div className="vertical-div first-div">
                            {/*
                            <Link onClick={() => showBigIMG(1)}  to="">
                            <img className="image--saturation" src={noShowBig} alt="image001" />
                        </Link>
                            */}
                    </div>
                </article>
            </section >
        </>
    )
}

// PropTypes
ConstructionCommercialProj.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.array
    ),
    headTitle: PropTypes.string
}
