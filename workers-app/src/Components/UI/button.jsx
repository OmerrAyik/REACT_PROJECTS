export const Button =(props)=>
{
    return(
        <button 
        className={`p-2 max-w-[7rem] w-full mx-auto border  text-lg bg-teal-700 text-white mt-2 ${props.className}`}
         type= {props.type || "button"}
        onClick={props.onClick}
        >{props.children}</button>
    )
}