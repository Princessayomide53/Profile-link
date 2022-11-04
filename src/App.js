import React from 'react'
import ReactDOM from "react-dom/client";
import Main from './components/Main'
import my_picture from './img/my_picture.jpg'
import slack1 from './img/Social Sectionslack.png'
import btn1 from './img/_Avatar share button (1).png'
import btn2 from './img/_Avatar share button.png'
import { createBrowserRouter,
  RouterProvider,
  Route} from 'react-router-dom'
import Contact from './Pages/Contact'
import Footer from './components/Footer';

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


<Footer />
    </>



  );
}

export default App;
