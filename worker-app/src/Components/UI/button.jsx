import React from 'react'

const Button = (props) => {
  return (
    <div className={`max-w-[10rem] w-ful p-3 mx-auto w-full bg-teal-700 rounded-xl border text-white text-lg ${props.className}
      
    `} type={props.type || "button"}>
        {props.children}
    </div>
  )
}

export default Button;