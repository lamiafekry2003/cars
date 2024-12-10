import logo from '../../assets/footer/logo-footer.png'
import loc from '../../assets/footer/location.png'
import phone from '../../assets/footer/call.png'
import mail from '../../assets/footer/sms.png'
import facebook from '../../assets/footer/facebook.png'
import instgram from '../../assets/footer/instagram.png'
import youtop from '../../assets/footer/youtube.png'
export default function Footor() {
  return (
    <div className=" bg-slate-900 py-12 p-24 w-full ">
       <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-5 gap-8">
        <div className="one ">
            <ul>
               <img src={logo} alt="logo" className='my-6' />
                <li className=' flex  '>
                  <img src={loc} alt="loc" className=' max-w-xs'/>
                  <span className=' px-4 text-zinc-300'>25566 Hc 1, Glenallen,
                  Alaska, 99588, USA</span>
                </li>
                <li className=' flex my-4 '>
                  <img src={phone} alt="phone  max-w-sm" />
                  <span className=' px-4 text-zinc-300'>+603 4784 273 12</span>
                </li>
                <li className=' flex my-4 '>
                  <img src={mail} alt="mail  max-w-sm" />
                  <span className=' px-4 text-zinc-300'>rentcars@gmail.com</span>
                </li>
            </ul>
        </div>
        <div className="two">
            <ul>
               <p className='text-zinc-300 text-xl my-5'>Our Products</p>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Career</span>
                </li>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Car</span>
                </li>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Packages</span>
                </li>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Feature</span>
                </li>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Priceline</span>
                </li>
            </ul>
        </div>
        <div className="three ">
            <ul>
               <p className='text-zinc-300 text-xl my-5'>Resources</p>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Download</span>
                </li>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Help Centre</span>
                </li>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Guides</span>
                </li>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Partner Network</span>
                </li>
                <li className=' flex  '>
                  <span className=' px-4 text-zinc-300'>Cruises</span>
                </li>
                <li className=' flex  '>
                  <span className=' px-4 text-zinc-300'>Developer</span>
                </li>
            </ul>
        </div>
        <div className="three ">
            <ul>
               <p className='text-zinc-300 text-xl my-4'>About Rentcars</p>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Why choose us</span>
                </li>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Our Story</span>
                </li>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Investor Relations</span>
                </li>
                <li className=' flex  '>
                  
                  <span className=' px-4 text-zinc-300'>Press Center</span>
                </li>
                <li className=' flex  '>
                  <span className=' px-4 text-zinc-300'>Advertise</span>
                </li>
            </ul>
        </div>
        <div className="four ">
            <ul>
               <p className='text-zinc-300 text-xl  my-4'>Follow Us</p>
                <li className=' flex gap-4 '>
                    <img src={facebook} alt='facebook' />
                    <img src={instgram} alt='instragm' />
                    <img src={youtop} alt='youtop' />
                </li>
            </ul>
        </div>
       </div>
       <hr className='my-5 bg-zinc-300'/>
       <p className='text-zinc-300'>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
    </div>
  )
}
