import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { MenuActiveContext } from "../../context/MenuActiveContext"

export const ShowServicesSubMenu = () => {

    const {
        constructionMenu,
        openConstructionMenu,
        openMiniMenu,
        miniMenu,
        isMobileWidth
    } = useContext(MenuActiveContext)

    const subMenuConstArray = ["Commercial", "Residential"]
    const subMenuConst = subMenuConstArray.map((item, index) => {
        return (
            <button
                key={index + "subMenuConst"}
                onClick={isMobileWidth
                    ? () => openMiniMenu(!miniMenu)
                    : null}
                className="navlink--item--filter">
                <NavLink to={`/${item.toLowerCase()}`}>
                    {item}
                </NavLink>
            </button>
        )
    })

    const subMenuArray = ["Construction", "Millwork", "Furniture", "Accessories",]
    const subMenu = subMenuArray
		//.filter(subMenuArray => subMenuArray != "Accessories")
		.map((item, index) => {
        return (
            <button
                key={index + "subMenu"}
                onClick={isMobileWidth
                    ? () => openMiniMenu(!miniMenu)
                    : null}
                className="navlink--item--filter">
			{
				(item == "Accessories")
				?
                <NavLink to="/coming-soon">
				{item}
                </NavLink>
				:
                <NavLink to={item.toLowerCase()}>
                    {item}
                </NavLink>
			}
            </button>
        )
    })

    return (
        <>
            <div
                className={isMobileWidth
                    ? "navlink--item--filter--container--mobile"
                    : "navlink--item--filter--container"}>
                {/*
                    constructionMenu
                    ?
                    <div className={isMobileWidth
                        ? "navlink--item--filter--container--mobile"
                        : "navlink--item--filter--container"}>
                        <div className="subMenu--Const">
                            {subMenuConst}
                        </div>
                    </div>
                    : null
                */}

                {/*
                <button className="navlink--item--filter"
                    onClick={() => openConstructionMenu(!constructionMenu)}>
                    <Link className={constructionMenu ? "subActive" : ""}>
                        Construction
                    </Link>
                </button>
                */}
                <div className="subMenu">
                    {subMenu}
                </div>
            </div>
        </>
    )
}
