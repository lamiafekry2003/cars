import location from '../../assets/landing-page/sec3/location.png'
import calender from '../../assets/landing-page/sec3/calender.png'
import car from '../../assets/landing-page/sec3/car-icon.png'
// logos
import logo1 from '../../assets/landing-page/Logoscom/ac.png'
import logo2 from '../../assets/landing-page/Logoscom/audi.png'
import logo3 from '../../assets/landing-page/Logoscom/jaguar.png'
import logo4 from '../../assets/landing-page/Logoscom/nissan.png'
import logo5 from '../../assets/landing-page/Logoscom/volvo.png'

export default function Rent() {
    const icons = [
        { src: location, alt: 'loc', head: 'Choose location', text: 'Choose your location and find your best car' },
        { src: calender, alt: 'cale', head: "Pick-up date", text: 'Select your pick-up date and time to book your car' },
        { src: car, alt: 'car', head: 'Book your car', text: 'Book your car and we will deliver it directly to you' },
    ];
    const logos=[
        {src:logo1, alt:"logo1"},
        {src:logo2, alt:"logo2"},
        {src:logo3, alt:"logo3"},
        {src:logo4, alt:"logo4"},
        {src:logo5, alt:"logo5"},
        {src:logo3, alt:"logo3"},
    ]

    return (
        <div className="my-5 px-7 md:px-28 container mx-auto  text-center ">
            {/* button of publor */}
        
            <button className="bg-sky-600/10 text-blue-500 py-3 px-8 rounded-lg mb-4 ">How It Works</button>
            <h1 className="text-zinc-800 text-2xl md:text-4xl  font-medium leading-6">Rent with the following 3 working steps</h1>
           
            <div className="grid grid-cols-1 py-12 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                {icons.map((icon) => (
                    <div className="text-center  " key={icon.alt}>
                        <img src={icon.src} alt={icon.alt} className="mx-auto" />
                        <h5 className="font-semibold mt-4">{icon.head}</h5>
                        <p className="mt-2 text-gray-600">{icon.text}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-2 py-12 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center items-center">
                {logos.map((logo) => (
                    <div className="text-center  " key={logo.alt}>
                        <img src={logo.src} alt={logo.alt} className="mx-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
}
