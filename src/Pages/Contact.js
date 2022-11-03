import { Input } from "postcss";
import React from "react";


function Contact() {
    return (

        <div>
            <h1 className='font-semibold text-4xl text-[#101828] leading-8'>Contact Me</h1>
            <div className='text-[#475467] text-xl leading-7'> <p>Hi there, contact me to ask me anything you have in mind.</p> </div>
            <div>
                <form>
                    <input type="text"> </input>
                </form>
            </div>

        </div>
    )


}

export default Contact