import zuri from '../img/Zuri.Logo.png'
import ingress from '../img/ingressive.png'
function Footer () {
    return (
        <>

<div className='flex justify-center'>
      <hr style={{
        borderColor:'whitesmoke',
        height: '3px',
        width: '85%',

      }} />
    </div>

   <div className='lg:flex lg:justify-around pl-10 mt-5 mb-5 lg:pt-0'>  

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
    )
}


export default Footer;