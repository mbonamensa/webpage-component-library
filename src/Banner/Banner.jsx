import { PiWarningFill } from "react-icons/pi"
import { HiMiniXCircle } from "react-icons/hi2"
import { HiInformationCircle } from "react-icons/hi"
import { HiCheckCircle } from "react-icons/hi";

export default function Banner({children, style, subText}) {

    let bannerColor
    switch(style) {
        case "success":
        bannerColor = "green";
        break;
        case "warning":
        bannerColor = "yellow";
        break;
        case "error":
        bannerColor = "red";
        break;
        case "neutral":
        bannerColor = "blue";
        break;

    }

    let bannerIcon
    switch(style) {
        case "success":
        bannerIcon = <HiCheckCircle className="text-md fill-green-400" />;
        break;
        case "warning":
        bannerIcon = <PiWarningFill className="text-md fill-yellow-400" />;
        break;
        case "error":
        bannerIcon = <HiMiniXCircle className="text-md fill-red-400" />;
        break;
        case "neutral":
        bannerIcon = <HiInformationCircle className="text-md fill-blue-400" />;
        break;

    }

    return (
        <>
        <div className={`w-[35rem] bg-${bannerColor}-100 p-4 rounded-md`}>
            <div className={`flex gap-2`}>
                {bannerIcon}
            <div>
                <p className={`text-${bannerColor}-800 text-sm font-medium font-['Inter'] leading-tight`}>{children}</p>
                {subText && <p className={`text-sm text-${bannerColor}-700 mt-2`}>{subText}</p>}
            </div>
            </div>
        </div>
        </>
    )
}