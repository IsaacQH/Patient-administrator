import { useState, useEffect } from "react"

const Error = ({message}) => {
    
  return (
    <div className=" text-white bg-red-600 p-3 mb-5 rounded-md text-center font-bold">
        <p>{message}</p>
    </div>
  )
}

export default Error