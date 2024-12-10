import ngsec from "../../assets/landing-page/sec-6/bg-sec6.png";
import men from "../../assets/landing-page/sec-6/Rectangle 8 (1).png";
import women from "../../assets/landing-page/sec-6/girl.png";
export default function Test() {
  return (


<div className="bg-blue-50 w-full min-h-screen relative py-12 my-6 lg:my-12">
  <img src={ngsec} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />

  {/* Text container */}
  <div className="text-center z-10 relative py-5">
    <button className="bg-sky-600/10 py-3 px-8 rounded-lg my-4">
      POPULAR RENTAL DEALS
    </button>
    <h1 className="text-zinc-800 text-4xl font-medium leading-6">
      Most popular car rental deals
    </h1>
  </div>

  {/* Main content */}
  <div className="grid grid-cols-1 px-4 md:px-48 py-8 container mx-auto lg:grid-cols-2 gap-10 relative z-10">
    {/* Card 1 */}
    <a
      href="#"
      className="flex flex-col h-full w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full h-48 rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg"
        src={men}
        alt="men"
      />
      <div className="p-6">
        <h5 className="text-3xl font-bold text-gray-900">5.5 <span className="text-sm">stars</span></h5>
        <div className="flex text-yellow-400">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <q className="block mt-4 text-gray-700">
          I feel very secure when using caretalls services. Your customer care team is very enthusiastic and the driver is always on time.
        </q>
        <p className="mt-6 font-bold">Charlie Johnson</p>
        <p className="text-gray-500">Last updated 3 mins ago</p>
      </div>
    </a>

    {/* Card 2 */}
    <a
      href="#"
      className="flex flex-col w-full bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full h-full rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg"
        src={women}
        alt="women"
      />
      <div className="p-6">
        <h5 className="text-3xl font-bold text-gray-900">5.5 <span className="text-sm">stars</span></h5>
        <div className="flex text-yellow-400">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <q className="block mt-4 text-gray-700">
          I feel very secure when using caretalls services. Your customer care team is very enthusiastic and the driver is always on time.
        </q>
        <p className="mt-6 font-bold">Charlie Johnson</p>
        <p className="text-gray-500">Last updated 3 mins ago</p>
      </div>
    </a>
  </div>
</div>

  );
}
