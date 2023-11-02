import { Head } from "../layout/Head"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "../styles/constructionsProjects.css"
import { useContext } from "react"
import { MenuActiveContext } from "../context/MenuActiveContext"
import { ShowImgContext } from "../context/ShowImgContext"

export const ConstructionsProjects = ({ headTitle, projects }) => {

    const {showBigIMG} = useContext(ShowImgContext)
    const { 
        isIpadWidth,
        isMobileWidth,
        isFullWidth
    } = useContext(MenuActiveContext)

    const [project001,
        project002,
        project003,
        project004,
        project005,
        project006,
        project007,
        project008,
        project009,
        project010,
        project011,
        project012,
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

    const coverIMG_010 = project010[0].img
    const title010 = project010[0].title

    const coverIMG_011 = project011[0].img
    const title011 = project011[0].title

    const coverIMG_012 = project012[0].img
    const title012 = project012[0].title


    return (
        <>
            <Head title={headTitle} />
            <section className="allWidthNewGallery">

                <article className="newGalleryGrid">

                        {/* <div className={""}>
                        <Link onClick={() => showBigIMG(0)}  to={`${title011.replace(/\s/g , "-").toLowerCase()}`}>
                        <img className="image--saturation fit-image" src={coverIMG_011} alt={title011} style={{
        width: "400px", // Establece el ancho deseado, por ejemplo, 200px
        height: "auto"  // Mantén "auto" para mantener la proporción original
      }}/>
                        </Link>
                        </div> */}
                    <div className={isMobileWidth
                        ? "min-stretch"
                        : isMobileWidth
                            ? "h-stretch"
                            :  "min-stretch"
                    }>
                        <Link onClick={() => showBigIMG(0)}  to={`${title01.replace(/\s/g , "-").toLowerCase()}`}>
                            <img className="image--saturation fit-image" src={coverIMG_001} alt={title01}/>
                        </Link>
                    </div>


                    <div className={isIpadWidth
                        ? "min-stretch"
                        : isMobileWidth
                            ? "h-stretch"
                            :  "v-stretch"
                    }>
                        <Link onClick={() => showBigIMG(0)}  to={`${title03.replace(/\s/g , "-").toLowerCase()}`}>
                            <img className="image--saturation fit-image" src={coverIMG_003} alt={title03}/>
                        </Link>
                    </div>
                    <div className={isIpadWidth
                        ? "min-stretch"
                        : isMobileWidth
                            ? "h-stretch"
                            :  "v-stretch"
                    }>
                        <Link onClick={() => showBigIMG(0)}  to={`${title04.replace(/\s/g , "-").toLowerCase()}`}>
                            <img className="image--saturation fit-image" src={coverIMG_004} alt={title04}/>
                        </Link>
                    </div>
                    

                    <div className={isMobileWidth
                        ? "min-stretch"
                        : isMobileWidth
                            ? "h-stretch"
                            :  "min-stretch"
                    }>
                        <Link onClick={() => showBigIMG(0)}  to={`${title05.replace(/\s/g , "-").toLowerCase()}`}>
                            <img className="image--saturation fit-image" src={coverIMG_005} alt={title05}/>
                        </Link>
                    </div>
                    <div className={isIpadWidth
                        ? "min-stretch"
                        : isMobileWidth
                            ? "h-stretch"
                            :  "v-stretch"
                    }>
                        <Link onClick={() => showBigIMG(0)}  to={`${title07.replace(/\s/g , "-").toLowerCase()}`}>
                            {/* <img className="image--saturation fit-image" src={coverIMG_007} alt={title07}/> */}
                            <img className="image--saturation fit-image" src={coverIMG_012} alt={title012}/>
                        </Link>
                    </div>
                    <div className={isIpadWidth
                        ? "min-stretch"
                        : isMobileWidth
                            ? "h-stretch"
                            :  "v-stretch"
                    }>
                        <Link onClick={() => showBigIMG(0)}  to={`${title08.replace(/\s/g , "-").toLowerCase()}`}>
                            {/* <img className="image--saturation fit-image" src={coverIMG_008} alt={title08}/> */}
                            <img className="image--saturation fit-image" src={coverIMG_011} alt={title011}/>
                            
                        </Link>
                    </div>
                    <div className={isIpadWidth
                        ? "min-stretch"
                        : isMobileWidth
                            ? "h-stretch"
                            :  "min-stretch"
                    }>
                        <Link onClick={() => showBigIMG(0)}  to={`${title06.replace(/\s/g , "-").toLowerCase()}`}>
                            {/* <img className="image--saturation fit-image" src={coverIMG_006} alt={title06}/> */}
                            <img className="image--saturation fit-image" src={coverIMG_009} alt={title09}/>
                        </Link>
                    </div>


                    
                </article>

            </section >
        </>
    )
}

// PropTypes
ConstructionsProjects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.string
    ),
    headTitle: PropTypes.string
}
