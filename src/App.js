import React from 'react'
import Main from './components/Main'
import my_picture from './img/my_picture.jpg'
import slack1 from './img/Social Sectionslack.png'
import btn1 from './img/_Avatar share button (1).png'
import btn2 from './img/_Avatar share button.png'
import zuri from './img/Zuri.Logo.png'
import ingress from './img/ingressive.png'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  
  return (
    <>




  <div className='flex justify-end mt-5'>
      <img src={btn1} alt="arrow" className='hidden md:hidden lg:block xl:block 2xl:block mr-44 '/>
          </div>

    <div className='flex justify-end mt-3'>
    <img src={btn2} alt="arrow2" className='block md:block lg:hidden xl:hidden '/>
    </div>

  <div className='flex justify-center'>
      <img src={my_picture} alt="my profile pic" id='profile__img' className='object-center w-28 h-32 rounded-full' />
          </div>

    <Main />
    

    <div className='flex justify-center mt-5'>  
      <img src={slack1} alt="slack pic"/>
          </div>


    <div className='flex justify-center'>
      <hr style={{
        borderColor:'whitesmoke',
        height: '3px',
        width: '85%',

      }} />
    </div>

<div className='lg:flex lg:justify-around p-5 mt-10 mb-5 lg:pt-0'>  

    <div>
    <img src={zuri} alt="logo"/>
    </div>

    <div className='font-normal pt-2 text-base text-[#667085] leading-6'>
      <p>HNG9 Intership 9 Frontend Task </p>
    </div>

    <div className='flex pt-2'>
    <img src={ingress} alt="logo2"/>
    </div>
    </div>

    </>



  );
}

export default App;
