
import { Link } from "react-router-dom";
import GetData from "../GetData/GetData";
import { motion } from "framer-motion";
import { useState } from "react"; 

export default function AllCars() {
  const [searchTerm, setSearchTerm] = useState(""); 

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      {/* search */}
      <div className="my-5 px-7 md:px-28 container mx-auto text-center">
        <motion.form
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-full mx-auto"
        >
          <div className="flex justify-between relative shadow-lg shadow-sky-700/25 border-0">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md ">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <input
              type="text"
              id="website-admin"
              className="rounded-none rounded-e-lg bg-gray-50 border  text-gray-900  focus:border focus:border-1 focus:border-sky-600 block flex-1 min-w-0 w-full text-sm p-2.5 "
              placeholder="Search By Name"
              value={searchTerm} // Controlled input
              onChange={handleSearchChange} // Update search term
            />
            <button className="bg-sky-600 text-white rounded-e-lg px-5 absolute right-0 h-full">
              Search
            </button>
          </div>
        </motion.form>
        {/* button of popular */}
        <button className="bg-sky-600/10 py-3 px-8 rounded-lg my-6">
          POPULAR RENTAL DEALS
        </button>
        {/* heading */}
        <h1 className="text-zinc-800 text-4xl my-3 font-medium leading-6">
          Most popular cars rental deals
        </h1>
        {/* getData with search functionality */}
        <GetData searchTerm={searchTerm} />
        <Link
          to="/cars"
          className="my-6 max-w-full inline-flex items-center justify-center px-10 py-3 text-lg text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Show All Vehicles
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
    </>
  );
}
