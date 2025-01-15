import PageNavigation from "./PageNavigation"
import styles from './Contact.module.css'
import Footer from "../Components/Footer"


function Contact() {
    return (
        <>
        <PageNavigation />
        <form  className={styles.form} >
            <label htmlFor="">First Name: </label>
            <input type="text" />
            <label htmlFor="">Last Name: </label>
            <input type="text" />
            <label htmlFor="">Email: </label>
            <input type="text" />
            <label htmlFor="">Phone: </label>
            <input type="text" />

            <label htmlFor="">Choose an option:</label>
         <select>
            <option value="">Hire services</option>
            <option value="">Collaboration</option>
            <option value="">General inquiries</option>
         </select>

         <label  htmlFor="">Leave a message: </label>
           <textarea name="" id="" placeholder="Leave a message..."> </textarea>
           <button>Submit</button>
            
            
        </form>

        <Footer />
        </>
        
    )
}

export default Contact
