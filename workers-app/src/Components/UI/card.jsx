export const Card = (props)=>
{
    return(
        <div className={`bg-white rounded-xl p-5 max-w-[40rem] w-full mx-auto border ${props.className}`}>
            {props.children}
        </div>
    )
}