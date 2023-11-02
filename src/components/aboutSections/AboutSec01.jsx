import PropTypes from "prop-types"
import "../../styles/about.css"
import useWidthClient from "../../hooks/useWidthClient"
export const AboutSec01 = ({ info,isMobile }) => {
		/*Custom Hook que determina si la pantalla mide menos de 550px*/

    return (
        <section
            className={isMobile ? "" : "scroll-area"}>
            <div className="allWidth">
                <article className="aboutLayout">
                    <div className="aboutLeft">
                        {info.map((item) => {
                            return (
                                <div key={item.id} className="aboutTextContainer">
                                    <h2 className="titleAbout">{item.title}</h2>
                                    <p className="parrAbout">{item.text1}</p>
                                    <p className="parrAbout"
                                        style={{ paddingBottom: "10px" }}>{item.text2}</p>
                                </div>
                            )
                        })}

                    </div>
                    <div className="aboutRight">
                        <div className="rightSmllContainer">
                            <h1 className="CEOTitle" >WHO ARE WE</h1>
                            <div className="subtitleContainer">
                                <h3 className="subtitleLeft">Luxury</h3>
                                <h3 className="subtitleLeft">is the</h3>
                                <h3 className="subtitleLeft">details</h3>
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
AboutSec01.propTypes = {
    info: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number,
                title: PropTypes.string,
                text1: PropTypes.string,
                text2: PropTypes.string
            }
        )
    )
}
