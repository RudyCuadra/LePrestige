import PropTypes from "prop-types"
import "../../styles/about.css"

export const AboutSec02 = ({ info, isMobile }) => {

    const [
        insPeopleIMG,
        insPeopleNAME,
        insPeopleDesc
    ] = info

    return (
        <section
            className={isMobile ? "" : "scroll-area"}>
            <div className="allWidth">
                <article className="aboutLayoutIns">
                    <div className="aboutLeftIns">
                        <img
                            className="image--saturation inspIMG"
                            src={insPeopleIMG}
                            alt={insPeopleNAME} />
                        <div className="textsIns">
                            <h2 className="titleAbout titleCEO">{insPeopleNAME}</h2>
                            <p className="parrIns">{insPeopleDesc}</p>
                        </div>
                    </div>
                    <div className="aboutRightIns">
                        <div className="rightSmllContainerIns">
                            <h1 className="titleLeftIns">Inspirational People</h1>
                            <div className="subtitleContainer">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </div>
                            <div className="emptySpan"></div>
                        </div>
                    </div>

                </article>
            </div>
        </section>
    )
}

// PropTypes
AboutSec02.propTypes = {
    info: PropTypes.arrayOf(
        PropTypes.string
    )
}
