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

const LightingAndElectical = () => {
    return ( 
        <>
        <section className="flex flex-col justify-center items-center h-screen">
            <div className="lg:w-[766px] flex flex-col text-center gap-4">
                <h1 className="lg:text-[50px] text-[30px] font-bold leading-tight">Illuminate Your Space with Expert Lighting & Electrical Solutions</h1>
                <p>From elegant chandeliers to efficient LED installations, our skilled electricians bring light to every corner. Whether it’s residential wiring, commercial fixtures, or electrical maintenance, trust us to brighten your world. Contact us today!</p>
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
            <p className="font-semibold">Illuminate Your Space: Expert Lighting and Electrical Solutions</p>
            <h2 className="lg:text-[48px] text-[28px] font-bold">
                Brighten Your World            
            </h2>
            <p>Our lighting and electrical services enhance your environment, making it both functional and visually appealing.</p>
            <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 my-10 grid-cols-2">
                <div className="text-black bg-white flex flex-col gap-4 col-span-2 lg:py-16 lg:px-10 py-8 px-5">
                    <h3 className="lg:text-[40px] text-[25px] font-semibold">Electrical Excellence</h3>
                    <p>Our skilled electricians handle everything from installations to repairs, ensuring safety and reliability.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Comprehensive Services</h4>
                    <p>From rewiring and circuit installations to energy-efficient lighting solutions, we offer a wide range of services.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Custom Lighting Design</h4>
                    <p>Let us create a lighting design that suits your space perfectly.</p>
                </div>
            </div>
        </section>
        <section className="h-full flex flex-col gap-8 py-[150px] justify-center items-center">
            <h4 className="lg:text-[30px] md:text-[25px] font-semibold text-center">Work by Overberg Lighting & Electrical</h4>
            <Carousel className="w-[90%] mx-auto">
                <CarouselContent >
                    <CarouselItem >
                        <div className="relative lg:h-[720px] lg:w-[1120px] w-[350px] h-[250px] md:h-[480px] md:w-[650px]">
                            <Image src={'/DBBoardImage.webp'} alt='Image of a Db Board done by Overberg Lighting & Electrical' fill={true}/>
                        </div>
                    </CarouselItem>                    
                    <CarouselItem className="flex flex-row">
                        <div className="relative lg:h-[720px] lg:w-[540px] w-[350px] h-[250px] md:h-[480px] md:w-[650px] basis-1/2">
                            <Image src={'/Spotlight.webp'} alt='Image of a Spotlight done by Overberg Lighting & Electrical' fill={true}/>
                        </div>
                        <div className="relative lg:h-[720px] lg:w-[540px] w-[350px] h-[250px] md:h-[480px] md:w-[650px] basis-1/2">
                            <Image src={'/HouseLighting.webp'} alt='Image of a Electrical lighting in a house done by Overberg Lighting & Electrical' fill={true}/>
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
 
export default LightingAndElectical;