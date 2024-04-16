import Image from "next/image";
import CallToAction from "../comps/CallToAction";
import Link from "next/link";

const Services = () => {
    return ( 
    <>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-[150px] pb-[100px] md:py-[150px] lg:py-[80px]">
            <div className="flex flex-col gap-5 justify-center lg:flex  lg:items-start items-center w-full text-center lg:text-left">
                <h1 className="font-bold lg:text-[48px] text-[32px] leading-tight">Empowering Your Space with Expert Electrical Solutions</h1>
                <p className="text-[13px]">
                    At Overberg Lighting & Electrical we specialize in a comprehensive range of electrical services. From wiring to lighting and electrical installations, we’ve got you covered. Our skilled team ensures seamless integration of solar panels, reliable DSTV connections, robust CCTV and security systems, efficient gates and garage automation, cozy fireplace installations, and optimal air conditioning solutions. 
                </p>
                <div className="flex flex-row gap-4">
                    <Link href={'tel:0285143417'}>
                        <button className="call-us-button">Call Us Now</button>
                    </Link>
                    <Link href={'mailto:overberg@overberglighting.co.za'}>
                        <button className="button border border-solid border-white">Email Us Today</button>
                    </Link>
                </div>
            </div>
            <Image src={'/Service Hero Image.png'} alt="animated image of a house that is connected by electrical wire" height={900} width={720} />
        </section>
        <section>
            <div className="grid lg:grid-cols-2 lg:gap-8 grid-cols-1 gap-4">
                    <div>
                        <p>
                            CCTV & Security                        
                        </p>
                        <h2 className="lg:text-[45px] text-[28px] leading-tight font-bold">Secure Your Premises With Cutting Edge Technology</h2>
                    </div>
                    <div>
                    <p className="text-[13px]">
                        Our expert team provides comprehensive security solutions, including the installation of cutting-edge intercom systems, reliable home security systems, and robust electrical fences. With our technology, you can rest assured that your property is monitored and protected around the clock.
                    </p>
                    <div className="flex flex-row py-5 justify-center items-center">
                        <div className="lg:w-[18px] lg:h-[12px] w-[30px] h-[10px] md:w-[15px] rounded-full bg-[#3F959B] mr-3"></div>
                        <p className="text-[13px]">
                            Intercom Systems: Stay connected and secure with our advanced intercom installations, ensuring seamless communication within your property.
                        </p>
                    </div>
                    <div className="flex flex-row  py-5 justify-center items-center">
                        <div className="lg:w-[18px] lg:h-[12px] w-[30px] h-[10px] md:w-[15px] rounded-full bg-[#3F959B] mr-3"></div>
                        <p className="text-[13px]">
                            Home Security: Equip your home with our full range of security services, from alarm systems to surveillance cameras, tailored to give you peace of mind.
                        </p>
                    </div>
                    <div className="flex flex-row  py-5 justify-center items-center">
                        <div className="lg:w-[18px] lg:h-[12px] w-[30px] h-[10px] md:w-[15px] rounded-full bg-[#3F959B] mr-3"></div>
                        <p className="text-[13px]">
                            Electrical Fences: Deter intruders with our high-quality electrical fences, offering an extra layer of security for your home or business.
                        </p>
                        </div>
                        <div className="flex flex-row gap-5 py-5">
                            <Link href={'tel:0285143417'}>
                                <button className="call-us-button">Call Us Now</button>
                            </Link>
                            <Link href={''}>
                                <button className="button flex flex-row gap-4 justify-center items-center">Learn More <Image src={'/Arrow right.svg'} alt="svg arrow showing right" height={5} width={9} /></button>
                            </Link>
                        </div>
                    </div>


                    
                </div>
                <div className="relative w-full lg:h-[600px] h-[300px] my-10">
                    <Image src={'/CCTV & Security.png'} alt="Image of a cameras and other security elements with blue background" fill={true}/>
                </div>
        </section>
        <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-[50px] lg:gap-8 lg:py-[150px]">
            <div className="flex flex-col justify-center gap-4">
                <h2 className="lg:text-[45px] text-[28px] font-bold">Lighting & Electrical</h2>
                <p className="text-[13px]">
                    Our expert team handles everything from lighting installations to comprehensive electrical solutions. Whether it’s upgrading existing fixtures or designing efficient systems for new spaces, we’re committed to brightening your world.
                </p>
                <div className="grid grid-cols-2 gap-4 lg:gap-8">
                    <div className="flex flex-col gap-1 lg:gap-3 pt-5 pb-2">
                        <h3 className="font-bold text-lg">Residential</h3>
                        <p className="text-[13px]">
                            Brighten your home with our tailored lighting solutions. From cozy ambiance to functional illumination, we enhance your living spaces.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-3 pt-5 pb-2">
                        <h3 className="font-bold text-lg">Commercial</h3>
                        <p className="text-[13px]">
                            Power up your business environment with our efficient electrical services. We optimize lighting systems for productivity and safety.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                    <Link href={'tel:0285143417'}>
                        <button className="call-us-button">Call Us Now</button>
                    </Link>
                    <Link href={''}>
                        <button className="button flex flex-row gap-4 justify-center items-center">Learn More <Image src={'/Arrow right.svg'} alt="svg arrow showing right" height={5} width={9} /></button>
                    </Link>                
                </div>
            </div>
            <Image src={'/Lighting & Electrical Image.png'} alt="Animated style image including electricians and electrical components" width={616} height={640}/>
        </section>
        <section className="grid lg:grid-cols-2 lg:gap-8 lg:py-[100px] grid-cols-1 gap-4 py-[50px]">
            <Image src={'/Solar Image.png'} alt="Animated style image including solar panels and solar elements" width={616} height={640}/>
            <div className="flex flex-col gap-4 justify-center order-first lg:order-last">
                <h2 className="lg:text-[48px] text-[28px] font-bold">Solar Systems</h2>
                <p className="text-[13px]">
                    We provide a comprehensive range of photovoltaic (PV) panels, solar inverters, and battery units for efficient solar energy capture and storage. Our installation services ensure that your solar power system is set up for optimal performance and sustainability.
                </p>
                <div className="flex flex-row gap-5">
                    <Link href={'tel:0285143417'}>
                        <button className="call-us-button">Call Us Now</button>
                    </Link>
                    <Link href={''}>
                            <button className="button flex flex-row gap-4 justify-center items-center">Learn More <Image src={'/Arrow right.svg'} alt="svg arrow showing right" height={5} width={9} /></button>
                    </Link>                
                </div>
            </div>
            
        </section>
        <section className="lg:py-[100px] lg:gap-8 flex flex-cols justify-center py-[50px] gap-4">
            <div className="flex flex-col justify-center items-center">
                <p className="font-semibold ">
                    Automation
                </p>
                <h2 className="lg:text-[48px] text-[30px] font-bold">
                    Gates & Garages
                </h2>
                <p className="text-[13px] text-center">
                Seamless Automation for Your Gates & Garages - Service Excellence Guaranteed
                </p>
                <div className="grid lg:grid-cols-2 lg:gap-8 grid-cols-1 gap-4 md:gap-8 py-[50px]">
                    <div className="flex flex-col gap-2 rounded-[30px] bg-white text-black justify-between">
                        <div className="lg:py-[48px] lg:px-[48px] py-[28px] px-[28px]">
                            <h3 className="leading-tight lg:text-[32px] text-[28px] font-bold lg:my-3">Advanced Gate Automation, The Gateway to Convenience</h3>
                            <p className="text-[13px]">
                                Experience the future of home entry with our state-of-the-art gate automation services. Elevate your property’s security and style with seamless, automated gate solutions.
                            </p>
                            <div className="flex flex-row gap-5 pt-4">
                                <Link href={'tel:0285143417'}>
                                    <button className="call-us-button bg-black ">Call Us Now</button>
                                </Link>
                                <Link href={''}>
                                    <button className="button flex flex-row gap-4 justify-center items-center ">Learn More <Image className="stroke-black" src={'/Arrow right black.svg'} alt="svg arrow showing right" height={5} width={9} /></button>
                                </Link>
                            </div>                        
                        </div>

                        <div className="lg:h-[360px] h-[260px] relative w-full">
                            <Image alt="Image of an automated gate" src={'/Gates Image.png'} fill={true}/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-[30px] bg-white text-black justify-between">
                        <div className="lg:py-[48px] lg:px-[48px] py-[28px] px-[28px]">
                            <h3 className="leading-tight lg:text-[32px] text-[28px] font-bold lg:my-3">Smart Garage Automation,  Your Doorway to Efficiency</h3>
                            <p className="text-[13px]">
                                Revolutionize your parking experience with our cutting-edge garage automation services. Our automated garage solutions bring unparalleled convenience and security to your doorstep.                    </p>
                            <div className="flex flex-row gap-5 pt-4">
                                <Link href={'tel:0285143417'}>
                                    <button className="call-us-button bg-black">Call Us Now</button>
                                </Link>
                                <Link href={''}>
                                    <button className="button flex flex-row gap-4 justify-center items-center ">Learn More <Image className="stroke-black" src={'/Arrow right black.svg'} alt="svg arrow showing right" height={5} width={9} /></button>
                                </Link>
                            </div>                        
                        </div>

                        <div className="lg:h-[360px] h-[260px] relative w-full">
                            <Image alt="Image of an automated garage door" src={'/Garages Image.png'} fill={true}/>
                        </div>                    
                    </div>

                </div>
            </div>

        </section>
        <section>
            <div className="grid lg:grid-cols-2 lg:gap-8 grid-cols-1 gap-4">
                    <div>
                        <p>
                            DSTV   
                        </p>
                        <h2 className="lg:text-[45px] text-[30px] leading-tight font-bold">Enhanced DSTV Setup for Unmatched Viewing Quality</h2>
                    </div>
                    <div>
                    <p className="text-[13px]">
                        Unlock the full potential of your viewing experience with our professional DSTV setup and service solutions. Tailored to meet your entertainment needs.                    </p>
                    <div className="flex flex-row py-5 justify-center items-center">
                        <div className="w-[12px] h-[12px] rounded-full bg-[#3F959B] mr-3"></div>
                        <p className="w-full text-[13px]">
                            Precision DSTV alignment for optimal signal strength and quality.                        
                        </p>
                    </div>
                    <div className="flex flex-row  py-5 justify-center items-center">
                        <div className="w-[12px] h-[12px] rounded-full bg-[#3F959B] mr-3"></div>
                        <p className="w-full text-[13px]">
                            Customized installation options to suit your home’s layout and style.                        
                        </p>
                    </div>
                    <div className="flex flex-row  py-5 justify-center items-center">
                        <div className="w-[12px] h-[12px] rounded-full bg-[#3F959B] mr-3"></div>
                        <p className="w-full text-[13px]">
                            Reliable after-service support for uninterrupted viewing pleasure.
                        </p>
                        </div>
                        <div className="flex flex-row gap-5 py-5">
                            <Link href={'tel:0285143417'}>
                                <button className="call-us-button">Call Us Now</button>
                            </Link>
                            <Link href={''}>
                                <button className="button flex flex-row gap-4 justify-center items-center">Learn More <Image src={'/Arrow right.svg'} alt="svg arrow showing right" height={5} width={9} /></button>
                            </Link>                        
                        </div>
                    </div>


                    
                </div>
                <div className="relative w-full lg:h-[600px] h-[280px] my-10">
                    <Image className="rounded-[30px]" src={'/DSTV Image.png'} alt="Image of a DSTV dish" fill={true}/>
                </div>
        </section>
        <section className="lg:py-[100px] grid lg:grid-cols-2 lg:gap-8 py-[50px] gap-4 grid-cols-1">
            <div className="flex flex-col gap-2 justify-center">
                <h2 className="lg:text-[48px] text-[30px] font-bold leading-tight">
                    Stay Cool and Comfortable with Our Expert Air Conditioning Services
                </h2>
                <p className="text-[13px]">
                    Beat the heat and ensure your space remains a haven of comfort with our top-notch air conditioning services. Our certified technicians are at your service to provide swift and efficient solutions for all your cooling needs.                
                </p>
                <div className="grid grid-cols-2 gap-4 lg:gap-8 pt-5">
                    <div className="flex flex-col gap-3 py-10 px-5 bg-white rounded-[30px] text-black">
                        <h3 className="font-bold text-[18px]">Installation & Maintenance</h3>
                        <p className="text-[13px]">
                            Ensure year-round comfort with our comprehensive installation and maintenance services.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 py-10 px-5 bg-white rounded-[30px] text-black">
                        <h3 className="font-bold text-[18px]">Repairs & Support</h3>
                        <p className="text-[13px]"> 
                            Quick fixes and ongoing support to keep your air conditioning system at its best.                        
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-5 py-5">
                    <Link href={'tel:0285143417'}>
                        <button className="call-us-button">Call Us Now</button>
                    </Link>
                    <Link href={''}>
                        <button className="button flex flex-row gap-4 justify-center items-center">Learn More <Image src={'/Arrow right.svg'} alt="svg arrow showing right" height={5} width={9} /></button>
                    </Link>                
                </div>

            </div>
            <Image width={616} height={640} alt="Animated image of an airconditioner including icons representing heat and cold" src={'/Airconditioning Image.png'} />
        </section>
        <section className="lg:py-[100px] grid lg:grid-cols-2 lg:gap-8 grid-cols-1 gap-4 py-[50px]">
            <Image alt="Image of a fireplace in a modern house" src={'/Fireplace Image.png'} height={640} width={616} />
            <div className="flex flex-col gap-2 justify-center order-first lg:order-last">
                <h2 className="leading-tight font-bold lg:text-[48px] text-[30px]">Fireplace Installation and Maintenace</h2>
                <p className="text-[13px]">
                    Our certified electricians specialize in fireplace installation and maintenance. Whether you need a new electric fireplace installed or require maintenance for an existing one, we’ve got you covered. Trust us to ensure safety compliance, aesthetics, and peak performance for your cozy evenings.
                </p>
                <div className="flex flex-row gap-5 py-5">
                    <Link href={'tel:0285143417'}>
                        <button className="call-us-button">Call Us Now</button>
                    </Link>
                    <Link href={''}>
                        <button className="button flex flex-row gap-4 justify-center items-center">Learn More <Image src={'/Arrow right.svg'} alt="svg arrow showing right" height={5} width={9} /></button>
                    </Link>                
                </div>
            </div>
        </section>
        <section className="lg:py-[100px] flex flex-col lg:gap-8 py-[20px] gap-4">
            <div className="flex flex-col lg:flex-row justify-between items-center py-10">
                <div className="lg:w-[679px]">
                    <p>Why choose us</p>
                    <h2 className="leading-tight font-bold lg:text-[40px] text-[30px] pb-3">Empowering Your Space with Expert Electrical Solutions</h2>
                </div>
                <p className="lg:w-[480px] w-full text-[13px]">
                    Electricity isn’t just a convenience; it’s a fundamental necessity that powers our lives. Whether you’re at home, in the office, or running a business, reliable electrical systems are crucial. That’s where we come in.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-8 grid-cols-1 gap-4">
                <div className="flex flex-col gap-5">
                    <Image src={'/Professional Expertise.png'} alt='Image of electrical tools used by electricians' height={240} width={405} />
                    <h3 className="font-bold text-[28px] lg:text-[30px]">Professional Expertise</h3>
                    <p className="text-[13px]">
                        Our team of trained professionals ensures that your electrical problems are addressed with precision and care. From minor repairs to complex installations, we’ve got the expertise to handle it all.
                    </p>
                </div>                
                <div className="flex flex-col gap-5">
                    <Image src={'/Comprehensive Services.png'} alt='Image of electrical tools used by electricians' height={240} width={405} />
                    <h3 className="font-bold text-[28px] lg:text-[30px]">Comprehensive Services</h3>
                    <p className="text-[13px]">
                        We cover a wide spectrum of electrical services, including solar panel installations, home security solutions, motorized gates, and more. No matter the scale or scope, we’ve got you covered.                    
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <Image src={'/Seamless Wiring.png'} alt='Image of electrical tools used by electricians' height={240} width={405} />
                    <h3 className="font-bold text-[28px] lg:text-[30px]">Seamless Wiring</h3>
                    <p className="text-[13px]">
                        Moving into a new house, setting up fresh offices, or  a new building? Count on us to wire it seamlessly and install all the necessary electrical systems. Your space will be powered efficiently and safely                    
                    </p>
                </div>
                <div className="flex flex-row gap-5 pt-5">
                    <Link href={'tel:0285143417'}>
                        <button className="call-us-button">Call Us Now</button>
                    </Link>
                    <Link href={''}>
                        <button className="button flex flex-row gap-4 justify-center items-center">Learn More <Image src={'/Arrow right.svg'} alt="svg arrow showing right" height={5} width={9} /></button>
                    </Link>                
                </div>
            </div>
        </section>
        <CallToAction/>
    </>

     );
}
 
export default Services;