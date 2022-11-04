import { input } from "postcss";
import React, { useState } from "react"
import Footer from "../components/Footer"
import Submitted from "../Alert.js/Submitted"


function Contact() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleCheckboxChange = (e) => {
    console.log(e);
  }

  const name = 'Princess Ayomide Ogunnaike'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirst_name("");
    setLast_name("");
    setEmail("");
    setMessage("");
    setAlertOpen(true);
    
  };

    return (
        <>
        <div className='pl-8 overflow-hidden flex-wrap'>
            <h1 className='font-semibold text-4xl text-[#101828] leading-8 mb-5 pt-2'>Contact Me</h1>
            <div className='text-[#475467] text-lg lg:text-xl 2xl:text-xl xl:text-xl leading-7 mb-5 tracking-wide' > <p className='break-all'>Hi there, contact me to ask me anything you have in mind.</p> </div>
            <div className=''>

        <form onSubmit={handleSubmit}>

        <div className="lg:flex lg:gap-96">
        <div className='flex-col  mb-2 md:flex-col'>
        <label className='font-medium text-lg leading-5 text-[#344054]'>First name </label><br /> 
        <input
         type="text"
          name="firstname" 
           placeholder="Enter your first name" 
           value={ formValues.firstname} 
           onChange={handleChange}
           className='h-12 pl-5 md:w-10/12 w-5/6 lg:w-80 xl:w-96 2xl:w-96 bg-[#D0D5DD] focus:outline-[#84CAFF] rounded-md'/>
         
         </div>

         <div className='flex-col mb-5'>
         <label className='font-medium text-lg leading-5 text-[#344054]'>Last name </label><br />
        <input 
        type="text"
         name="lastname"
          placeholder="Enter your last name" 
          value={ formValues.lastname}
          onChange={handleChange} 
          className='h-12 pl-5 w-5/6 md:w-10/12 lg:w-96  bg-[#D0D5DD] focus:outline-[#84CAFF] rounded-md'/>
        </div> 
        </div>
        <div className="space-y-2">
            <label className='font-medium text-lg leading-5 text-[#344054]'>Email</label> <br />
            <input type="email"
             name="email"  
            placeholder="yourname@email.com"
             value={ formValues.email} 
             onChange={handleChange}
             className='pt-2 h-12 pl-5 w-5/6 md:w-10/12 lg:w-11/12 2xl:w-11/12 xl:w-11/12 rounded-md bg-[#D0D5DD] focus:outline-[#84CAFF]' />
        </div>

        <div className="space-y-2 mt-5">
            <label className="font-medium text-lg leading-5 mt-5 text-[#344054]">Message</label>
            <textarea placeholder="Send me a message i will reply as soon as possible" className="pt-2 py-36 pl-5 lg:w-11/12 md:w-10/12 w-5/6 block rounded-md bg-[#D0D5DD] focus:outline-[#84CAFF]"></textarea>
        </div>

        <div className="space-x-5 mt-5">
            <input type="checkbox" className='w-4 h-4 rounded-lg ring-2 focus:shadow-current-[#84CAFF] checked:bg-[#fff] focus:bg-[#D1E9FF] outline-[#D1E9FF]' />
            <label className='text-[#475467] text-base lg:text-lg break-all md:break-all lg:break-keep tracking-wide leading-6 font-normal'>You agree to providing your data to Princess, who may contact you</label>
        </div>

            </form> 

</div >

        <div className={'${alertOpen ? "" : "hide-alert"}'}>
            <Submitted close={() => setAlertOpen(false)} />
        </div>

    <div className=" mt-5 ">
        <button type="submit"  className="lg:w-11/12 2xl:w-11/12 xl:w-11/12 w-5/6 md:10/12 h-16 text-md font-semibold leading-6 focus:bg-[#1570EF] hover:bg-[#175CD3] tracking-wide rounded-md disabled:bg-[#B2DDFF] bg-[#1570EF] text-white ">Send message</button>
        </div>
        </div>

    <Footer /> 
    
        </>
    )


}

export default Contact