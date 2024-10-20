type ButtonProps = {
    text: string,
    bg_color?: string,
    text_color?: string,
    // onClick?: function,
}

const Button = ({text, bg_color = "", text_color}: ButtonProps) => {
    return ( 
        <button className={`p-4 ${bg_color} ${text_color} rounded-md text-sm`}>{text}</button>
     );
}
 
export default Button;