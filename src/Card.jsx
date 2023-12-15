import { HiOutlineCloudUpload } from "react-icons/hi"
import PropTypes from "prop-types"

export default function Card({
    title, 
    text, 
    bgColor, 
    titleColor, 
    textColor, 
    icon, 
    iconColor, 
    iconBgColor, 
    width, height
    }) {

    return (

        <div className={`w-[${width}] h-[${height}] p-8 bg-[${bgColor}] rounded-md hover:shadow relative`}>
            <div className="text-center flex flex-col items-center gap-4 mt-4">
                <div className={`w-12 h-12 bg-[${iconBgColor}] rounded-md absolute top-[-25px] inline-flex justify-center items-center shadow`}>
                    {icon ? icon : <HiOutlineCloudUpload className={`text-[${iconColor}] text-lg`} />}
                </div>
                <p className={`text-[${titleColor}] text-lg font-medium font-['Inter'] leading-7`}>{title}</p>
                <p className={`text-[${textColor}] text-base`}>{text}</p>
            </div>

        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string, 
    titleColor: PropTypes.string, 
    text: PropTypes.string, 
    textColor: PropTypes.string, 
    bgColor: PropTypes.string, 
    icon: PropTypes.element,
    iconColor: PropTypes.string, 
    iconBgColor: PropTypes.string,     
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}

Card.defaultProps = {
    title: "Card title", 
    titleColor: "#111827", 
    text: "Some card text idunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis", 
    textColor: "#6b7280", 
    bgColor: "#f8f8ff", 
    iconColor: "#f8f8ff", 
    iconBgColor: "#3b82f6",     
    height: "auto",
    width: "25rem"
}