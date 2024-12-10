
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ cars }) {
  return (
    <Link to={`/carddetails/${cars.id}`}>
      <div className="max-w-sm my-5 h-full flex flex-col py-4 bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className="flex justify-center items-center mx-5">
          <img
            className="rounded-t-lg w-full p-5"
            src={cars.image}
            alt={`Image of ${cars.car}`}
          />
        </a>
        <div className="p-8 text-left flex flex-col flex-grow">
          {/* Title Section */}
          <a href="#">
            <h5 className="text-lg leading-6  font-bold tracking-tight text-neutral-800 dark:text-white">
              {cars.car}
            </h5>
          </a>
          {/* Car Model */}
          <p className="font-normal text-sm py-2 text-gray-700 dark:text-gray-400">
            {cars.car_model}
          </p>
          {/* Car Details */}
          <div className="flex justify-between items-center mt-6 text-gray-400">
            <div className="flex flex-col md:flex-row items-center">
              <i className="fa-solid fa-paint-roller mr-2"></i>
              <span>{cars.car_color}</span>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-calendar-days mr-2"></i>
              <span>{cars.car_model_year}</span>
            </div>
          </div>
          {/* Divider */}
          <hr className="my-4" />
          {/* Price Section */}
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400">Price</span>
            <span className=" text-neutral-800 font-semibold">
              {cars.price} <span className=" text-gray-400">/day</span>
            </span>
          </div>
          {/* Read More Button */}
          <Link
            to={`/carddetails/${cars.id}`}
            href="#"
            className="mt-auto inline-flex items-center justify-center px-3 py-2 text-sm w-full font-medium text-white bg-sky-600 rounded-lg hover:sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Link>
  );
}

// Prop validation for the cars prop
Card.propTypes = {
  cars: PropTypes.shape({
    id: PropTypes.number.isRequired,
    car: PropTypes.string.isRequired,
    car_model: PropTypes.string.isRequired,
    car_color: PropTypes.string.isRequired,
    car_model_year: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
