import SideBar from "../Components/SideBar"
import MainContent from "../Components/MainContent"
import Footer from "../Components/Footer"
import PageNavigation from "./PageNavigation"
import styles from './Applayout.module.css'


function Applayout() {
    return (
        <>
         <PageNavigation />
        <div className={styles.layout} >
           <div> 
             <div><SideBar />
             </div>
           
        
           <div> 
            <MainContent />
            </div>
            </div>
           
 
          <div>  <Footer /></div>
        </div>


            
        
        </>
       
    )
}

export default Applayout
