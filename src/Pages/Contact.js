import { input } from "postcss";
import React, { useState } from "react";


function Contact() {
    const [setText] = useState('Message sent')

    const popUp = (event) => {
        setText('Message delivered')
    }

    return (
        <>
        <div className='pl-5'>
            <h1 className='font-semibold text-4xl text-[#101828] leading-8 mb-5 pt-2'>Contact Me</h1>
            <div className='text-[#475467] text-xl leading-7 mb-5 tracking-wide'> <p>Hi there, contact me to ask me anything you have in mind.</p> </div>
            <div className=''>
        <form>
        <div className='sm:flex-col lg:justify-between mb-2 md:flex-col lg:flex'>
        <label className='font-medium text-lg leading-5  text-[#344054]'>Firstname </label> 
         <label className='font-medium text-lg leading-5 text-[#344054]'>Lastname </label><br />
         </div>

         <div className='flex space-x-48 mb-5'>
         <input type="text" placeholder="Enter your first name" className='py-2 pl-5 pr-56 bg-[#D0D5DD] focus:outline-[#84CAFF] rounded-md'/>
        <input type="text" placeholder="Enter your last name" className='py-2 pl-5 pr-56 bg-[#D0D5DD] focus:outline-[#84CAFF] rounded-md'/>
        </div> 
        <div className="space-y-2">
            <label className='font-medium text-lg leading-5 text-[#344054]'>Email</label> <br />
            <input type="email" placeholder="yourname@email.com" className='pt-2 py-2 pl-5 w-10/12 rounded-md bg-[#D0D5DD] focus:outline-[#84CAFF]' />
        </div>

        <div className="space-y-2 mt-5">
            <label className="font-medium text-lg leading-5 mt-5 text-[#344054]">Message</label>
            <textarea placeholder="Send me a message i will reply as soon as possible" className="pt-2 py-36 pl-5 w-10/12 block rounded-md bg-[#D0D5DD] focus:outline-[#84CAFF]"></textarea>
        </div>

        <div className="space-x-5 mt-6">
            <input type="checkbox" className='w-4 h-4 rounded-lg  ring-2 focus:shadow-current-[#84CAFF] checked:bg-[#fff] focus:bg-[#D1E9FF] outline-[#D1E9FF]' />
            <label className='text-[#475467] text-md tracking-wide leading-6 font-normal'>You agree to providing your data to Princess who may contact you</label>
        </div>

            </form> 



</div >
        </div>

        <div className="ml-5 mt-5 ">
        <button onClick={popUp}  className="w-10/12 h-16 text-md font-semibold leading-6 focus:bg-[#1570EF] hover:bg-[#175CD3] tracking-wide rounded-md disabled:bg-[#B2DDFF] bg-[#1570EF] text-white ">Send message</button>
        </div>
    
        </>
    )


}

export default Contact