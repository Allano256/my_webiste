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
           
             <div className= {styles.sidebar}><SideBar /> </div>
            
           
        
           
             <div  className={styles.main} > <MainContent /></div>
            
          
           
 
          <div className={styles.footer} >  <Footer /></div>
        </div>


            
        
        </>
       
    )
}

export default Applayout
