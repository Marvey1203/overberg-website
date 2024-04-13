"use client"
import Image from "next/image";
import { useState } from "react";
import ServicesPopUp from "./popUp";
import Link from "next/link";

const Header = () => {
    const [servicesState, setServicesState] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleMouseEnter = () => {
        setServicesState(true)
    }
    const handleMouseLeave = () => {
        setServicesState(false)
    }
    const menuToggle = () => {
        setToggleMenu(!toggleMenu)
    }    
    const mobileServiceState = () => {
        setServicesState(!servicesState)
    }
    return ( 
        <div className="py-10 lg:px-5 absolute w-full z-10">
            <div className="w-[90%] flex flex-row justify-between items-end lg:grid lg:grid-cols-3 mx-auto ">
                <Link href={'/'} className="relative h-[42px] w-[150px] md:w-[180px] lg:w-[180px] lg:h-[44px]">
                    <Image src={"/Logo.webp"} alt="Overberg Lighting & Electrical logo swellendam electrical services" priority fill={true}/>
                </Link>
                <div className="text-white hidden lg:flex justify-center justify-items-center ">
                    <div className="flex flex-row gap-5 items-center">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/about'}>About</Link>
                                <div className="flex justify-row gap-3">
                                    <Link onClick={menuToggle} href={'/services'} className="flex justify-row gap-3 hover:cursor-pointer"
                                    >
                                    <p>Services</p>
                                    </Link>
                                    <button onClick={mobileServiceState} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <Image src={"/VectorServices.svg"} height={3} width={10} alt="Down Arrow for more information on services"/>
                                        {servicesState && <ServicesPopUp/>}
                                    </button>
                                </div>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <Link href={'tel:0285143417'} className="text-white flex justify-end mr-3 py-2">
                        <button className="call-us-button text-[13px]">Call Us Now</button>
                    </Link>
                    <button onClick={menuToggle}>
                        <Image src={'/hamburger.png'} alt="Mobile menu icon" height={30} width={30} />
                    </button>
                    {
                        toggleMenu &&
                        <div className="absolute top-0 right-0 w-[100%] h-[70vh] bg-white text-black flex flex-col gap-8">
                            <div className="w-full flex justify-end items-end px-5 h-[10%]">
                                <button onClick={menuToggle}>
                                    <Image src={'/close.png'} alt="Mobile menu icon" height={30} width={30} />
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-5 place-content-center place-items-center h-[90%]">
                                <Link onClick={menuToggle} href={'/'}>Home</Link>
                                <Link onClick={menuToggle} href={'/about'}>About</Link>
                                <div className="flex justify-row gap-3">
                                    <Link onClick={menuToggle} href={'/services'} className="flex justify-row gap-3 hover:cursor-pointer"
                                    >
                                    <p>Services</p>
                                    {servicesState && <ServicesPopUp/>}
                                    </Link>
                                    <button onClick={mobileServiceState}>
                                        <Image src={"/Arrow right black.svg"} height={3} width={10} alt="Down Arrow for more information on services"/>
                                    </button>
                                </div>

                                <Link onClick={menuToggle} href={'/contact'}>Contact</Link>
                            </div>
                        </div>

                    }

                </div>
                <Link href={'tel:0285143417'} className="text-white hidden lg:flex justify-end my-2">
                    <button className="call-us-button">Call Us Now</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Header;