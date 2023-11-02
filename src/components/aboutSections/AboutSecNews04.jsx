import "../../styles/about.css"
import "../../styles/about_new_sections.css"
import cooGabriel from "../../assets/images/team/COO-GABRIEL-min.webp"
import cooJuan from "../../assets/images/team/COO-JUAN-min.webp"

export const AboutSecNew04 = ({isMobile}) => {

    return (
        <section
            className={isMobile ? "" : "scroll-area"}>
            < div className="allWidth" >
                <article className="aboutLayoutIns">
                    <div className="miniprofileContainer" style={{ padding: "0 20px" }}>
                        <div className="sub-pc01">
                            <img
                                className="image--saturation CEOImg"
                                src={cooGabriel}
                                alt="IZZY LABKOWK" />
                        </div>
                        <div className="sub-pc02">
                            <h2 className="CEOTitle">GABRIEL</h2>
                            <p className="CEOSubTitleJob">
                                COO of the Construction Division</p>
                            <p className="CEOparr" >
                                Introducing Gabriel, a remarkable individual
                                who embodies a unique blend of cultures and
                                an exceptional level of dedication. Growing up
                                in both France and Peru, Gabriel brings a
                                diverse perspective and a rich cultural influence
                                to our team. His unwavering commitment and
                                remarkable work ethic have been a driving
                                force in our organization. Hailing from two
                                vibrant nations, Gabriel's upbringing has
                                instilled in him a profound sense of dedication
                                that resonates in every project he undertakes.
                                His ability to bridge cultures and bring a fresh
                                perspective is truly unparalleled, making him an
                                invaluable asset to our team. Experience
                                firsthand the impact of Gabriel's dynamic
                                approach and unwavering determination as he
                                continues to elevate our endeavors, leaving a
                                lasting mark on our collective success
                            </p>
                        </div>
                    </div>

                    <div className="miniprofileContainer" style={{ padding: "0 20px" }}>
                        <div className="sub-pc01">
                            <img
                                className="image--saturation CEOImg"
                                src={cooJuan}
                                alt="IZZY LABKOWK" />
                        </div>
                        <div className="sub-pc02">
                            <h2 className="CEOTitle">JUAN</h2>
                            <p className="CEOSubTitleJob">
                                COO of the Millwork Division</p>
                            <p className="CEOparr">
                                Introducing Juan, our accomplished Chief
                                Operating Officer for the Millwork department,
                                whose extensive manufacturing experience
                                spanning two decades is second to none. With
                                an unwavering commitment to precision and
                                an unparalleled devotion to details, Juan's
                                expertise elevates our operations to
                                exceptional heights. His journey through the
                                intricacies of manufacturing has equipped him
                                with an unmatched ability to orchestrate
                                seamless processes. Juan's remarkable acumen
                                is fortified by his dedication to perfecting even
                                the finest elements. His steadfast approach
                                ensures that every project reflects an
                                unwavering commitment to excellence. Witness
                                firsthand the impact of Juan's astute leadership
                                and meticulous focus, as he continues to steer
                                our Millwork department to unparalleled
                                success.
                            </p>
                        </div>
                    </div>
                </article>
            </div >
        </section >
    )
}
