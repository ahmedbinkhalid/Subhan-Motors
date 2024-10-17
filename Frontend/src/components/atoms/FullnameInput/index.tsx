import React from 'react'

export const FullnameInput : React.FC = () => {
  return (
    <div className="py-2 px-4 border-[0.5px] border-[#37474F] rounded-md w-full h-full">
      <input
        type="text"
        placeholder="Full Name"
        className="text-base w-full placeholder:text-sm outline-none placeholder:opacity-75 bg-transparent"
        required
      />
    </div>
  )
}
