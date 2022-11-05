
import React from "react"
import Footer from "../components/Footer"
import { useForm } from "react-hook-form";



function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
  };


    return (
        <>
        <div className='pl-8 overflow-hidden flex-wrap'>
            <h1 className='font-semibold text-4xl text-[#101828] leading-8 mb-5 pt-2'>Contact Me</h1>
            <div className='text-[#475467] text-lg lg:text-xl 2xl:text-xl xl:text-xl leading-7 mb-5 tracking-wide' > <p className='break-all'>Hi there, contact me to ask me anything you have in mind.</p> </div>
         <div className=''>

        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="lg:flex lg:gap-96">
        <div className='flex-col  mb-2 md:flex-col'>
        <label className='font-medium text-lg leading-5 text-[#344054]'>First name </label><br /> 
        <input
         type="text"
         id="first_name"
         name="first_name" 
         {...register("first_name",{
          required:true
         })}
          
           placeholder="Enter your first name" 
           className='h-12 pl-5 md:w-10/12 w-5/6 lg:w-80 xl:w-96 2xl:w-96 bg-[#D0D5DD] focus:outline-[#84CAFF] rounded-md'/>

          {errors.first_name && errors.email.type === "required" && (<p className="text-[#F83F23] text-sm">Please enter your first name</p>
             )}
         </div>

         <div className='flex-col mb-5'>
         <label className='font-medium text-lg leading-5 text-[#344054]'>Last name </label><br />
        <input 
        type="text"
        id="last_name"
        {...register("last_name", {
          required:true
        })}
         
          placeholder="Enter your last name" 
          className='h-12 pl-5 w-5/6 md:w-10/12 lg:w-96  bg-[#D0D5DD] focus:outline-[#84CAFF] rounded-md'/>

          {errors.last_name && errors.email.type === "required" && (<p className="text-[#F83F23] text-sm">Please enter your last name</p>
             )}
        </div> 
        </div>

        <div className="space-y-2">
            <label className='font-medium text-lg leading-5 text-[#344054]'>Email</label> <br />
            <input
             type="email"
             id="email"
             name="email"
             {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
             })}
             
            placeholder="yourname@email.com"
             className='pt-2 h-12 pl-5 w-5/6 md:w-10/12 lg:w-11/12 2xl:w-11/12 xl:w-11/12 rounded-md bg-[#D0D5DD] focus:outline-[#84CAFF]' />

             {errors.email && errors.email.type === "required" && (<p className="text-[#F83F23] text-sm">Please enter your email</p>
             )}

        </div>

        <div className="space-y-2 mt-5">
            <label className="font-medium text-lg leading-5 mt-5 text-[#344054]">Message</label>
            <textarea 
            id="message"
            name="message"
            {...register("textarea", {
              required:true
            })}
            placeholder="Send me a message i will reply as soon as possible"
             className="pt-2 py-36 pl-5 lg:w-11/12 md:w-10/12 w-5/6 block rounded-md bg-[#D0D5DD] hover:outline-[#84CAFF] focus:invalid:outline-[#F89687] "></textarea>

         {errors.textarea && errors.email.type === "required" && (<p className="text-[#F83F23] text-sm">Please enter your message</p>
             )}

        </div>

        <div className="space-x-5 mt-5">
            <input
            id="subscribe"
            name="subscribe"
             type="checkbox"
              className='w-4 h-4 rounded-lg ring-2 focus:shadow-current-[#84CAFF] checked:bg-[#fff] focus:bg-[#D1E9FF] outline-[#D1E9FF]' />

            <label 
            className='text-[#475467] text-base lg:text-lg break-all md:break-all lg:break-keep tracking-wide leading-6 font-normal'>
                You agree to providing your data to Princess Ayomide Ogunnaike, who may contact you
                </label>
        </div>
 

    <div className=" mt-5 ">
        <button 
        type="submit" 
        id="btn__submit"
         className="lg:w-11/12 2xl:w-11/12 xl:w-11/12 w-5/6 md:10/12 h-16 text-md font-semibold leading-6 focus:bg-[#1570EF] hover:bg-[#175CD3] tracking-wide invalid: rounded-md checked:bg-[#B2DDFF] bg-[#1570EF] text-white mb-10">
            Send message
            </button>
        </div>
        </form>
        </div>
        </div>

    <Footer /> 
    
        </>
    )


}

export default Contact