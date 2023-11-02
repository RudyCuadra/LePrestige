import "../../styles/about.css"
import "../../styles/about_new_sections.css"
import ceoNfounder from "../../assets/images/team/CEO-IZZY-min.webp"

export const AboutSecNew03 = ({isMobile}) => {

    return (
        <section 
            className={isMobile ? "" : "scroll-area"}>
            < div className="allWidth" >
                <article className="aboutLayoutIns">
                    <div className="profileContainer" style={{padding:"0 20px"}}>
                        <div className="sub-pc01">
                            <img
                                className="image--saturation CEOImg"
                                src={ceoNfounder}
                                alt="IZZY LABKOWSKI" />
                        </div>
                        <div className="sub-pc02">
                            <div className="floatingTitleCeo">
                            <h2 className="CEOTitle">IZZY LABKOWSKI</h2>
                            <h3 className="CEOSubTitleJob">CEO & Company founder</h3>
                            </div>
                            <div className="CEOTextParr">
                            <p className="CEOparr" >
                                Allow me to introduce myself, a lifelong journeyer on a mission inspired by the profound teachings of
                                the Rebbe. Born in France, I was raised with a commitment to a purpose-driven path. Introduced to
                                the world of construction in 2001, I embarked on a journey that eventually led to the creation of Le
                                Prestige in 2015.
                            </p>
                            <p className="CEOparr">
                                For the past 18 years, Florida has been my canvas, and with my wife by my side, we've dedicated
                                ourselves to nurturing quality, efficiency, and exceptional customer service, drawing inspiration from
                                the essence of meaningful teachings. Guided by the wisdom of my parents, who served with a sense
                                of purpose, and by spiritual guidance, I've woven together a team united by a singular goal. Our aim
                                is to provide clients with more than just a home or a business space. We strive to forge deeper
                                connections – relationships that resonate in every corner, every detail.
                            </p>
                            <p className="CEOparr">
                                As I stand on the foundation of my journey, I'm humbled by the opportunity to create spaces that
                                reflect the essence of these teachings. With dedication, devotion, and the lessons learned from those
                                who've guided me, I lead a team that strives to infuse each project with meaning, turning structures
                                into lasting symbols of connection and purpose.
                            </p>
                            </div>
                        </div>
                        {/**
                        <div className="sub-pc03">
                            <h2 className="CEOLeftTitle">OUR
                                <br />  INSPIRATION</h2>
                            <p className="CEOsubtitleLeft">
                                “BLAZE YOUR OWN
                                PATH. YOU CAN BE
                                SURE THAT IT HAS
                                NOT BEEN SULLIED
                                BY OTHERS”
                            </p>
                        </div>
                         
                         */}
                    </div>
                </article>
            </div >
        </section >
    )
}
