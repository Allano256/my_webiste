import { NavLink } from "react-router-dom"
import PageNavigation from "./PageNavigation"
import styles from './Projects.module.css'

function Projects() {
    return (
        <>
         <PageNavigation />
       <div className={styles.project}>
        <h1> Projects page</h1>
        <p>Follow the links in the description <br /> to access the live versions.</p>
        <div className={styles.item1}>
            <h3>The restaurant booking application.</h3>
            <img src="/public/restaurant_img.png" alt="an image of the restaurant layout" />
            <NavLink to='https://allano256.github.io/restaurant_app/' ><h3>Live Version.</h3> </NavLink>
        </div>
        <div className={styles.item2}>
        <h3>A Football Agency Website.</h3>
            <img src="/public/top_talent.png" alt="an image of the restaurant layout" />
            <NavLink to=' https://allano256.github.io/top-talent/' ><h3>Live Version.</h3> </NavLink>
        </div>
        {/* <div className="item"></div>
        <div className="item2"></div> */}
       </div>
        
        </>
       
    )
}

export default Projects
