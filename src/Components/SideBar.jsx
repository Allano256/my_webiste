import styles from './SideBar.module.css'
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { FaRegMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function SideBar() {
    return(
   <div className={styles.SideBar}>
     <img src="/me.jpg" alt="an image of man standing" />
     <address className={styles.address} >
      <h3> <MdEmail />Email: allanzizinga@yahoo.com</h3>
      <h3> <HiDevicePhoneMobile /> Mobil: +18186921469</h3>
      <h3><FaRegMessage /> Watsapp: +46763196556</h3>
     </address>

   </div>
    )
    
}

export default SideBar
