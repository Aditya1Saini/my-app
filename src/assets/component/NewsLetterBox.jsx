import React, { useState } from 'react'
 const onSubmitHandler =(event)=>
 {
    event.preventDefault();// it pervent from not reloading the webpage while submit button isc clicked 
 }
const NewsLetterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-700'>Subscribe now & get 20% off</p>
        <p className='text-gray-500 mt-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut assumenda blanditiis quo voluptates totam facilis quaerat officiis ratione quis! Obcaecati!
        </p>
        <form  onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex  items-center gap-3 mx-auto my-7 border pl-3 ' action="">
            <input  className ='w-full sm:flex-1 py-2 rounded-2xl outline-none text-center' type="email"  placeholder='Enter your email ..@Ecommerce.com' required/>
        <button type='submit' className='bg-red-600 text-white text-xs px-10 py-3 rounded-3xl'>SUSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
