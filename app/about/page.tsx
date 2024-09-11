import Image from "next/image";
import CallToAction from "../comps/CallToAction";
const About = () => {
    return ( 
        <>
        <section className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:py-[150px] pt-[150px] pb-[100px]">
            <div className='flex flex-col justify-center'>
                <h1 className="lg:text-[40px] text-[32px] text-center lg:text-left font-bold mb-3 leading-tight">Empowering new beginnings with expert electrical solutions.</h1>
                <p className="text-[13px] text-center lg:text-left">Ensuring safety and quality in everybody’s electrical journey.</p>
            </div>
            <div>
                <div className="">
                    <Image priority loading="eager" className="rounded-[30px]" src={'/Electrician hero about image.webp'} alt=' animate electrician with icons of tools and electrical items' width={616} height={640} />
                </div>
            </div>
        </section>
        <section>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
                <div className="flex flex-col justify-center">
                    <p>
                        Our Story
                    </p>
                    <h2 className="lg:text-[35px] text-[28px] leading-tight font-bold">Illuminating Swellendam: Overberg Lighting's Journey</h2>
                </div>
                <p className="text-[13px]">
                    Founded in 2004 by the visionary Herman Fourie, Overberg Lighting has become a beacon of excellence in Swellendam. Our commitment to integrity and quality workmanship has earned us a sterling reputation. Fully accredited with ECA, the Department of Labour, and the Central Supplier Database, we guarantee peace of mind with our professional service. <br/><br/>
                    At Overberg Lighting, customer satisfaction is our cornerstone. We take pride in having illuminated countless homes and businesses with our comprehensive electrical services, from meticulous wiring to seamless installations. Our journey is not just about lighting up spaces—it’s about brightening lives.
                </p>
            </div>
            <div className="relative w-full lg:h-[450px] h-[250px] my-10">
                <Image src={'/Our Story Image.webp'} alt="Image of a electrician in a town" fill={true}/>
            </div>
        </section>
        <section className="grid lg:grid-cols-2 lg:gap-5 gap-4 lg:py-[150px] py-[50px]">
            <div className="flex flex-col justify-center">
                <h3 className="lg:text-[35px] text-[26px] leading-tight font-bold">"They are by far the best electrician in this town."</h3>
                <p className="text-[13px]">Our vision is to energize every home and business in Swellendam, becoming the trusted partner for your electrical safety and reliability</p>
                <div className="w-full flex flex-row justify-between py-10">
                    <div className="flex flex-col justify-center lg:w-[296px] w-full">
                        <p className="font-bold text-[26px] lg:text-[48px]">500+</p>
                        <p className="text-[13px]">Projects Completed</p>
                    </div>
                    <div className="w-[296px] flex flex-col justify-end">
                        <p className="font-bold text-[26px] lg:text-[48px]">99%</p>
                        <p className="text-[13px]">Customer Satisfaction</p>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between py-10">
                    <div className="flex flex-col justify-center lg:w-[296px] w-full">
                        <p className="font-bold text-[26px] lg:text-[48px]">3</p>
                        <p className="text-[13px]">Certified Teams</p>
                    </div>
                    <div className="w-[296px] flex flex-col justify-end">
                        <p className="font-bold text-[26px] lg:text-[48px]">20</p>
                        <p className="text-[13px]">Years Established</p>
                    </div>
                </div>
            </div>
            <div className="lg:h-[100%] lg:w-[100%] w-[330px] h-[330px] relative">
                <Image className="rounded-[30px]" src={'/Stats Image.webp'} alt="electrical image of town and electrical elements" fill={true}/>
            </div>


        </section>
        <section className="flex flex-col justify-center items-center lg:gap-8 lg:py-[150px] gap-4 py-[50px]">
            <p className="font-semi-bold lg:text-[42px] text-[26px]">Our trusted partners</p>
            <div className=" w-full grid grid-cols-5 grid-flow-row gap-8 lg:py-10">
                <div className="flex justify-center items-center">
                    <p className="text-[13px]">Unitherm</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-[13px]">TCL</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-[13px]">Regal</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-[13px]">Hikvision</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-[13px]">Centurion Systems</p>
                </div>                
                <div className="flex justify-center items-center">
                    <p className="text-[13px]">Okavango Electrical</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-[13px]">Eurolux</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-[13px]">Radiant Lighting</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-[13px]">Brightstar Lighting</p>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-[13px]">Flash</p>
                </div>
            </div>
        </section>
        <CallToAction/>
        </>
     );
}
 
export default About;