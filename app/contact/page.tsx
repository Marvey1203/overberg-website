import Link from "next/link";
import Image from "next/image"

const Contact = () => {
    return ( 
        <><section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-[130px] pb-[50px] lg:py-[100px] lg:pt-[150px]">
            <div className="flex flex-col justify-center">
                <h1 className="lg:text-[48px] font-bold text-[30px]">Contact Us</h1>
                <p className="mb-5 w-[90%]">Let’s electrify your space together. Reach out now and spark a partnership with expert electricians who care.</p>

            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8473071375665!2d20.43853347571505!3d-34.02213017316819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd3d191a9b08607%3A0x29120d738633ee8b!2sOverberg%20Lighting%20%26%20Electrical%20Swellendam!5e0!3m2!1sen!2sza!4v1712065191718!5m2!1sen!2sza" width="600" height="450" className="border-0 w-full h-[200px] " ></iframe>
        </section>
        <section className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4 ">
            <div className="rounded-[30px] bg-white text-black py-[50px] px-5 flex flex-col justiyf-center items-center">
                <div className="flex flex-row gap-3 justify-center items-center">
                    <h2 className="text-[32px] md:text-[38px] lg:text-[40px] font-bold">Email</h2>
                    <div className="relative h-[30px] w-[38px]">
                        <Image src={'/Email.webp'} alt="Icon of an envelope used to show email addres" fill={true}/>
                    </div>
                </div>
                <Link className="border-b border-solid border-[#3F959B] lg:text-[13px]" href={'mailto:overberg@overberglighting.com'}>overberg@overberglighting.com</Link>
            </div>
            <div className="rounded-[30px] bg-white text-black py-[50px] px-5 flex flex-col justiyf-center items-center">
                <div className="flex flex-row gap-3 justify-center items-center">
                    <h2 className="text-[32px] md:text-[38px] lg:text-[40px] font-bold">Phone</h2>
                    <div className="relative h-[30px] w-[30px]">
                        <Image src={'/Phone.webp'} alt="Icon of an envelope used to show email addres" fill={true}/>
                    </div>
                </div>
                <Link className="border-b border-solid border-[#3F959B] lg:text-[13px]" href={'tel:0285143417'}>(028)514-3417</Link>
            </div>
            <div className="rounded-[30px] bg-white text-black py-[50px] px-5 flex flex-col justiyf-center items-center">
                <div className="flex flex-row gap-3 justify-center items-center">
                    <h2 className="text-[32px] md:text-[38px] lg:text-[40px] font-bold">Location</h2>
                    <div className="relative h-[30px] w-[25px]">
                        <Image src={'/Location (1).webp'} alt="Icon of an envelope used to show email addres" fill={true}/>
                    </div>
                </div>
                <Link target="_blank" className="border-b border-solid border-[#3F959B] lg:text-[13px]" href={'https://maps.google.com/maps/dir//Overberg+Lighting+%26+Electrical+Swellendam+79+Voortrek+St+Swellendam+6740/@-34.0221302,20.4411084,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x1dd3d191a9b08607:0x29120d738633ee8b'}>79 Voortrek street, Swellendam, 6740</Link>
            </div>

        </section>
        </>
     );
}
 
export default Contact;