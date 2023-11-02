import { Head } from "../layout/Head"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "../styles/constructionsProjects.css"
import { useContext } from "react"
import { ShowImgContext } from "../context/ShowImgContext"

export const ConstructionsProjectsDouble = ({ headTitle, projects }) => {
    const [project001,
        project002,
        project003,
        project004,
        project005,
        project006,
        project007,
        project008,
        project009,
    ] = projects

    const coverIMG_001 = project001[0].img
    const title01 = project001[0].title

    const coverIMG_002 = project002[0].img
    const title02 = project002[0].title

    const coverIMG_003 = project003[0].img
    const title03 = project003[0].title

    const coverIMG_004 = project004[0].img
    const title04 = project004[0].title

    const coverIMG_005 = project005[0].img
    const title05 = project005[0].title

    const coverIMG_006 = project006[0].img
    const title06 = project006[0].title

    const coverIMG_007 = project007[0].img
    const title07 = project007[0].title

    const coverIMG_008 = project008[0].img
    const title08 = project008[0].title

    const coverIMG_009 = project009[0].img
    const title09 = project009[0].title


    const {showBigIMG} = useContext(ShowImgContext)
    return (
        <>
            <Head title={headTitle} />
            <section className="allWidth">
                <div className="constProjWrapper">
                    <article className="newGallery">
                        <div className="vertical-div first-div horizon-div-father">
                            <div className="horizontal-div">
                                <Link onClick={() => showBigIMG(0)} to={`${title01.replace(/\s/g, "-").toLowerCase()}`}>
                                    <img className="image--saturation" src={coverIMG_001} alt={title01}/>
                                </Link>
                            </div>
                            <div className="horizontal-div">
                                <Link onClick={() => showBigIMG(0)} to={`${title02.replace(/\s/g, "-").toLowerCase()}`}>
                                    <img className="image--saturation" src={coverIMG_002} alt={title02}/>
                                </Link>
                            </div>
                        </div>
                        <div className="vertical-div second-div">
                            <Link onClick={() => showBigIMG(0)} to={`${title03.replace(/\s/g, "-").toLowerCase()}`}>
                                <img className="image--saturation" src={coverIMG_003} alt={title03} />
                            </Link>
                        </div>
                        <div className="vertical-div first-div">
                            <Link onClick={() => showBigIMG(0)} to={`${title04.replace(/\s/g, "-").toLowerCase()}`}>
                                <img className="image--saturation" src={coverIMG_004} alt={title04}/>
                            </Link>
                        </div>
                    </article>

                    <article className="newGallery">
                        <div className="vertical-div first-div horizon-div-father">
                            <div className="horizontal-div">
                                <Link onClick={() => showBigIMG(0)} to={`${title05.replace(/\s/g, "-").toLowerCase()}`}>
                                    <img className="image--saturation" src={coverIMG_005} alt={title05}/>
                                </Link>
                            </div>
                            <div className="horizontal-div">
                                <Link onClick={() => showBigIMG(0)} to={`${title06.replace(/\s/g, "-").toLowerCase()}`}>
                                    <img className="image--saturation" src={coverIMG_006} alt={title06}/>
                                </Link>
                            </div>
                        </div>
                        <div className="vertical-div second-div">
                            <Link onClick={() => showBigIMG(0)} to={`${title07.replace(/\s/g, "-").toLowerCase()}`}>
                                <img className="image--saturation" src={coverIMG_007} alt={title07}/>
                            </Link>
                        </div>
                        <div className="vertical-div first-div">
                            <Link onClick={() => showBigIMG(0)} to={`${title08.replace(/\s/g, "-").toLowerCase()}`}>
                                <img className="image--saturation" src={coverIMG_008} alt={title08}/>
                            </Link>
                        </div>
                    </article>

                    <article className="newGallery">
                        <div className="vertical-div first-div horizon-div-father">
                            <div className="horizontal-div">
                                <Link onClick={() => showBigIMG(0)} to={`${title09.replace(/\s/g, "-").toLowerCase()}`}>
                                    <img className="image--saturation" src={coverIMG_009} alt={title09}/>
                                </Link>
                            </div>
                            <div className="horizontal-div">
                                {/*
                                <Link onClick={() => showBigIMG(0)} to={`${title06.replace(/\s/g, "-").toLowerCase()}`}>
                                    <img className="image--saturation" src={coverIMG_006} alt="image001" />
                                </Link>
                                */}
                            </div>
                        </div>
                        <div className="vertical-div second-div">
                                {/*
                            <Link onClick={() => showBigIMG(0)} to={`${title07.replace(/\s/g, "-").toLowerCase()}`}>
                                <img className="image--saturation" src={coverIMG_007} alt="image001" />
                            </Link>
                                */}
                        </div>
                        <div className="vertical-div first-div">
                                {/*
                            <Link onClick={() => showBigIMG(0)} to={`${title08.replace(/\s/g, "-").toLowerCase()}`}>
                                <img className="image--saturation" src={coverIMG_008} alt="image001" />
                            </Link>
                                */}
                        </div>
                    </article>
                </div>
            </section >
        </>
    )
}

// PropTypes
ConstructionsProjectsDouble.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.string
    ),
    headTitle: PropTypes.string
}
