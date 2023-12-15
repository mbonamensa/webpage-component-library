import PropTypes from "prop-types"

export default function Badge({
    children, 
    color, 
    shape, 
    textColor, 
    bgColor,
    width,
    height
}) {

    const colorStyles = {
        gray: "bg-gray-100 text-gray-800",
        red: "bg-red-100 text-red-800",
        yellow: "bg-yellow-100 text-yellow-800",
        green: "bg-green-100 text-green-800",
        blue: "bg-blue-100 text-blue-800",
        indigo: "bg-indigo-100 text-indigo-800",
        purple: "bg-purple-100 text-purple-800",
        pink: "bg-pink-100 text-pink-800",
    }

    const shapeStyles = {
        roundedSquare: "rounded-md",
        pill: "rounded-full",
    }

    function chosenStyles() {
        let styles = ""

        const shapeStylesArr = Object.keys(shapeStyles)
        const colorStylesArr = Object.keys(colorStyles)

        shapeStylesArr.forEach(shapeStyle => {
            shape === shapeStyle ? styles += (shapeStyles[shape]) : undefined
        })

        colorStylesArr.forEach(colorStyle => {
            color === colorStyle ? styles += ` ${(colorStyles[color])}` : undefined
        })

        return styles
    }

    return (
        <div 
            className={`
                w-[${width}]
                h-[${height}]  
                ${color}
                ${shape}
                p-2 
                text-center 
                font-semibold 
                font-['Inter']
                ${chosenStyles()} 
                ${textColor} 
                ${bgColor} 
            `.trim()}
        >
            {children}
        </div>
    )
}

Badge.propTypes = {
    children: PropTypes.string, 
    color: PropTypes.string, 
    shape: PropTypes.string, 
    textColor: PropTypes.string, 
    bgColor: PropTypes.string,
    width: PropTypes.number || PropTypes.string,
    height: PropTypes.number || PropTypes.string
}

Badge.defaultProps = {
    children: "Badge", 
    label: "Badge",
    color: "bg-gray-100 text-gray-800", 
    shape: "rounded-md", 
    textColor: "", 
    bgColor: "",
    width: "6rem",
    height: "auto"
}
