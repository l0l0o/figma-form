type ButtonProps = {
    text: string,
    bg_color?: string,
    text_color?: string,
    onClick: () => void,
}

const Button = ({text, bg_color = "", text_color, onClick}: ButtonProps) => {
    
    const handleClick = () => {
        onClick();
    }

    return ( 
        <button onClick={handleClick} className={`p-4 ${bg_color} ${text_color} rounded-md text-sm`}>{text}</button>
     );
}
 
export default Button;