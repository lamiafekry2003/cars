
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import vector from "../../assets/landing-page/sec-5/Vector.png";
import car1 from "../../assets/landing-page/cars/car1.png";
import car2 from "../../assets/landing-page/cars/car2.png";
import car3 from "../../assets/landing-page/cars/car3.png";

export default function CardDetails() {
  const { id } = useParams(); // Extract the card ID from the URL
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        // Fetch all cars
        const response = await axios.get("https://myfakeapi.com/api/cars/");

        // Add images to cars
        const carsWithImages = response.data.cars.map((car, index) => ({
          ...car,
          image: index % 2 === 0 ? car1 : index % 2 === 1 ? car2 : car3, // Assign images based on index
        }));

        // Find the car with the matching ID from the URL
        const selectedCar = carsWithImages.find(
          (car) => car.id.toString() === id
        );

        // Set the car data in state
        setCar(selectedCar);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (!car) {
    return <div>Loading...</div>; 
  }

  return (
<div className="relative w-screen max-w-screen lg:-left-40  max-h-screen lg:h-[85vh] mx-0 px-0 overflow-hidden">
  
  <div className="grid grid-cols-1 md:grid-cols-2 w-full">
    <div className="left relative p-0 m-0 order-1 md:order-2 ">
      <img src={vector} alt="" className="w-full max-h-[100vh] lg:max-h-screen object-contain" />
      <div className="absolute top-0 lg:-left-32 w-full h-full flex justify-center items-center z-10">
        <img src={car.image} alt="Car 1" className="w-full object-contain" />
      </div>
    </div>
    <div className="  md:order-2">
      <div className="w-full md:max-w-2xl wr md:flex flex-col pt-28 mx-4 md:pt-40 text-neutral-800">
       {/* button of publor */}
       <button className=" bg-sky-600/10 py-3 px-8 rounded-lg mb-4 self-start">Why Choose Us</button>
       <h1 className="text-xl md:text-3xl text-left font-semibold">We offer the best experience with our rental deals</h1>
       <p className=" text-left my-3 lg:my-6">Price: <span className=" text-neutral-500">{car.price}</span></p>
       <p className="font-normal text-left py-2 text-gray-700 dark:text-gray-400">
          Model <span className=" text-neutral-500">{car.car_model}</span> 
          </p>
      </div>
    </div>

  </div>
</div>
  );
}
