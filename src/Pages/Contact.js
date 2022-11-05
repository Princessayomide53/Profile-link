import React, { useState, useEffect } from "react"
import Footer from "../components/Footer"

function Contact() {

    function refreshPage(){
        window.location.reloadPage()
    }

    setTimeout(refreshPage, 5000)

    const initialValues = { first_name: "", last_name: "", email: "", message: ""};

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
        
    }
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(false);
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            
        }
    },[formErrors])

 

    const validate = (values) => {
        const errors = {}
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.first_name) {
            errors.first_name = "Please enter first name!";
        }
        if (!values.last_name) {
            errors.last_name = "Please enter last name!";
        }
        if (!values.email) {
            errors.email= "Please enter email!";
        }
        if (!values.message) {
            errors.message = "Please enter message!";
        }

        return errors;
    };



    return (
        <>
        <div className='p-5 overflow-hidden flex-wrap'>
    
            <h1 className='font-semibold text-4xl text-[#101828] leading-8 mb-5 pt-0 -mt-2'>Contact Me</h1>
            <div className='text-[#475467] text-lg lg:text-xl 2xl:text-xl xl:text-xl leading-7 mb-2   tracking-normal md:tracking-normal lg:tracking-wide' > <p className='break-normal flex-wrap'>Hi there, contact me to ask me anything you have in mind.</p> </div> 
         <form onSubmit={handleSubmit}>
        
         <div className=''>
            <div className="lg:flex  xl:flex 2xl:flex lg:gap-1 lg:space-x-52 xl:gap-x-16 xl:space-x-96 2xl:space-x-96 2xl:gap-80">
            <div className='flex-col mb-2 md:flex-col'>
            <label className='font-medium text-lg leading-5 text-[#344054]'>First name </label><br /> 
            <input 
             type="text"
             id="first_name"
             name="first_name"
             value={formValues.first_name}
             onChange={handleChange}
               placeholder="Enter your first name" 
               className='h-12 pl-5 md:w-full w-full lg:w-96 xl:w-96 2xl:w-96 bg-[#D0D5DD] focus:invalid:outline-[#F89687] focus:outline-[#84CAFF] rounded-md shadow-md shadow-[#84CAFF] '/>
         <p className="text-xl pt-2 flex-start text-[#F89687]">{formErrors.first_name}</p>
             </div>
    
             <div className='flex-col mb-5'>
         <label className='font-medium text-lg leading-5 lg::space-x-10 text-[#344054]'>Last name </label><br />
        <input 
        type="text"
        id="last_name"
        name="last_name"
         value={formValues.last_name}
         onChange={handleChange}
          placeholder="Enter your last name" 
          className='h-12 pl-5 w-full md:w-full lg:w-96 xl:w-96 2xl:w-96 bg-[#D0D5DD] focus:invalid:outline-[#F89687] rounded-md focus:outline-[#84CAFF] shadow-md shadow-[#84CAFF] '/>
                <p className="text-xl pt-2 text-[#ec715e]">{formErrors.last_name}</p>
            </div> 
            </div>
            
            <div className="space-y-2">
                <label className='font-medium text-lg leading-5 text-[#344054]'>Email</label> <br />
                <input
                 type="email"
                 id="email"
                 name="email"
                 value={formValues.email}
                 onChange={handleChange}
                
                 
                placeholder="yourname@email.com"
                 className='pt-2 h-12 pl-5 w-full md:w-full lg:w-full 2xl:w-full xl:w-full rounded-md bg-[#D0D5DD] focus:invalid:outline-[#F89687] focus:outline-[#84CAFF] shadow-md shadow-[#84CAFF]' />
    
                 
    
            </div>
            <p className="text-xl pt-2 text-[#ec715e]">{formErrors.email}</p>
    
            <div className="space-y-2 mt-5">
                <label className="font-medium text-lg leading-5 mt-5 text-[#344054]">Message</label>
                <textarea 
                id="message"
                name="message"
                type="text-area"
             value={formValues.message}
             onChange={handleChange}
                placeholder="Send me a message i will reply as soon as possible"
                 className="pt-2 py-36 pl-5 lg:w-full md:w-full w-full block rounded-md focus:outline-[#84CAFF] bg-[#D0D5DD] shadow-md checked:bg-[#84CAFF] shadow-[#84CAFF] "></textarea>
    
            </div>
            <p className="text-xl text-[#ec715e]">{formErrors.message}</p>
            <div className="space-x-5 mt-5">
                <input
                id="checkbox"
                name="checkbox"
                 type="checkbox"
                  className='w-4 h-4 rounded-lg ring-2 focus:shadow-current-[#84CAFF] checked:bg-[#fff] focus:bg-[#D1E9FF] error:border-red outline-[#D1E9FF]' />
    
                <label 
                className='text-[#475467] text-base lg:text-lg break-normal md:break-normal lg:break-keep xl:break-keep 2xl:break-normal tracking-normal md:tracking-normal lg:tracking-wide leading-6 font-normal flex-wrap'>
                    You agree to providing your data to Princess Ayomide Ogunnaike, who may contact you
                </label>
            </div> 
    
    
            <div className="mt-5 ">
            <button 
            type="submit" 
            id="btn__submit"
            onClick={(e) => window.location.reload(false)}
             className="lg:w-full 2xl:w-full xl:w-full w-full md:w-full h-16 text-md font-semibold leading-6 focus:bg-[#1570EF] hover:bg-[#175CD3] tracking-wide invalid: rounded-md checked:bg-[#B2DDFF] bg-[#1570EF] text-white mb-10">
                Send message
                </button>
            </div>
        
            </div>
        

        
         </form>

        </div>

    <Footer /> 
    
        </>
    )


}

export default Contact