import { useLocation } from "react-router-dom"
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp
} from "react-icons/fa"
import { ImLocation2 } from "react-icons/im"
import {MdPhoneInTalk} from "react-icons/md"
import "../styles/footerNew.css"

export const FooterNew = () => {
    const { pathname } = useLocation()
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer className="footerNew">
            {
                pathname === "/contact"
                    ?
                    null
                    :
                    <>
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
                        <div className="footerText">
                            <p><span className="footerBold">© {year} Le Prestige LLC</span>
                                - All Rights Reserved</p>
                        </div>
                    </>
            }
        </footer>
    )
}
