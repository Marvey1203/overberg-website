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

const AirConditioning = () => {
    return ( 
        <>
        <section className="flex flex-col justify-center items-center h-screen">
            <div className="lg:w-[766px] flex flex-col text-center gap-4">
                <h1 className="lg:text-[50px] text-[30px] font-bold leading-tight">Expert Air Conditioning Services for Your Comfort</h1>
                <p>Stay cool and comfortable with our professional air conditioning solutions. Whether you need installation, repairs, or maintenance, our skilled technicians are here to keep your home or business at the perfect temperature. Contact us today for reliable service!</p>
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
            <p className="font-semibold">Stay Cool, Breathe Easy: Our Air Conditioning Services</p>
            <h2 className="lg:text-[48px] text-[28px] font-bold">
                Expert Air Conditioning Solutions
            </h2>
            <p>Our team of skilled technicians is dedicated to providing top-notch air conditioning services. Whether you need repairs, maintenance, or a new installation, we’ve got you covered.</p>
            <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 my-10 grid-cols-2">
                <div className="text-black bg-white flex flex-col gap-4 col-span-2 lg:py-16 lg:px-10 py-8 px-5">
                    <h3 className="lg:text-[40px] text-[25px] font-semibold">Enhance Your Comfort</h3>
                    <p>Our air conditioning solutions ensure optimal indoor comfort, no matter the weather outside. Say goodbye to sweltering heat and hello to cool, refreshing air.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Comprehensive Services</h4>
                    <p>Trust us to keep your home or business cool and comfortable year-round.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Quality You Can Depend On</h4>
                    <p>When it comes to air conditioning, we don’t compromise on quality. Your satisfaction is our priority.</p>
                </div>
            </div>
        </section>
        <section className="h-full flex flex-col gap-8 py-[150px] justify-center items-center">
            <h4 className="lg:text-[30px] md:text-[25px] font-semibold text-center">Work by Overberg Lighting & Electrical</h4>
            <Carousel className="w-[90%] mx-auto">
                <CarouselContent >
                    <CarouselItem >
                        <div className="relative lg:h-[720px] lg:w-[1120px] w-[350px] h-[250px] md:h-[480px] md:w-[650px]">
                            <Image src={'/aircon-1.jpeg'} alt='Image of a monitor for cttv cameras and security system' fill={true}/>
                        </div>
                    </CarouselItem>                    
                    <CarouselItem >
                        <div className="relative lg:h-[720px] lg:w-[1120px] w-[350px] h-[250px] md:h-[480px] md:w-[650px]">
                            <Image src={'/aircon-2.jpeg'} alt='Image of a monitor for cttv cameras and security system' fill={true}/>
                        </div>
                    </CarouselItem>                    
                    <CarouselItem >
                        <div className="relative lg:h-[720px] lg:w-[1120px] w-[350px] h-[250px] md:h-[480px] md:w-[650px]">
                            <Image src={'/aircon-3.jpeg'} alt='Image of a monitor for cttv cameras and security system' fill={true}/>
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
 
export default AirConditioning;