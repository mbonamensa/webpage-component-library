import imgDefault from "./assets/testimonial-image.jpg"
import { BiSolidQuoteAltLeft } from "react-icons/bi"

export default function Testimonial() {
    return(
        <div className=" md:flex md:items-center md:py-[30px] relative">
            <div className="h-[100px] bg-white md:h-0"></div>
            <div className="md:h-full md:max-h-none md:w-auto absolute md:left-[30px] top-[0] w-full h-[40%] max-h-[220px] overflow-hidden">
                <img className="md:p-0 p-3 text-center w-full h-full object-cover rounded-3xl" src={imgDefault}/>
            </div>
            <div className="bg-blue-800 md:py-10 md:pl-[310px] pt-32 px-3 pb-10 text-white font-['Inter']">
                <BiSolidQuoteAltLeft className="text-4xl text-gray-300 opacity-[0.5]"/>
                <p className="text-lg font-medium mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. 
                    Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                </p>
                <div className="mt-4">
                    <p className="text-base font-bold">May Andersons</p>
                    <p className="text-sm font-medium">Workcation, CTO</p>
                </div>
            </div>
        </div>
    )
}