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
            <p>This application was developed using Django,Python,Javascript,CSS,HTML.All these technologies combined give the application a modern look.</p>
            <p>The Django framework is a powerfull Python web framework that allows quick setup of an application. </p>
            <img src="/public/restaurant_img.png" alt="an image of the restaurant layout" />
            <NavLink to='https://allano256.github.io/restaurant_app/' ><h3>Live Version.</h3> </NavLink>
        </div>
        <div className={styles.item2}>
        <h3>A Football Agency Website.</h3>
        <p>This is a static website built only with HTML and CSS, there is no interaction added to the page.</p>
        <p>For clients that only want physical presence on the internet, this is an ideal setup.</p>
            <img src="/public/top_talent.png" alt="an image of the restaurant layout" />
            <NavLink to=' https://allano256.github.io/top-talent/' ><h3>Live Version.</h3> </NavLink>
        </div>
        
       </div>
        
        </>
       
    )
}

export default Projects
