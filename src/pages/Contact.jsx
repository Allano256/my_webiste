import PageNavigation from "./PageNavigation"
import styles from './Contact.module.css'
import Footer from "../Components/Footer"
import { useForm } from "react-hook-form"
// import { useState } from "react"



function Contact() {

    const {register,setError, handleSubmit, formState:{errors, isSubmitting}} = useForm()
    // const [successMessage, setSuccessMessage] = useState("");

    const onSubmit= async (data)=>{

      try {
        await new Promise((resolve)=> setTimeout(resolve,1500));
        //  setSuccessMessage("Form submitted successfully")
        throw new Error
      }  catch (error) {
        setError("Form submission failed",{message:"something went wrong"})
      }
          
        console.log(data)
    }

    return (
        <>
        <PageNavigation />
        <form  className={styles.form} onSubmit={handleSubmit(onSubmit)} >
             <label htmlFor="firstName">First Name:</label>
             <input {...register("firstName",{
                required:"Field is required",
               minLength:{
                value: 2,
                message: "First name must be atleast 2 characters long"
               },    
             })} type="text" />

             {errors.firstName && <div className="errors">{errors.firstName.message}</div>}
             
             <label htmlFor="lastName">Last Name: </label>
             <input {...register("lastName",{
                required:"Field is required",
               minLength:{
                value: 2,
                message: "Last name must be atleast 2 characters long"
               },    
             })} type="text" />
               {errors.lastName && <div className="errors">{errors.lastName.message}</div>}

               <label htmlFor="email">Email: </label>
               <input {...register("email",{
                required:"Field is required",
                pattern:{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:"Email must include '@",
                }
               })} type="text" />
               {errors.email && <div className="errors">{errors.email.message}</div>}

               <label htmlFor="message">Reason For Contact.</label>
               <select {...register("reasonForContact",)} name="" id="">
                <option value="hireServices">Hire Services.</option>
                <option value="collaborate">Collaborate.</option>
                <option value="others">Others.</option>
               </select>
              

               <label htmlFor="message">Leave Message</label>
               <textarea {...register("leaveMessage")} name="" id="" />

               {errors.leaveMessage && <div>{errors.leaveMessage.message}</div>}
             
             <button disabled={isSubmitting} type="submit">{isSubmitting ? "Loading...": "Submit"}</button>

             {/* {successMessage &&  <div className="success">{successMessage.message}</div>} */}
        </form>

        <Footer />
        </>
        
    )
}

export default Contact
