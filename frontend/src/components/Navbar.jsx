import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 flex items-center justify-between bg-[black] py-3 px-36'>
      <div className="flex gap-4">
        <div className="flex border-r-2 text-[white] px-4">
            Abstract
        </div>
        <div className="flex text-[white]">
            Help Center
        </div>
      </div>
      <div className="flex border-2 px-3 py-1 rounded-md mr-48 cursor-pointer text-[white]">
        submit a request
      </div>
    </div>
  )
}

export default Navbar
