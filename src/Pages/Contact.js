import { input } from "postcss";
import React from "react";


function Contact() {
    return (
        <>
        <div className='p-5'>
            <h1 className='font-semibold text-4xl text-[#101828] leading-8 mb-5 p-0'>Contact Me</h1>
            <div className='text-[#475467] text-xl leading-7 mb-5 tracking-wide'> <p>Hi there, contact me to ask me anything you have in mind.</p> </div>
            <div className=''>
        <form>
        <div className='flex justify-between mb-2'>
        <label className='font-medium text-lg leading-5  text-[#344054]'>Firstname </label> 
         <label className='font-medium text-lg leading-5 text-[#344054]'>Lastname </label><br />
         </div>

         {/* <div className='flex space-x-52 mb-5'>
         <input type="text" placeholder="Enter your first name" className='py-2 pl-5 pr-52 bg-[#D0D5DD] rounded-md'/>
        <input type="text" placeholder="Enter your last name" className='py-2 pl-5 pr-52 bg-[#D0D5DD] rounded-md'/>
        </div> 
        <div className="mb-5">
            <label className='font-medium text-lg leading-5 mb-5 text-[#344054]'>Email</label> <br />
            <input type="password" placeholder="yourname@email.com" className='py-2 pl-5 w-10/12 rounded-md bg-[#D0D5DD]' />
        </div> */}
            </form>
            </div>

        </div>
    
        </>
    )


}

export default Contact