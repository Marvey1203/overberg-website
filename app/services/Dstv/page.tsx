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

const Dstv = () => {
    return ( 
        <>
        <section className="flex flex-col justify-center items-center h-screen">
            <div className="lg:w-[766px] flex flex-col text-center gap-4">
                <h1 className="lg:text-[50px] text-[30px] font-bold leading-tight">Crystal-Clear Entertainment with DSTV Solutions</h1>
                <p>Unlock a world of entertainment with our DSTV services. From installation to channel selection, our experts ensure seamless connectivity and high-quality viewing. Experience the best in satellite TV – contact us today!</p>
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
            <p className="font-semibold">Entertainment Unleashed: Explore DStv’s World of Possibilities</p>
            <h2 className="lg:text-[48px] text-[28px] font-bold">
                Premium Entertainment
            </h2>
            <p>Our DStv services bring you a world of entertainment, from blockbuster movies to captivating series. Get ready to immerse yourself in a universe of content.</p>
            <div className="grid lg:grid-cols-4 gap-4 lg:gap-8 my-10 grid-cols-2">
                <div className="text-black bg-white flex flex-col gap-4 col-span-2 lg:py-16 lg:px-10 py-8 px-5">
                    <h3 className="lg:text-[40px] text-[25px] font-semibold">Seamless Viewing Experience</h3>
                    <p>With DStv, you’ll enjoy crystal-clear picture quality, interactive features, and easy navigation. Say goodbye to channel surfing frustration!</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Diverse Channels</h4>
                    <p>Whether you’re a sports enthusiast or a reality TV fan, DStv has something for everyone.</p>
                </div>
                <div className="text-black bg-white flex flex-col gap-4 lg:py-16 lg:px-10 py-8 px-5">
                    <h4 className="lg:text-[20px] text-[15px] font-semibold">Exclusive Content</h4>
                    <p>From gripping dramas to laugh-out-loud comedies, your evenings will never be the same.</p>
                </div>
            </div>
        </section>
        <section className="h-full flex flex-col gap-8 py-[150px] justify-center items-center">
            <h4 className="lg:text-[30px] md:text-[25px] font-semibold text-center">Work by Overberg Lighting & Electrical</h4>
            <Carousel className="w-[90%] mx-auto">
                <CarouselContent >
                 
                    <CarouselItem className="flex flex-row">
                        <div className="relative lg:h-[720px] lg:w-[540px] w-[350px] h-[250px] md:h-[480px] md:w-[650px] basis-1/2">
                            <Image src={'/DstvSateliteOnRoof.webp'} alt='Image of Dstv Satelite done by Overberg Lighting & Electrical' fill={true}/>
                        </div>
                        <div className="relative lg:h-[720px] lg:w-[540px] w-[350px] h-[250px] md:h-[480px] md:w-[650px] basis-1/2">
                            <Image src={'/DstvSateliteOnSideOfHouse.webp'} alt='Image of dstv installation done by Overberg Lighting & Electrical' fill={true}/>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
        <CallToAction/>
        </>
     );
}
 
export default Dstv;