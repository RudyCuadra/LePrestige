import "../../styles/about.css"
import "../../styles/about_new_sections.css"
//import rebbe from "../../assets/images/team/rebbe.png"
import rebbe from "../../assets/images/team/rebbeV2.webp"

export const AboutSecNew02 = ({isMobile}) => {

    return (
        <section 
            className={isMobile ? "" : "scroll-area"}>
            < div className="allWidth" >
                <article className="aboutLayoutIns">
                    <div className="profileContainer">
                        <div className="sub-pcMobile">
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
                        <div className="sub-pc01">
                            <img
                                className="image--saturation rebbeImg"
                                src={rebbe}
                                alt="rebbe" />
                        </div>
                        <div className="sub-pc02">
                            <h2 className="CEOTitle">LUBAVITCHER REBBE</h2>
                            <p className="CEOparr">
                                At the heart of our company's ethos stands an unwavering source of
                                inspiration – the Lubavitcher Rebbe. As our revered mentor and role
                                model, the Rebbe's teachings and values infuse every aspect of our work,
                                shaping us into a remarkable team dedicated to excellence and service.
                                With a legacy of compassion, wisdom, and visionary leadership, the
                                Rebbe's philosophy resonates deeply within our organization. Just as the
                                Rebbe's guidance has transformed lives, we too seek to transform spaces,
                                infusing them with meticulous attention to detail and a commitment to
                                perfection.
                            </p>
                            <p className="CEOparr">
                                In mirroring the Rebbe's commitment to uplifting and empowering those
                                around us, we forge a bond that transcends construction. Our team
                                operates with a shared sense of purpose – one that reflects the Rebbe's
                                ideals of selfless service, compassion, and unwavering dedication.
                                As we embark on each project, we channel the Rebbe's spirit, ensuring
                                that every endeavor is marked by excellence, integrity, and a profound
                                respect for the needs and aspirations of our clients. With the Lubavitcher
                                Rebbe as our guiding light, we aspire to craft spaces that not only reflect
                                exceptional craftsmanship but also stand as living tributes to the values
                                that fuel our journey.
                            </p>
                        </div>
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
                    </div>
                </article>
            </div >
        </section >
    )
}
