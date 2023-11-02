import { useContext } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { FooterNew } from "../FooterNew"
import LePrestigeNewLogo from "../../assets/LePrestigeNewLogo"
import { MenuActiveContext } from "../../context/MenuActiveContext"
import { NavServices } from "./NavServices"
import {MdPhoneInTalk} from "react-icons/md"
import logo from "../../assets/images/logos/lepresigeNuevoLogo.png"

export const NavLinks = () => {
    const { pathname } = useLocation()
    const { openMiniMenu,
        miniMenu,
        openConstructionMenu,
        constructionMenu,
        openServicesMenu, 
        servicesSubMenu} = useContext(MenuActiveContext)

    // Array del Menu Principal
    const navlinksMainMenu = ["Services", "About", "Contact"]

    const ancho = window.innerWidth
    const mobile = 700
    //console.log(ancho)

    const handleHomeLink = () =>{
        openMiniMenu(false)
        openConstructionMenu(false)
        openServicesMenu(false)
    }

    return (
        <>
            <div className="navlink--container">
                <div className="navbar-left--container">
                    <div className="logo--container">
                        <Link to="/" onClick={handleHomeLink}>
                            {/*
                            * SVG LOGO
                            <LePrestigeNewLogo />
                            */}
                            <img className="lePrestigeLogo" src={logo} alt="Le Prestige"/>
                        </Link>
                    </div>
                    <a
                        href="tel:305-287-7474"
                        className="footer--addrs"
                        target='_blank'
                        rel="noreferrer">
                        <MdPhoneInTalk style={{margin:"0px 10px"}}/> 
                        305-287-7474
                    </a>
                </div>

                {/* Si el ancho es menor a 700 muestra el menu mobile si no el desktop*/
                    ancho <= mobile
                        ?
                        /* Menu Mobile */
                        <ul className={miniMenu ? "navlinks" : "navbarListNone"}>
                            <li className="navlink--item" onClick={handleHomeLink}>
                                <NavLink to="/">Home</NavLink>
                            </li>

                            <NavServices handleHomeLink={handleHomeLink} navlinksMainMenu={navlinksMainMenu} />

                        </ul>
                        :
                        /* Menu Desktop */
                        <ul className="navlinks">
                            <li className="navlink--item" onClick={handleHomeLink}>
                                <NavLink to="/">Home</NavLink>
                            </li>

                            <NavServices handleHomeLink={handleHomeLink} navlinksMainMenu={navlinksMainMenu} />

                        </ul>
                }

                <button
                    onClick={() => openMiniMenu(!miniMenu)}
                    className={miniMenu ? 'miniMenuEquis' : 'miniMenu'}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
            <Outlet />
            {
                pathname === "/contact"
                    ? null
                    : <FooterNew />
            }{
                /*
                (pathname === "/" && servicesSubMenu === true)
                    ? openServicesMenu(!servicesSubMenu) &&  openConstructionMenu(!constructionMenu)
                    : null
                */
            }
        </>
    )
}
