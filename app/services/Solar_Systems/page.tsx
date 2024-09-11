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

const SolarSystems = () => {
    return ( 
        <>
        <section className="flex flex-col justify-center items-center h-screen">
            <div className="lg:w-[766px] flex flex-col text-center gap-4">
                <h1 className="lg:text-[50px] text-[30px] font-bold leading-tight">Empowering Your Space with Custom Solar Solutions</h1>
                <p>Our tailored solar systems provide independent power generation, ensuring sustainability and cost savings. From design to installation, our experts ensure compliance and efficiency. Experience the future of energy – contact us today!</p>
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
            <p className="font-semibold">Harvesting Sunshine: Your Path to Sustainable Energy</p>
            <h2 className="lg:text-[48px] text-[28px] font-bold">
                Solar Solutions
            </h2>
            <p>Our solar systems harness the power of the sun to provide clean, renewable energy. Say goodbye to high electricity bills and hello to eco-friendly living.</p>
            <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 my-10 grid-cols-2">
                <div className="text-black bg-white flex flex-col gap-4 col-span-2 lg:py-16 lg:px-10 py-8 px-5">
                    <h3 className="lg:text-[40px] text-[25px] font-semibold">Installation Expertise</h3>
                    <p>Our skilled technicians handle solar panel installations with precision. We ensure optimal placement and efficient energy production.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Comprehensive Services</h4>
                    <p> From residential solar setups to large-scale commercial installations, we got you covered</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Benefits of Solar Energy</h4>
                    <p>Cost savings, environmental impact, energy independence and increased property value</p>
                </div>
            </div>
        </section>
        <section className="h-full flex flex-col gap-8 py-[150px] justify-center items-center">
            <h4 className="lg:text-[30px] md:text-[25px] font-semibold text-center">Work by Overberg Lighting & Electrical</h4>
            <Carousel className="w-[90%] mx-auto">
                <CarouselContent >
                    <CarouselItem >
                        <div className="relative lg:h-[720px] lg:w-[1120px] w-[350px] h-[250px] md:h-[480px] md:w-[650px]">
                            <Image src={'/Glen solar gate.webp'} alt='Image of a Db Board done by Overberg Lighting & Electrical' fill={true}/>
                        </div>
                    </CarouselItem>                    
                    <CarouselItem>
                        <div className="relative lg:h-[720px] lg:w-[1120px] w-[350px] h-[250px] md:h-[480px] md:w-[650px]">
                            <Image src={'/SolarHouse.webp'} alt='Image of a Spotlight done by Overberg Lighting & Electrical' fill={true}/>
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
 
export default SolarSystems;