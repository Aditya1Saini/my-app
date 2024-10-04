import React from 'react'
import { assets } from '../assets'

const Footer = () => {
  return (
    <div>
        <div className='flex  border-red-800 flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div className=''>
        <img src={assets.Logo}  className='mb-4 w-40'alt="" />
      <p className='w-full md:w-2/3 text-gray-600'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae pariatur doloribus quo optio, natus nisi repellendus commodi. Hic illum iure quibusdam similique delectus dolor quae aliquam, sequi mollitia minima debitis consequuntur ex fugit aperiam animi reprehenderit numquam eius quia dolore facere qui! Molestias soluta eius aspernatur aperiam, exercitationem blanditiis praesentium sapiente consequuntur qui ea dolorum! Aspernatur autem maiores suscipit.

      </p>
      </div>
      <div>
        <p className='text-xl font-medium mb-4'>
            COMPANY
        </p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us </li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-4'>GET IN TOUCH </p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-121-456-7585</li>
            <li>E_comerce@gmail.com</li>
        </ul>
      </div>
    </div>
    <div>
        <hr />
        <p className=' py-5 text-sm text-center'> Copyright 2025@E-commerce.com -All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer
