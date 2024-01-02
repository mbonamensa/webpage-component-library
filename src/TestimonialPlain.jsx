import logo from "./assets/logo.svg"
import pattern from "./assets/pattern.png"
import { BiSolidQuoteAltLeft } from "react-icons/bi"

export default function TestimonialPlain() {
    return(
        <div className="md:py-16 md:px-36 relative border flex flex-col gap-4 px-3 py-14">
            <div className="self-center">
                <img src={logo} alt="logo" />
            </div>
            <div className="font-['Inter'] md:text-center">
                <p className="text-lg font-medium mt-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. 
                    Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. Numquam corrupti in laborum sed rerum et corporis."
                </p>
                <div className="mt-4 z-50 relative">
                    <p className="text-base font-bold">May Andersons</p>
                    <p className="text-sm text-gray-500 font-medium">Workcation, CTO</p>
                </div>
            </div>
            <div className="absolute left-[0] bottom-[-92px] md:bottom-[0] w-40 z-0 md:pr-8 lg:pr-12">
                <img src={pattern} alt="pattern" />
            </div>
        </div>
    )
}