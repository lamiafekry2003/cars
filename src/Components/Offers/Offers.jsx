import car from '../../assets/landing-page/sec-5/Audi 1.png'
import vector from '../../assets/landing-page/sec-5/Vector.png'
import user from '../../assets/landing-page/sec-5/user.png'
import calen from '../../assets/landing-page/sec-5/message.png'
import mess from '../../assets/landing-page/sec-5/chat.png'
export default function Offers() {
    const ways=[
        {src : user , alt:'user',head:'Best price guaranteed',text:'Find a lower price? We’ll refund you 100% of the difference.'},
        {src : user , alt:'user',head:'24 hour car delivery',text:'Book your car anytime and we will deliver it directly to you.'},
        {src : calen , alt:'calen',head:'Best price guaranteed',text:'Find a lower price? We’ll refund you 100% of the difference.'},
        {src : mess , alt:'mess',head:'24/7 technical support',text:'Have a question? Contact Rentcars support any time when you have problem.'},
    ]
  return (
    <div className="relative w-screen max-w-screen   max-h-screen lg:h-[85vh] mx-0 px-0 overflow-hidden ">
  
  <div className="grid grid-cols-1 md:grid-cols-2 w-full">
    <div className="left relative p-0 m-0 -top-14 order-1 md:order-2 ">
      <img src={vector} alt="" className="w-full  max-h-[100vh] lg:max-h-screen object-contain" />
      <div className="absolute top-20 -left-20 w-full h-full flex justify-center items-center z-10">
        <img src={car} alt="Car" className="w-full object-contain" />
      </div>
    </div>
    <div className="  mx-4 md:order-2">
      <div className="w-full md:max-w-2xl wr md:flex flex-col  md:pt-12 text-neutral-800">
       {/* button of publor */}
       <button className=" bg-sky-600/10 text-blue-500 py-2 px-8 rounded-lg mb-4 self-start">WHY CHOOSE US</button>
       <h1 className="text-xl md:text-3xl text-left font-semibold">We offer the best experience with our rental deals       </h1>
       <div className="grid grid-cols-1">
         {ways.map((way)=>(
            <div key={way.alt} className=' flex  text-left my-4'>
                <img src={way.src} alt={way.alt} />
                <div className="text mx-8 flex-wrap">
                    <h5 className=' font-semibold text-lg'>{way.head}</h5>
                    <p className='text-neutral-500'>{way.text}</p>
                </div>
            </div>
         ))}
       </div>
      </div>
    </div>

  </div>
</div>

  )
}
