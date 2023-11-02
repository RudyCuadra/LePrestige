import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import { MenuActiveContext } from "../../context/MenuActiveContext"
import PropTypes from "prop-types"
import { ShowServicesSubMenu } from "./ShowServicesSubMenu"

export const NavServices = ({ navlinksMainMenu, handleHomeLink }) => {
    const { servicesSubMenu,
        openServicesMenu, 
        constructionMenu, 
        isMobileWidth, 
        miniMenu,
    openMiniMenu } = useContext(MenuActiveContext)
    return (
        <>
            {navlinksMainMenu.map((item) => (
                <div key={item}>
                    {item === "Services"
                        ?
                        <>
                            {servicesSubMenu
                                ? <ShowServicesSubMenu />
                                : null
                            }
                            <li className="navlink--item"
                                onClick={() => openServicesMenu(!servicesSubMenu)}>
                                <Link className={!constructionMenu && servicesSubMenu ? "subActive" : servicesSubMenu ? "" : ""}>
                                    Services
                                </Link>
                            </li>
                        </>
                        :
                        <li className="navlink--item"
                            onClick={ handleHomeLink}>
                            <NavLink to={`${item.toLocaleLowerCase()}`} >
                                {item}
                            </NavLink>
                        </li>
                    }
                </div>
            ))}
        </>
    )
}

// PropTypes
NavServices.propTypes = {
    navlinksMainMenu: PropTypes.array,
}
