import { ChangeMenuActiveContext } from "../../context/MenuActiveContext"
import { NavLinks } from "./NavLinks"
import { motion } from "framer-motion"
import "../../styles/navbar.css"

export const Navbar = () => {
    return (
        <motion.nav className="navbar--container"
            initial={{
                opacity: 0
            }}
            transition={{
                duration: 6
            }}
            animate={{
                opacity: 1
            }}
        >
            <ChangeMenuActiveContext>
                <NavLinks />
            </ChangeMenuActiveContext>
        </motion.nav>
    )
}
