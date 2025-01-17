import { NavLink } from "react-router-dom"
import styles from './PageNavigation.module.css'

import { GrContact } from "react-icons/gr";
import { IoBuildOutline } from "react-icons/io5";

function PageNavigation() {
    return (
        <nav className={styles.navigation}>
            <NavLink className={styles.home} to="/" > <h3>   Home</h3></NavLink>
            <NavLink className={styles.home} to="/projects" ><h3><IoBuildOutline /> Projects</h3> </NavLink>
            <NavLink className={styles.home} to="/contact" ><h3> <GrContact /> Contact</h3></NavLink>

        </nav>
    )
}

export default PageNavigation
