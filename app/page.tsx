import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";


export default function Home() {
  return (
   <>
    <section className="z-0 text-white flex justify-center items-center h-[550px] lg:h-[500px] xl:h-[900px]">
      <Image priority className="mx-auto absolute top-0 z-0" src={"/HeroBackground.webp"} alt="Dark background with spotlight at the top." width={1100} height={733} />
      <div className="max-w-[900px] mx-auto absolute flex justify-center items-center flex-col py-10">
        <h1 className="lg:text-6xl text-[32px] font-semibold text-center">
          Solving electrical issues, restoring peace of mind.
        </h1>
        <p className="lg:w-[422px] mx-5 text-center my-4">
          Overberg Lighting & Electrical is here to safely resolve all your electrical needs
        </p>
        <div className=" flex gap-[13px]">
          <Link href={'tel:0285143417'}>
            <button className="call-us-button">Call Us Now</button>
          </Link>
          <Link href={'/services'}>
            <button className="px-[18px] py-[8px] border border-white border-solid">Our Services</button>
          </Link>
        </div>
      </div>
    </section>
    <section className="grid lg:grid-cols-3 grid-flow-row gap-10 w-full lg:h-full lg:mb-40 mb-0 md:py-10 px-10">
      <div className="lg:col-span-2 h-[380px] lg:h-[600px] rounded-[30px] flex justify-center items-center relative">
        <Image priority src={'/Rectangle 3.webp'} alt="Background image for electrician" fill={true} />
        <div className="absolute z-10 text-white lg:w-[70%] px-8 md:px-4">
          <p>Reliable</p>
          <h2 className="lg:text-[48px] text-[20px] font-bold leading-snug">Providing Quality Electrical Solutions in Swellendam</h2>
          <p className="mt-3 text-[13px]">
            At Overberg Lighting & Electrical, we are dedicated to delivering top-notch electrical services to the community of Swellendam, Overberg. With our expertise and commitment to excellence, we strive to meet and exceed the expectations of our customers.
          </p>        
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-10 h-[600px]">
        <div className="w-[100%] bg-white rounded-[30px] flex flex-col justify-center px-8 h-[350px] text-black">
          <h3 className="text-[20px] md:text-[16px] font-bold">Accredited Installers</h3>
          <p className="py-5 text-[13px]">
            We specialize in DSTV, CCTV, Security Systems, Gates & Garages, Solar Systems, Lighting & Electrical, and air conditioners.
          </p>
          <div className="w-full ">
            <Link href={'/about'}>
              <button className="grid-button">About Us</button>
            </Link>
          </div>
          
        </div>
        <div className="w-[100%] bg-white rounded-[30px] flex flex-col justify-center px-8 h-[350px] text-black">
        <h3 className="text-[20px] md:text-[16px] font-bold">Quality Service</h3>
          <p className="py-5 text-[13px]">
            Our team of experts is committed to providing exceptional service and reliable solutions.          
          </p>
          <div className="w-full ">
            <Link href={'/services'}>
              <button className="grid-button">Our Services</button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
    <section className="grid lg:grid-cols-2 grid-cols-1 lg:py-[150px] py-[50px] gap-10 px-10">
      <div className="flex flex-col justify-center items-start my-10">
        <h2 className="text-[30px] leading-tight font-bold py-4">
          Choose Accredited Installers for Reliable Security and Electrical Solutions
        </h2>
        <p className="w-full mb-4 text-[13px]">
          When it comes to your home or business security and electrical needs, trust the expertise of accredited installers. With Overberg Lighting & Electrical, you can expect top-quality service, advanced technology, and peace of mind.
        </p>
        <div className="w-full flex flex-row justify-start gap-5">
          <Link href={'/about'}>
            <button className="button border border-white border-solid">About Us</button>
          </Link>
          <Link href={'/services'}>
            <button className="button">Our Services</button>
          </Link>
        </div>

      </div>
      <Image loading="lazy" className="rounded-[30px]" src={"/Accredited installers image.webp"} alt={"Choose Accredited Installers for Reliable Security and Electrical Solutions image"} height={640} width={616}/>
    </section>
    <section className="grid lg:grid-cols-2 grid-cols-1 lg:py-[150px] py-[50px] gap-10 px-10">
       <Image loading="lazy" className="rounded-[30px]" src={"/ElectricalTools.webp"} alt="electrical tools on table" height={640} width={616}/>

      <div className="flex flex-col justify-center gap-5 w-full order-first lg:order-last">
        <div>
          <h3 className="my-2 font-bold text-[26px]">Accredited Installation Services</h3>
          <p className="text-[13px]">We offer a wide range of installation services including DSTV, CCTV, Solar Systems, Gates & Garages, Lighting & Electrical, and Air Conditioning. Our team of experts ensures professional and reliable installations to meet your needs.</p>
        </div>
        <div>
          <h3 className="my-2 font-bold text-[26px]">Professional Electrical Wiring</h3>
          <p className="text-[13px]">We offer expert electrical wiring services for both residential and commercial properties. Our team of accredited electricians ensures that your electrical systems are installed safely and efficiently, meeting all necessary regulations and standards. Whether you need wiring for a new construction project or require upgrades and repairs for an existing property, we have the expertise to handle it</p>
        </div>
        <div>
          <h3 className="my-2 font-bold text-[26px]">Efficient Repair Services</h3>
          <p className="text-[13px]">If you encounter any electrical issues with your installed systems, our skilled technicians are here to help. We offer efficient repair services to address a wide range of electrical problems and get your systems up and running smoothly again, minimizing downtime and inconvenience.</p>
        </div>

      </div>

    </section>
    <section className="w-full lg:py-[150px] py-[50px]  px-8">
      <div className="flex lg:flex-row flex-col lg:gap-5 gap-2 mx-auto border border-solid border-[#3F959B] rounded-[30px] py-5 px-5">
        <div>
          <h2 className="text-[30px] font-bold leading-tight pb-3">Let us help you transform your space with our professional electrical services.</h2>
          <p className="text-[13px]">Contact us today for a consultation or installation</p>
        </div>
        <div className="flex flex-row gap-5 justify-center items-center">
          <Link href={'/contact'}>
            <button className="button bg-white text-black text-nowrap">Contact Us</button>
          </Link>
          <Link href={'/services'}>
            <button className="button border border-solid border-white text-nowrap">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
    <section className="lg:py-[150px] py-[50px] px-8">
      <div className="flex flex-col gap-1 lg:w-[770px] py-5">
        <p>Quality</p>
        <h2 className="text-[30px] leading-tight font-bold">Your One-Stop Shop for Electrical Supplies</h2>
        <p className="text-[13px]">At Overberg Lighting & Electrical, we provide a wide range of high-quality electrical supplies. Visit our location to find everything you need for your electrical projects.</p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
        <div className="py-16 px-8 bg-white text-black rounded-[30px] gap-2 flex flex-col">
          <div>
            <Image loading="lazy" alt="Expert Advice and Friendly Service icon" src={'/friendlyFace.webp'} height={59} width={48}/>
            <h3 className="text-[26px] font-bold leading-tight">Expert Advice and Friendly Service</h3>
          </div>
          <p className="text-[13px]">Our knowledgeable staff is here to assist you with any questions or concerns you may have.</p>
        </div>
        <div className="py-16 px-8 bg-white text-black rounded-[30px] gap-2 flex flex-col">
          <div>
            <Image loading="lazy" alt="Competitive Prices on Top Brands icon" src={'/topBrands.webp'} height={59} width={48}/>
            <h3 className="text-[26px] font-bold leading-tight">Competitive Prices on Top Brands</h3>
          </div>
          <p className="text-[13px]">We offer competitive prices on a wide selection of top-quality electrical products.</p>
        </div>
        <div className="py-16 px-8 bg-white text-black rounded-[30px] gap-2 flex flex-col">
          <div>
            <Image loading="lazy" alt="Convenient Location and Easy Parking icon" src={'/location.webp'} height={59} width={48}/>
            <h3 className="text-[26px] font-bold leading-tight">Convenient Location and Easy Parking</h3>
          </div>
          <p className="text-[13px]">We offer competitive prices on a wide selection of top-quality electrical products.</p>
        </div>
      </div>
      <div className="gap-5 py-5">
        <Link href={'/contact'}>
          <button className="button border border-solid border-white">Contact Us</button>
        </Link>
        <Link target="_blank" href={'https://maps.google.com/maps/dir//Overberg+Lighting+%26+Electrical+Swellendam+79+Voortrek+St+Swellendam+6740/@-34.0221302,20.4411084,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x1dd3d191a9b08607:0x29120d738633ee8b'}>
          <button className="button">Get Directions</button>
        </Link>
      </div>
    </section>
    <section className="py-10 px-8">
      <Carousel className="w-[90%] mx-auto">
        <CarouselContent>
          <CarouselItem>
            <div className="flex flex-col justify-center items-center lg:py-[150px] py-[50px]">
              <p className="lg:w-[770px] pb-3 text-[13px] text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."</p>
              <p className="font-bold">
                Name Surname
              </p>
              <p>
                Position, Company name
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col justify-center items-center lg:py-[150px] py-[50px]">
              <p className="lg:w-[770px] pb-3 text-[13px] text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."</p>
              <p>
                Name Surname
              </p>
              <p className="font-bold">
                Position, Company name
              </p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col justify-center items-center lg:py-[150px] py-[50px]">
              <p className="lg:w-[770px] pb-3 text-[13px] text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."</p>
              <p>
                Name Surname
              </p>
              <p className="font-bold">
                Position, Company name
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-black"/>
        <CarouselNext className="bg-black"/>
      </Carousel>
    </section>
    <section className="py-10 px-8">
      <div>
        <div className="py-12">
          <p>Reliable</p>
          <h3 className="font-bold lg:text-[48px] text-[26px] py-1">Contact Details</h3>
          <p className="text-[13px]">Need expert electrical service? Contact us today!</p>
        </div>
        <div className="w-full justify-between flex lg:flex-row flex-col">
          <div className="lg:w-[30%] flex flex-col justify-center gap-8 w-full">
            <div>
              <Image loading="lazy" alt="Icon of an envelope for email" width={27} height={21.5} src={'/VectorEmailIcon.webp'}/>
              <p className="font-bold py-3">Email</p>
              <Link href={'mailto:overberg@overberglighting.co.za'} className="border-b hover:border-b-[#3F959B] w-fit hover:cursor-pointer">overberg@overberglighting.co.za </Link>
            </div>            
            <div>
              <Image loading="lazy" alt="Icon of a phone" width={24} height={24} src={'/VectorPhoneIcon.webp'}/>
              <p className="font-bold py-3">Phone</p>
              <Link href={'tel:0285143417'} className="border-b hover:border-b-[#3F959B] w-fit hover:cursor-pointer">(028) 514-3417</Link>
            </div>            
            <div>
              <Image loading="lazy" alt="Location icon" width={20} height={27} src={'/VectorLocationIcon.webp'}/>
              <p className="font-bold py-3">Location</p>
              <Link target="_blank" href={'https://maps.google.com/maps/dir//Overberg+Lighting+%26+Electrical+Swellendam+79+Voortrek+St+Swellendam+6740/@-34.0221302,20.4411084,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x1dd3d191a9b08607:0x29120d738633ee8b'} className="border-b hover:border-b-[#3F959B] w-fit hover:cursor-pointer">79 Voortrek street, Swellendam 6740</Link>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8473071375665!2d20.43853347571505!3d-34.02213017316819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd3d191a9b08607%3A0x29120d738633ee8b!2sOverberg%20Lighting%20%26%20Electrical%20Swellendam!5e0!3m2!1sen!2sza!4v1712065191718!5m2!1sen!2sza" width="600" height="450" className="border-0 lg:w-[60%] w-full pt-10 lg:pt-0"  loading="lazy" ></iframe>

        </div>
      </div>
    </section>
    </>
  );
}
