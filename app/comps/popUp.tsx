import Link from "next/link";

const ServicesPopUp = () => {
    const servicesList = [
        {name: 'CCTV & Security', url: '/services/CCTV_&_Security'},
        {name: 'Lighting & Electrical', url: '/services/Lighting_&_Electrical'},
        {name: 'Solar Systems', url: '/services/Solar_Systems'},
        {name: 'Gates & Garages', url: '/services/Gates_&_Garages'},
        {name: 'Dstv', url: '/services/Dstv'},
        {name: 'Air Conditioning', url: '/services/Air_Conditioning'},
        {name: 'Fireplaces', url: '/services/Fireplaces'},
    ]
    return ( 
        <div className="absolute bg-white text-black mt-6 py-3 px-3">
            <ul className="grid grid-cols-3 gap-3">
                {
                    servicesList.map(item => {
                        return (
                            <Link className="hover:border-b hover:border-b-[#3F959B]" href={item.url} key={item.name}>{item.name}</Link>
                        )
                    })
                }
            </ul>
        </div>
     );
}
 
export default ServicesPopUp;