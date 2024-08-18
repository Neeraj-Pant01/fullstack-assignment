import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-[black] justify-center px-32 py-10'>
      <div className="flex flex-col flex-1">
        <b className='text-white text-xl mb-2'>Abstract</b>
        <span className='text-[lightgrey]'>Branches</span>
      </div>

      <div className="flex flex-col flex-1">
        <b className='text-white text-xl mb-2'>Resources</b>
        <span className='text-[lightgrey]'>Twitter</span>
        <span className='text-[lightgrey]'>LinkedIn</span>
        <span className='text-[lightgrey]'>Facebook</span>
        <span className='text-[lightgrey]'>Dribble</span>
        <span className='text-[lightgrey]'>Podcast</span>
      </div>

      <div className="flex flex-col flex-1">
        <b className='text-white text-xl mb-2'>Community</b>
        <span className='text-[lightgrey]'>Blog</span>
        <span className='text-[lightgrey]'>Help Center</span>
        <span className='text-[lightgrey]'>Release Notes</span>
        <span className='text-[lightgrey]'>Status</span>
      </div>

      <div className="flex flex-col flex-1">
        <b className='text-white text-xl mb-2'>Company</b>
        <span className='text-[lightgrey]'>About Us</span>
        <span className='text-[lightgrey]'>Careers</span>
        <span className='text-[lightgrey]'>Legal</span>

        <div className="flex flex-col text-[white]">
          <b className='mt-4 text-[white]'>Contact Us</b>
          <span className='text-[lightgrey]'>info@abstract.com</span>
        </div>
      </div>
      <div className="flex flex-col text-[white] justify-end flex-1">
        <span className='mt-5'>@copyright 2022</span>
        <p>Abstract Studio design , Inc <br></br>All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
