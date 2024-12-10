
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import car1 from "../../assets/landing-page/cars/car1.png";
import car2 from "../../assets/landing-page/cars/car2.png";
import car3 from "../../assets/landing-page/cars/car3.png";
import PropTypes from 'prop-types';
export default function GetData({ searchTerm }) {
  let [cars, setCars] = useState([]);

  let getData = async () => {
    try {
      let response = await axios.get("https://myfakeapi.com/api/cars/");
      console.log(response.data.cars);

      // Add static images to each car object
      const carsWithImages = response.data.cars.map((car, index) => ({
        ...car,
        image: index === 0 ? car1 : index === 1 ? car2 : car3, // Assign images based on index
      }));
      setCars(carsWithImages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Filter cars based on the searchTerm
  const filteredCars = cars.filter((car) =>
    car.car.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 justify-center items-center">
      {filteredCars.slice(0, 4).map((car) => (
        <Card key={car.id} cars={car} />
      ))}
    </div>
  );
}
GetData.propTypes = {
    searchTerm: PropTypes.string.isRequired,
};