import PropTypes from "prop-types"
import "../../styles/about.css"
import { MovingImages } from "../MovingImages"
import { movingImages } from "../../content/aboutUsContent"
import { Link } from "react-router-dom"
import team from "../../assets/images/team/wholeTeam.png"

export const AboutSec03 = ({ isMobile}) => {

    return (
        <section className="allWrap">
            <div 
            className={isMobile ? "" : "scroll-area allWidth"}>
                <article className="aboutLayoutOurTeam">

                    <div className="profileContainer" style={{marginBottom:"20px"}} >
                        <div className="sub-pc0sub1">
                            <img
                                className="image--saturation teamImg"
                                src={team}
                                alt="rebbe" />
                        </div>
                        <div className="sub-pc02Team">
                            <h2 className="CEOTitle ">TEAM DESCRIPTION</h2>
                            <p className="teamDesc">
                                Allow me to introduce our exceptional
                                team, a cohesive unit of more than 30
                                dedicated employees, all united under a
                                common purpose. Our shared objective
                                is to deliver excellence in every intricate
                                detail and impeccable finish, driven by
                                an unwavering commitment to
                                providing remarkable customer service
                                and exceptional craftsmanship.
                                With a combined wealth of experience
                                exceeding three decades in the industry,
                                our team doesn't just construct
                                buildings – we build a tightly-knit family.
                                Guided by a philosophy inspired by a
                                great spiritual leader, we approach our
                                work with compassion, foresight, and a
                                profound dedication to making a
                                positive impact.
                            </p>
                        </div>
                    </div>
                    <div className=" companyContainer">
                        <MovingImages movingImages={movingImages} />
                    </div>
                </article>
            </div>
        </section>
    )
}

// PropTypes
AboutSec03.propTypes = {
    info: PropTypes.arrayOf(
        PropTypes.array
    )
}
