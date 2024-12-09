import React from 'react'

const SectionNames = ({text}) => {
  return (
    <div className="flex items-center text-[#DB4444] space-x-3 font-semibold">
    <span className="border bg-red-500 border-[#DB4444] h-10 w-5 rounded-sm"></span>
    <span>{text}</span>


  </div>
  )
}

export default SectionNames
