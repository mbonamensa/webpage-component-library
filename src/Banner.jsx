import { PiWarningFill } from "react-icons/pi"
import { HiMiniXCircle } from "react-icons/hi2"
import { HiInformationCircle } from "react-icons/hi"
import { HiCheckCircle } from "react-icons/hi"
import PropTypes from "prop-types"

export default function Banner({
    children, 
    status, 
    subText, 
    height, 
    width
    }) {

    let bannerMainTextColor
    switch(status) {
        case "success":
        bannerMainTextColor = "text-green-800"
        break
        case "warning":
        bannerMainTextColor = "text-yellow-800"
        break
        case "error":
        bannerMainTextColor = "text-red-800"
        break
        case "neutral":
        bannerMainTextColor = "text-blue-800"
        break

    }

    let bannerSubTextColor
    switch(status) {
        case "success":
        bannerSubTextColor = "text-green-700"
        break
        case "warning":
        bannerSubTextColor = "text-yellow-700"
        break
        case "error":
        bannerSubTextColor = "text-red-700"
        break
        case "neutral":
        bannerSubTextColor = "text-blue-700"
        break

    }

    let bannerBgColor
    switch(status) {
        case "success":
        bannerBgColor = "bg-green-100"
        break
        case "warning":
        bannerBgColor = "bg-yellow-100"
        break
        case "error":
        bannerBgColor = "bg-red-100"
        break
        case "neutral":
        bannerBgColor = "bg-blue-100"
        break

    }

    let bannerIcon
    switch(status) {
        case "success":
        bannerIcon = <HiCheckCircle className="text-md fill-green-400" />
        break;
        case "warning":
        bannerIcon = <PiWarningFill className="text-md fill-yellow-400" />
        break;
        case "error":
        bannerIcon = <HiMiniXCircle className="text-md fill-red-400" />
        break;
        case "neutral":
        bannerIcon = <HiInformationCircle className="text-md fill-blue-400" />
        break;

    }

    return (
        <>
        <div className={`w-[${width}] h-[${height}] ${bannerBgColor} p-4 rounded-md`}>
            <div className={`flex gap-2`}>
                {bannerIcon}
            <div>
                <p className={`${bannerMainTextColor} text-sm font-medium font-['Inter'] leading-tight`}>{children}</p>
                {subText && <p className={`text-sm ${bannerSubTextColor} mt-2`}>{subText}</p>}
            </div>
            </div>
        </div>
        </>
    )
}

Banner.propTypes = {
    children: PropTypes.string, 
    status: PropTypes.string, 
    subText: PropTypes.string, 
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

Banner.defaultProps = {
    children: "Banner", 
    status: "success", 
    subText: null, 
    height: "auto",
    width: "35rem"
}