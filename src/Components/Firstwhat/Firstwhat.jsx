import andriod from "../../assets/landing-page/sec-1/andriod.png";
import ios from "../../assets/landing-page/sec-1/ios.png";
import fram from "../../assets/landing-page/sec-1/Frame.png";
import car1 from "../../assets/landing-page/sec-1/car 2 1.png";
import { motion } from "framer-motion";
export default function Firstwhat() {
  return (
    <>
  <div
  className="w-full max-h-screen lg:max-h-[90vh] relative py-12  "
  style={{
    backgroundImage: `url(${fram})`,
    backgroundSize: 'contain',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="flex flex-col md:flex-row justify-between relative">
    {/* Left Section */}
    <motion.div 
     initial={{ opacity: 0, y: 100 }}  
     animate={{ opacity: 1, y: 0 }}   
     transition={{ duration: 1 }} 
    className="left order-2 md:order-1 pl-5 md:pl-28">
      <div className="data w-full md:max-w-sm flex flex-col justify-center items-start md:pt-40 text-neutral-800">
        <h1 className="text-3xl md:text-5xl text-left font-semibold">
          Find, book and rent a car <span className="text-sky-600">Easily</span>
        </h1>
        <p className="text-left py-7 text-lg">
          Get a car wherever and whenever you need it with your iOS and Android device.
        </p>
        <div className="store flex flex-col sm:flex-row gap-3">
          <img src={andriod} alt="Android" className="max-w-[120px]" />
          <img src={ios} alt="iOS" className="max-w-[120px]" />
        </div>
      </div>
    </motion.div>

    {/* Right Section */}
    <div className="order-1 pt-8 md:pt-32 lg:pt-12 md:order-2 flex  justify-end items-start">
    <motion.img
        src={car1}
        alt="Car 1"
        className="w-[70%] md:w-[50%] lg:w-full max-w-full object-contain"
        initial={{ scale: 0.2 }}  
        animate={{ scale: 1 }}    
        transition={{ duration: 1 }}  
      />
    </div>
  </div>
</div>

  </>
  );
}
