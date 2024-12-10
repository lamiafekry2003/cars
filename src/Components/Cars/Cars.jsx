
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import car1 from "../../assets/landing-page/cars/car1.png";
import car2 from "../../assets/landing-page/cars/car2.png";
import car3 from "../../assets/landing-page/cars/car3.png";
import { Link } from "react-router-dom";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 16;

  const getAllData = async () => {
    try {
      let response = await axios.get('https://myfakeapi.com/api/cars/');
      const carsWithImages = response.data.cars.map((car, index) => ({
        ...car,
        image: index % 2 === 0 ? car1 : index % 2 === 1 ? car2 : car3, 
      }));
      setCars(carsWithImages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  // Calculate paginated cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Handle Pagination
  const totalPages = Math.ceil(cars.length / carsPerPage);
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="my-5 px-7 md:px-28 container mx-auto  text-center">
       <h1 className="pt-28 text-left text-neutral-400 text-2xl">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link> / Cars
      </h1>
        {/* button of publor */}
        <button className=" bg-sky-600/10 py-3 px-8 rounded-lg my-4">POPULAR RENTAL DEALS</button>
        {/* heading */}
        <h1 className=" text-zinc-800 text-2xl md:text-4xl font-medium leading-6">Most popular cars rental deals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
        {currentCars.map((car) => (
           <Card key={car.id} cars={car} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-20">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 text-sm bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-sm">Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 text-sm bg-gray-200 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
