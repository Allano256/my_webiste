import SideBar from "../Components/SideBar"
import MainContent from "../Components/MainContent"
import Footer from "../Components/Footer"
import PageNavigation from "./PageNavigation"


function Applayout() {
    return (
        <>
         <PageNavigation />
        <div>
        <SideBar />
        <MainContent />
       
           
        <Footer />
        </div></>
       
    )
}

export default Applayout
