import { Link } from "react-router-dom"
import Arrows from "../assets/Arrows"
import { ContactForm } from "../components/ContactForm"
import { Head } from "../layout/Head"
import "../styles/contactPage.css"
import "../styles/footerNew.css"
import "../styles/about.css"
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp
} from "react-icons/fa"
import { ImLocation2 } from "react-icons/im"
import {MdPhoneInTalk} from "react-icons/md"

export const ContactPage = () => {
    return (
        <>
            <Head title="Contact" />

            <section className="allWidthContact">
                <article className="contactContainer">
                    <h1 className="contactTitle">Get in Touch</h1>
                    <div className="contactWrapper">
                        <div className="contactLeft">
                            <h2 className="contactSubtitle">
                                What a sincere conversation about your expectations?
                            </h2>
                            <p className="contactParr">
                                Le Prestige is a home to a wealth of construction services,
                                aiming for the highest standards to be met in every detail.
                            </p>
                            <p className="contactParr">
                                Our Work is exclusive and focused we work with high-end
                                materials always at the forefront.
                            </p>
                            <p className="contactParr">
                                We luxuriously sculpt your vision. More than building,
                                we manufacture relantionships.
                            </p>
                            <a
                                href="https://goo.gl/maps/TUv4QRR87e97LgjS7"
                                target='_blank'
                                rel="noreferrer">
                                <span className="mapLink">
                                    Get Location <Arrows />
                                </span>
                            </a>
                        </div>

                        <div className="contactRight">
                            <ContactForm map={false} />
                        </div>

                    </div>
                </article>

                    {/*Reviews*/}
                    <button className="reviewBtn">
                        <Link to="/reviews">
                            REVIEWS
                        </Link>
                    </button>

                <footer className="footerContact">
                    <div className="footerWraper">

                        <div className="footeSubContact">
                            <h4 className="footerTitle">Address</h4>
                            <a
                                href="https://goo.gl/maps/q5mGxBALEpobxs5Q9"
                                className="footer--addrs"
                                target='_blank'
                                rel="noreferrer">
                                <p className="footerInfo" style={{ maxWidth: "200px" }}>
                                    {/*
                                    */}
                                    Business address:<br/> 3420 N 40th street, Hollywood, FL 33021
                                    <br/>
                                    <br/>
                                    Showroom address:<br/> 1416-3 N Dixie hwy, Hollywood, FL 33020
                                </p>
                            </a>
                        </div>
                        <div className="footerPhone">
                            <h4 className="footerTitle">Phone Number</h4>
                            <p className="footerInfo" style={{ textAlign: "center" }}>
                            </p>
                    <a
                        href="tel:305-218-7474"
                        className="footer--addrs"
                        target='_blank'
                        rel="noreferrer">
                        <MdPhoneInTalk style={{margin:"0px 10px"}}/> 
                                305-218-7474
                    </a>
                        </div>

                        <div className="iconsFooterContact footerRight">
                            <h4 className="footerTitle">Contact</h4>

                            <div className="iconsFooter">
                                <a
                                    href="https://goo.gl/maps/TUv4QRR87e97LgjS7"
                                    className="footer--addrs"
                                    target='_blank'
                                    rel="noreferrer">
                                    <ImLocation2 />
                                </a>
                            <a
                                href="tel:305-287-7474"
                                className="footer--addrs"
                                target='_blank'
                                rel="noreferrer">
                                <MdPhoneInTalk />
                            </a>
                                <a
                                    href="https://wa.me/13052187474"
                                    className="footer--addrs"
                                    target='_blank'
                                    rel="noreferrer">
                                    <FaWhatsapp />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/leprestigellc"
                                    className="footer--addrs"
                                    target='_blank'
                                    rel="noreferrer">
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href="https://www.instagram.com/leprestigellc/"
                                    className="footer--addrs"
                                    target='_blank'
                                    rel="noreferrer">
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100070742473492"
                                    className="footer--addrs"
                                    target='_blank'
                                    rel="noreferrer">
                                    <FaFacebookF />
                                </a>
                            </div>
                        </div>



                    </div>
                </footer>
            </section>

        </>
    )
}
