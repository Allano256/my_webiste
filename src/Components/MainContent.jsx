import { FaCode } from "react-icons/fa6";
import { SiSpeedtest } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import { FcSupport } from "react-icons/fc";
import { MdOutlineCreate } from "react-icons/md";
import { PiTreeStructureLight } from "react-icons/pi";
import styles from './MainContent.module.css';

import { NavLink } from "react-router-dom";

function MainContent() {
    return (
        <div className={styles.roles}>
             <section>
             <h2>Welcome to  AllanoTech...</h2>
            <p  >My name is Allan Zizinga and i am a Full Stack software developer, a graduate from Code Institute situated in Dublin Ireland.</p>

            <p>As a Full Stack developer, i am actively involved in the product full lifecycle <br/> that is,
                <hr />
                <ul>
                    <li><h3> <PiTreeStructureLight /> Planning and Requirement Analysis</h3> 
                    <p>Define the applications purpose, goals and requirements.</p>
                    </li>
                    <li><h3> <MdOutlineCreate /> Design</h3>
                    <p>Create the architectute and design,design the user interface,database, wireframes and system components</p></li>
                    <li><h3><FaCode />  Development</h3>
                    <p>Build the application inline with the design specifications,write and test code,integrate both the frontend  and backend systems.</p></li>
                    <li><h3> <SiSpeedtest />  Testing</h3>
                    <p>Ensure that the application is free from bugs, meets requirements and is ready for deployment.</p></li>
                    <li><h3><GrDeploy />  Deployment</h3>
                    <p>Release the application to the users, deploying it to production servers, configure enviroment and document release. In doing so the application is live and accessible to users.</p></li>
                    <li><h3><FcSupport /> Maintenance and Support</h3>
                    <p>Keep the application running smoothly and update it with time to make it better and also fix bugs,monitor performance.</p></li>
                 <hr />
                    <NavLink className={styles.bottom} to="/contact"> Click to contact me...</NavLink>
                    
                </ul>
            </p>
            
             </section>
            
        </div>
    )
}

export default MainContent
