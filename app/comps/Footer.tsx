'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ServicesPopUpFooter from "./popUpFooter";
import ServicesPopUp from "./popUp";
const Footer = () => {
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
        <div className="w-full pt-[80px] pb-[50px] justify-center items-center">
            <div className="w-full flex flex-row lg:flex-col justify-center items-center">
                <Link href={'/'}>
                    <Image className="my-4" src={"/Logo.webp"} alt="Overberg Lighting & Electrical logo swellendam electrical services" width={165} height={44}/>
                </Link>
                <div className="flex lg:hidden justify-normal">
                    <button onClick={mobileServiceState}>
                        <Image priority src={'/hamburger.png'} alt="Mobile menu icon" height={30} width={30} />
                    </button>


                </div>
                
                <div className="hidden lg:flex flex-row gap-5 justify-center items-center text-white">
                    <Link className="text-[13px]" href={'/'}>Home</Link>
                    <Link className="text-[13px]" href={'/about'}>About</Link>
                    <div className="flex justify-row gap-3">
                                    <Link onClick={menuToggle} href={'/services'} className="flex justify-row gap-0 hover:cursor-pointer"
                                    >
                                    <p className="text-[13px]">Services</p>
                                    </Link>
                                    <button onClick={mobileServiceState} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <Image src={"/VectorServices.svg"} height={3} width={10} alt="Down Arrow for more information on services"/>
                                        {servicesState && <ServicesPopUp/>}
                                    </button>
                    </div>
                    <Link className="text-[13px]" href={'/contact'}>Contact</Link>

                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                {
                        servicesState &&
                        <div className="z-10 absolute w-[100%] h-[70vh] bg-white text-black flex justify-center flex-col items-center gap-8">
                            <div className="w-full flex justify-end items-end px-5 h-[10%]">
                                <button onClick={mobileServiceState}>
                                    <Image src={'/close.png'} alt="Mobile menu icon" height={30} width={30} />
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-5 place-content-center place-items-center h-[90%]">
                                <Link onClick={mobileServiceState} href={'/'}>Home</Link>
                                <Link onClick={mobileServiceState} href={'/about'}>About</Link>
                                <div className="flex justify-row gap-3">
                                    <Link onClick={mobileServiceState} href={'/services'} className="flex justify-row gap-3 hover:cursor-pointer"
                                    >
                                    <p>Services</p>
                                    {toggleMenu && <ServicesPopUpFooter/>}
                                    </Link>
                                    <button onClick={menuToggle}>
                                        <Image src={"/Arrow right black.svg"} height={3} width={10} alt="Down Arrow for more information on services"/>
                                    </button>
                                </div>

                                <Link onClick={mobileServiceState} href={'/contact'}>Contact</Link>
                            </div>
                        </div>

                    }
                </div>
            <div className="border-t border-[#3F959B] flex md:flex-row flex-col md:justify-between w-[90%] mx-auto mt-8 text-white py-8 gap-5 md:gap-2">
                <div>
                    <p className="text-[13px]">© 2024 Overberg Lighting & Electrical. All rights reserved.</p> 
                </div>
                <div className="flex flex-row gap-3 justify-between">
                    <Link href={"/privacy-policy"} className="text-[13px]">Privacy Policy</Link>
                    <Link href={"/terms-of-service"} className="text-[13px]">Terms of Service</Link>
                    <Link href={"/cookie-policy"} className="text-[13px]">Cookie Policy</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;