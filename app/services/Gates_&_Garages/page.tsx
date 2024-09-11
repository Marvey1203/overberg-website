import CallToAction from "@/app/comps/CallToAction";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image";

const GatesAndGarages = () => {
    return ( 
        <>
        <section className="flex flex-col justify-center items-center h-screen">
            <div className="lg:w-[766px] flex flex-col text-center gap-4">
                <h1 className="lg:text-[50px] text-[30px] font-bold leading-tight">Secure Your Property with Expert Gate and Garage Solutions</h1>
                <p>Our skilled technicians specialize in gate installation, garage door repairs, and smart access solutions. Whether it’s a residential driveway gate or a commercial parking garage, we ensure safety, convenience, and peace of mind. Contact us today for reliable service!</p>
                <div className="gap-5 flex flex-row  justify-center items-center">
                    <Link href={'tel:0285143417'}>
                        <button className="call-us-button">Call Now</button>
                    </Link>
                    <Link href={'mailto:overberg@overberglighting.co.za'}>
                        <button className="button border border-solid border-white">Email Us</button>
                    </Link>
                </div>
            </div>
        </section>
        <section>
            <p className="font-semibold">Secure Access Solutions: Gates and Garages Made Smarter</p>
            <h2 className="lg:text-[48px] text-[28px] font-bold">
                Automated Gates
            </h2>
            <p>Our automated gate systems combine security and convenience. Say goodbye to manual gate opening and enjoy seamless access control.</p>
            <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 my-10 grid-cols-2">
                <div className="text-black bg-white flex flex-col gap-4 col-span-2 lg:py-16 lg:px-10 py-8 px-5">
                    <h3 className="lg:text-[40px] text-[25px] font-semibold">Garage Door Expertise</h3>
                    <p>From garage door installations to repairs, our skilled technicians ensure smooth operation and safety.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Comprehensive Services</h4>
                    <p>Whether you need a new gate installation, gate motor repairs, or garage door maintenance, we’ve got you covered.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Smart Access Solutions</h4>
                    <p>Explore our smart access options and secure your property with cutting-edge technology.</p>
                </div>
            </div>
        </section>
        <section className="h-full flex flex-col gap-8 py-[150px] justify-center items-center">
            <h4 className="lg:text-[30px] md:text-[25px] font-semibold text-center">Work by Overberg Lighting & Electrical</h4>
            <Carousel className="w-[90%] mx-auto">
                <CarouselContent >
                    <CarouselItem >
                        <div className="relative lg:h-[720px] lg:w-[1120px] w-[350px] h-[250px] md:h-[480px] md:w-[650px]">
                            <Image src={'/Image of Automated Gate.webp'} alt='Image of an Automated gate done by Overberg Lighting & Electrical' fill={true}/>
                        </div>
                    </CarouselItem>                    
                    <CarouselItem >
                        <div className="relative lg:h-[720px] lg:w-[1120px] w-[350px] h-[250px] md:h-[480px] md:w-[650px]">
                            <Image src={'/AutomatedGate.webp'} alt='Image of an Automated gate done by Overberg Lighting & Electrical' fill={true}/>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-black"/>
                <CarouselNext className="bg-black"/>

            </Carousel>

        </section>
        <CallToAction/>
        </>
     );
}
 
export default GatesAndGarages;