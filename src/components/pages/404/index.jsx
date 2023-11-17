import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-12">
        <img src="/not_found.svg" alt="Not Found Illustration" className="w-1/2"/>
        <p className="text-3xl mt-12 font-semibold text-slate-700">
            That page doesn't Exists.
        </p>
        <p className="text-xl">
            Back to our Main Page 
            <Link to={"/"} className="ml-1 text-blue-500 font-bold underline">Here.</Link> 
        </p>
    </div>
  )
}

export default NotFound