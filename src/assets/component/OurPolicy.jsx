import React from 'react'
import { assets } from '../assets'

const OurPolicy = () => {
  return (
    
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sx:text-sm md:text-base text-gray-700'>
        
        <div><img src={assets.exchange}  className='w-20 m-auto mb-5'alt="" />
      <p className='font-semibold'> Easy Exchange policy</p>
            <p className='text-gray-400'>We offer hassel free exchange policy</p>
            </div>
            <div>
        <img src={assets.returnIcon}  className='w-20 m-auto mb-5'alt="" />
      <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 Days free return policy</p>
            </div>
            <div>
            <img src={assets.support} className='w-20 m-auto mb-5'alt="" />
      <p className='font-semibold'>Best customer Support</p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
            </div>
    </div>
  )
}
export default OurPolicy
