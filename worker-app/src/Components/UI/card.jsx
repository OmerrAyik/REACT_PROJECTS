import React from 'react'

const Card = (props) => {
  return (
    <div className={`${props.className} mt-7 mx-auto p-7 bg-white border max-w-[40rem]  rounded-xl w-full`}>
        {props.children}
    </div>
  )
}

export default Card