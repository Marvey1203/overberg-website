'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
            <div className="w-full flex flex-col justify-center items-center">
                <Link href={'/'}>
                    <Image className="my-4" src={"/Logo.webp"} alt="Overberg Lighting & Electrical logo swellendam electrical services" width={165} height={44}/>
                </Link>
                <div className=" flex flex-row gap-5 justify-center items-center text-white">
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