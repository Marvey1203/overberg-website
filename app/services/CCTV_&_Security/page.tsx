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

const CCTVAndSecurity = () => {
    return ( 
        <>
        <section className="flex flex-col justify-center items-center h-screen">
            <div className="lg:w-[766px] flex flex-col text-center gap-4">
                <h1 className="lg:text-[50px] text-[30px] font-bold leading-tight">Secure Your Space with Cutting-Edge CCTV Solutions</h1>
                <p>Our advanced security camera systems provide round-the-clock surveillance, ensuring peace of mind for your home or business. From installation to monitoring, trust our experts to safeguard what matters most to you. Contact us today!</p>
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
            <p className="font-semibold">Efficiency | Reliability | Safety: Your Trusted Security Partner</p>
            <h2 className="lg:text-[48px] text-[28px] font-bold">
                Expert Surveillance Solutions
            </h2>
            <p>ur team of skilled technicians specializes in cutting-edge CCTV installations. Whether you need security for your home, business, or industrial facility, we’ve got you covered.</p>
            <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 my-10 grid-cols-2">
                <div className="text-black bg-white flex flex-col gap-4 col-span-2 lg:py-16 lg:px-10 py-8 px-5">
                    <h3 className="lg:text-[40px] text-[25px] font-semibold"> Secure Your Premises</h3>
                    <p>Our electronic security systems provide round-the-clock surveillance, ensuring peace of mind for you and your loved ones.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Comprehensive Services</h4>
                    <p>We offer a wide range of services. Trust us to keep your property safe and secure.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Tailored Solutions</h4>
                    <p>Our systems are customized to meet your specific needs, providing optimal security and peace of mind.</p>
                </div>
            </div>
        </section>
        <section className="h-full flex flex-col gap-8 py-[150px] justify-center items-center">
            <h4 className="lg:text-[30px] md:text-[25px] font-semibold text-center">Work by Overberg Lighting & Electrical</h4>
            <Carousel className="w-[90%] mx-auto">
                <CarouselContent >
                    <CarouselItem >
                        <div className="relative lg:h-[720px] lg:w-[1120px] w-[350px] h-[250px] md:h-[480px] md:w-[650px]">
                            <Image src={'/cctv-1.jpeg'} alt='Image of a aircontditioner installed by overberg lighting' fill={true}/>
                        </div>
                    </CarouselItem>                    
                    <CarouselItem className="flex flex-row">
                        <div className="relative lg:h-[720px] lg:w-[540px] w-[350px] h-[250px] md:h-[480px] md:w-[650px] basis-1/2">
                            <Image src={'/cctv-2.jpeg'} alt='Image of a aircontditioner installed by overberg lighting' fill={true}/>
                        </div>
                        <div className="relative lg:h-[720px] lg:w-[540px] w-[350px] h-[250px] md:h-[480px] md:w-[650px] basis-1/2">
                            <Image src={'/cctv-3.jpeg'} alt='Image of a aircontditioner installed by overberg lighting' fill={true}/>
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
 
export default CCTVAndSecurity;