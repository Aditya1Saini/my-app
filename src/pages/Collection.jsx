import React, { useContext, useEffect, useState } from 'react';
import {ShopContext} from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../component/Title';
import Productitems from '../component/Productitems';

const Collection = () => {
const {products} =useContext(ShopContext);
  const [showFilter, setshowFilter]=useState(false);
  const[filterProducts,setfilterProducts]= useState([]);
  const [category,setcategory]=useState([]);
  const[subCategory,setsubCategory]=useState([]);
  
  useEffect(()=>{
    setfilterProducts(products);
  },[])
  useEffect(()=>
  {
   console.log(category);

  },[category])
  

  const toggleCategory=(e)=>
  {
    if(category.includes(e.target.value))
    {
      setcategory(prev=>prev.filter(items  => items !== e.target.value))
    }
    else{
      // ... is called spread operartor to add new entry
      setcategory([prev=>[...[prev,e.target.value]]])

    }
  }
  const toggleSubCategory=(e)=>
  {
    if(subCategory.includes(e.target.value))
    {
      setsubCategory(prev=>[...prev,e.target.value])
    }
    else{
      setsubCategory(prev=>[...prev,e.target.value])
    }
  }




  return (
    <div className=' flex flex-col sm:flex-row gap-10 pt-10 border-t'>

      {/*  Filter options  */}
      <div  className='min-w-60'>
        {/* !showfilter is used because when the filter  is true it will make it false vice versa */}
        <p onClick={()=> setshowFilter(!showFilter)} className=' my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <img src={assets.dropdown} className={`h-3 sm:hidden ${showFilter ?'rotate-90' :''}`} alt="" />
        {/* Category filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
        {/* Sub category filter */}
        <div className={`border border-gray-400 pl-5 py-3 my-6 ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Top wear'} />Top wear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Bottom wear'} />Bottom wear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'Winter wear'} />Winter wear
            </p>
          </div>
        </div>
      </div>
        {/* Right side */}
        <  div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={' COLLECTIONS'} />
            {/* SORT FILTER */}
            <select className='border-2 border-gray-400 text-sm px-2'>
              <option value="relevent">Sort by: Relevant</option>
              <option value="low-high">Sort by:Low-High</option>
              <option value="high-low"> Sort by:High-Low</option>
            </select>
          </div>
          {/* Map Products */}
          <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((items,index)=>(
                <Productitems key={index} id ={ items._id} image={items.image} name={items.name} price={items.price}/>

              ))
            }

          </div>
        </div>

    </div>
  )
}

export default Collection
