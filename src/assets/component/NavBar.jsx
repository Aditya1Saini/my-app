import React, { useState } from 'react'
import { assets } from '../assets'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import { assets } from '../../assets'
const NavBar = (props) => {
  const [visible,setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between  py-5 px-5 font-small'>
      <Link to='/'><p className=' flex  font-medium justify-around text-3xl  '>{props.title}</p></Link>
      <ul className='hidden sm:flex gap-3 text-sm text-gray-800'>
        <NavLink to='/' className=' flex flex-col item-center gap-1   '>
        <p>HOME</p>
        <hr className='w-15 border-none h-[1.5px] bg-black hidden' />
        </NavLink> 
        <NavLink to='/Collection' className=' flex flex-col item-center gap-1 '>
        <p>COLLECTION</p>
        <hr className='w-15 border-none h-[1.5px] bg-black hidden' />
        </NavLink> 
        <NavLink to='/About' className=' flex flex-col item-center gap-1 '>
        <p>ABOUT</p>
        <hr className='w-15 border-none h-[1.5px] bg-black hidden' />
        </NavLink> 
        <NavLink to='/Contact' className=' flex flex-col item-center gap-1 '>
        <p>CONTACT</p>
        <hr className='w-15 border-none h-[1.5px] bg-black hidden' />
        </NavLink> 
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.SearchIcon} className='w-7  min-w-7 cursor-pointer' alt="" />
        <div className='group relative'>
          <img src={assets.SignIn}  className='w-7 min-w-7  cursor-pointer' alt="" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0  pt-3'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
        <img src={assets.Cart} className='w-8 min-w-7' alt="" />
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <img  onClick={()=>setVisible(true)} src={assets.menuIcon} className='w-7 cursor-pointer sm:hidden'alt="" />
      </div>
        {/* sidebar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${ visible ? 'w-full' :'w-0'}`}>
        <div className=" flex flex-col tex-grey-600">
        <div className=" flex items-center gap-4 p-3">
    <img   onClick={()=> setVisible(false)} className='h-4 cursor-pointer ' src={assets.BackIcon} alt="" />
        <p className='cursor-pointer'>Back</p>
        </div>
        {/* setvisible is set to false because we have to close the hamburger menu   */}
      <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
      <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/Collection'>COLLECTION</NavLink>
      <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/About'>ABOUT</NavLink>
      <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/Contact'>CONTACT</NavLink>
        </div>
        </div>
    </div>
  )
}

export default NavBar
