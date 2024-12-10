
import img1 from '../../assets/landing-page/sec-1/andriod.png';
import img2 from '../../assets/landing-page/sec-1/ios.png';
import phone from '../../assets/landing-page/sec-7/iPhone-14.png';


export default function Download() {
  return (
    <div className="my-5 px-28 container mx-auto ">
        
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="left md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-semibold text-zinc-900">
            Download Rentcars App for <span className="text-blue-500">FREE</span>
          </h2>
          <p className="py-5 text-neutral-700">For faster, easier booking and exclusive deals.</p>
          <div className="store flex items-center justify-center md:justify-start">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" className="mx-4" />
          </div>
          <form action="" className="flex flex-col mt-5 w-full lg:w-1/2 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 border border-gray-300 rounded-3xl bg-indigo-200"
            />
            <input
              type="phone"
              placeholder="Phone Number"
              className="p-2 border border-gray-300 rounded-3xl bg-indigo-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded-3xl bg-indigo-200"
            />
            <button
              type="submit"
              className="p-2  bg-blue-500 w-full md:w-1/2 text-white rounded-3xl hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="right  md:w-1/3 flex justify-center mt-10 md:mt-60">
          <img src={phone} alt="Phone" className="max-w-full" />
        </div>
      </div>
    </div>

  );
}