import Link from "next/link";

const CallToAction = () => {
    return ( 
        <section className="lg:py-[100px] flex flex-col justify-center items-center pt-[80px] pb-[0px]">
            <h3 className="py-4 lg:text-[48px] text-[30px] font-bold text-center">
                Ready to take on your next project?
            </h3>
            <p className="text-center text-[13px]">
                Limited availability! Book your project now for expert electrical solutions.
            </p>
            <div className="gap-5 flex flex-row py-8">
                <Link href={'tel:0285143417'}>
                    <button className="call-us-button">Call Now</button>
                </Link>
                <Link href={'mailto:overberg@overberglighting.co.za'}>
                    <button className="button border border-solid border-white">Email Us</button>
                </Link>
            </div>
        </section>
     );
}
 
export default CallToAction;