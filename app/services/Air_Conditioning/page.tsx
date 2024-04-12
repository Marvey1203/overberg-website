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
                <h1 className="lg:text-[50px] font-bold leading-tight">Medium length hero headline goes here</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
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
            <p>Tagline</p>
            <h2 className="lg:text-[48px] font-bold">
                Short heading goes here
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="grid grid-cols-4 gap-4 lg:gap-8 my-10">
                <div className="text-black bg-white flex flex-col gap-4 col-span-2 lg:py-16 px-10">
                    <h3 className="lg:text-[40px] font-semibold">Short heading here</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 px-10">
                    <h4 className="lg:text-[24] font-semibold">Medium length section heading goes here</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 px-10">
                    <h4 className="lg:text-[24] font-semibold">Medium length section heading goes here</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
        <section className="h-full flex flex-col gap-8 py-[150px] justify-center items-center">
            <h4 className="text-[30px] font-semibold">Work by Overberg Lighting & Electrical</h4>
            <Carousel>
                <CarouselItem>
                    <CarouselContent>
                        <div className="relative h-[720px] w-[1120px]">
                            <Image src={'/Image.png'} alt='' fill={true}/>
                        </div>
                    </CarouselContent>
                </CarouselItem>
            </Carousel>
        </section>
        <CallToAction/>
        </>
     );
}
 
export default AirConditioning;