import { input } from "postcss";
import React from "react";


function Contact() {
    return (
        <>
        <div className='pl-5'>
            <h1 className='font-semibold text-4xl text-[#101828] leading-8 mb-5 pt-2'>Contact Me</h1>
            <div className='text-[#475467] text-xl leading-7 mb-5 tracking-wide'> <p>Hi there, contact me to ask me anything you have in mind.</p> </div>
            <div className=''>
        <form>
        <div className='flex justify-between mb-2'>
        <label className='font-medium text-lg leading-5  text-[#344054]'>Firstname </label> 
         <label className='font-medium text-lg leading-5 text-[#344054]'>Lastname </label><br />
         </div>

         <div className='flex space-x-52 mb-5'>
         <input type="text" placeholder="Enter your first name" className='py-2 outline-slate-500 pl-5 pr-52 bg-[#D0D5DD] rounded-md'/>
        <input type="text" placeholder="Enter your last name" className='py-2 pl-5 pr-52 outline-slate-500 bg-[#D0D5DD] rounded-md'/>
        </div> 
        <div className="space-y-2">
            <label className='font-medium text-lg leading-5 text-[#344054]'>Email</label> <br />
            <input type="password" placeholder="yourname@email.com" className='pt-2 py-2 pl-5 w-10/12 rounded-md bg-[#D0D5DD] outline-slate-500' />
        </div>

        <div className="space-y-2 mt-5">
            <label className="font-medium text-lg leading-5 mt-5 text-[#344054]">Message</label>
            <textarea placeholder="Send me a message i will reply as soon as possible" className="pt-2 py-36 pl-5 w-10/12 block rounded-md bg-[#D0D5DD] outline-slate-500"></textarea>
        </div>

            </form>
            </div>

        </div>
    
        </>
    )


}

export default Contact