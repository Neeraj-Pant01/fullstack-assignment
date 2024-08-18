import React from 'react'

const Card = ({c}) => {
  return (
    <div className='flex w-[380px] min-h-[140px] rounded-md flex-col bg-[#f7fafc] gap-2 py-4'>
      <div className="flex border-b-2 px-4 text-[rgba(0,0,0,0.9)] font-bold pb-2">
        {
          c.title
        }
      </div>
      <div className="flex px-4 text-[rgba(0,0,0,0.6)]">
        {
          c.description
        }
      </div>
    </div>
  )
}

export default Card
