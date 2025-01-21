import { NavLink } from "react-router-dom"
import PageNavigation from "./PageNavigation"
import styles from './Projects.module.css'
import { useState } from "react"

function Projects() {
    const [showMoreRestaurant, setShowMoreRestaurant]= useState(false);
    const [showMoreFootball, setShowMoreFootball] = useState(false);

    const toggleRestaurantDetails = () => setShowMoreRestaurant(prev => !prev);
    const toggleFootballDetails = ()=> setShowMoreFootball(prev => !prev);
    return (
        <>
         <PageNavigation />
         <hr/>
         
       <div className={styles.project}>
        <h1> Projects page</h1>
        <p>Follow the links in the description <br /> to access the live versions.</p>

        
        
        <div className={styles.item1}>
            <h3>Restaurant booking application.</h3>
            <p>This application was developed using Django,Python,Javascript,CSS,HTML.All these technologies combined give the application a modern look...</p>
           {showMoreRestaurant && (
            <p>The Django framework is a powerfull Python web framework that allows quick setup of an application. </p>
           ) }
           <button onClick={toggleRestaurantDetails}> 
            {showMoreRestaurant ? 'Read Less':'Read More'}
           </button>
            <img src="/restaurant_img.png" alt="an image of the restaurant layout" />
            <NavLink to='https://restaurant256-cba0e80966cc.herokuapp.com/' ><h3> Jo's Restaurant.</h3> </NavLink>
        </div>
        <div className={styles.item2}>
        <h3>Football Agency Website.</h3>
        <p>This is a static website built only with HTML and CSS, there is no interaction added to the page...</p>
        {showMoreFootball && (<p>For clients that only want physical presence on the internet, this is an ideal setup.</p>)}
        <button onClick={toggleFootballDetails} >
            {showMoreFootball ? 'Read Less': 'Read More'}
        </button>
            <img src="/top_talent.png" alt="an image of the restaurant layout" />
            <NavLink to='https://allano256.github.io/top-talent/' ><h3>Top Talent Agency.</h3> </NavLink>
        </div>
        
       </div>
        
        </>
       
    )
}

export default Projects

