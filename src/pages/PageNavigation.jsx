import { NavLink } from "react-router-dom"
import styles from './PageNavigation.module.css'

import { GrContact } from "react-icons/gr";

function PageNavigation() {
    return (
        <nav className={styles.navigation}>
            <NavLink style={{textDecoration:"none"}} to="/" > <h3>   Home</h3></NavLink>
            <NavLink style={{textDecoration:"none"}} to="contact" ><h3> <GrContact /> Contact</h3></NavLink>

        </nav>
    )
}

export default PageNavigation
