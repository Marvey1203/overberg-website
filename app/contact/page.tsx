import Link from "next/link";
import Image from "next/image"

const Contact = () => {
    return ( 
        <><section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-[130px] pb-[50px] lg:py-[150px]">
            <div>
                <h1 className="lg:text-[48px] font-bold text-[30px]">Contact Us</h1>
                <p className="mb-5">Let’s electrify your space together. Reach out now and spark a partnership with expert electricians who care.</p>
                <form className="grid grid-cols-1 gap-4">
                    <label htmlFor="name" className="text-lg font-normal">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3F959B] bg-black focus:bg-black"
                        required />
                    <label htmlFor="email" className="text-lg font-normal">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#3F959B] bg-black focus:bg-black"
                        required />
                    <label htmlFor="message" className="text-lg font-normal">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Type your message"
                        className="border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#3F959B] bg-black focus:bg-black"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className=" w-[150px] bg-white hover:bg-[#3F959B] text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8473071375665!2d20.43853347571505!3d-34.02213017316819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd3d191a9b08607%3A0x29120d738633ee8b!2sOverberg%20Lighting%20%26%20Electrical%20Swellendam!5e0!3m2!1sen!2sza!4v1712065191718!5m2!1sen!2sza" width="600" height="450" className="border-0 w-full h-full " ></iframe>
        </section>
        <section className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4 ">
            <div className="rounded-[30px] bg-white text-black py-[50px] px-5 flex flex-col justiyf-center items-center">
                <div className="flex flex-row gap-3 justify-center items-center">
                    <h2 className="text-[32px] md:text-[38px] lg:text-[40px] font-bold">Email</h2>
                    <div className="relative h-[30px] w-[30px]">
                        <Image src={'/Email.svg'} alt="Icon of an envelope used to show email addres" fill={true}/>
                    </div>
                </div>
                <Link className="border-b border-solid border-[#3F959B]" href={'mailto:overberg@overberglighting.com'}>overberg@overberglighting.com</Link>
            </div>
            <div className="rounded-[30px] bg-white text-black py-[50px] px-5 flex flex-col justiyf-center items-center">
                <div className="flex flex-row gap-3 justify-center items-center">
                    <h2 className="text-[32px] md:text-[38px] lg:text-[40px] font-bold">Phone</h2>
                    <div className="relative h-[30px] w-[30px]">
                        <Image src={'/Phone.svg'} alt="Icon of an envelope used to show email addres" fill={true}/>
                    </div>
                </div>
                <Link className="border-b border-solid border-[#3F959B]" href={'tel:0285143417'}>(028)514-3417</Link>
            </div>
            <div className="rounded-[30px] bg-white text-black py-[50px] px-5 flex flex-col justiyf-center items-center">
                <div className="flex flex-row gap-3 justify-center items-center">
                    <h2 className="text-[32px] md:text-[38px] lg:text-[40px] font-bold">Location</h2>
                    <div className="relative h-[30px] w-[30px]">
                        <Image src={'/Location.svg'} alt="Icon of an envelope used to show email addres" fill={true}/>
                    </div>
                </div>
                <Link target="_blank" className="border-b border-solid border-[#3F959B]" href={'https://maps.google.com/maps/dir//Overberg+Lighting+%26+Electrical+Swellendam+79+Voortrek+St+Swellendam+6740/@-34.0221302,20.4411084,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x1dd3d191a9b08607:0x29120d738633ee8b'}>79 Voortrek street, Swellendam, 6740</Link>
            </div>

        </section>
        </>
     );
}
 
export default Contact;