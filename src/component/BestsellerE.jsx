import React,{ useContext ,useEffect,useState} from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import Productitems from './Productitems';
const BestsellerE = () => {
    const {products} = useContext(ShopContext);
    const [bestseller,setBestseller] = useState([]);
    useEffect(()=>
    {
        const bestProduct = products.filter((items)=>(items.bestseller));
        setBestseller (bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8">
            <Title text1={'Best'} text2={'Seller'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ullam aperiam eaque nostrum placeat cupiditate voluptatum adipisci mollitia veritatis cum impedit natus, nemo eum quisquam iste deleniti expedita laborum. Odio doloremque at sed soluta assumenda, blanditiis beatae nisi, nobis explicabo ratione consequuntur veniam debitis reiciendis! Explicabo esse placeat aut qui!
            </p>
        </div>
        <div className='grid grid-col-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {bestseller.map((items,index)=>(
            <Productitems key={index} id ={ items._id} image={items.image}  price={items.price}/>
          ))}
        </div>
      
    </div>
  )
}

export default BestsellerE
