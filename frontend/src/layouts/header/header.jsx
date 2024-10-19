import React,{useState} from 'react'
import { FaCartPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const header = () => {
  const [activeDiv, setActiveDiv] = useState(null);

 // Función que cambia el estado del div clickeado
 const handleClick = (index) => {
  setActiveDiv(index);
};

const getDivStyle = (index) => ({

  borderBottom:activeDiv === index ? '4px solid #EBF172' : '',
  cursor: 'pointer',

});


  return (
    <div className='h-14  px-10 text-xl'>
        <div className='flex w-full gap-2 h-full '>
            <div className='w-1/3 '>
              <div className='h-full w-40 bg-bgSecondary border-4 border-white flex items-center justify-center text'>
                FooDelivery
              </div>
            </div>
            <div className='w-2/3 flex justify-center flex-wrap content-center h-full'>
                <div className='flex gap-8'>
            
                    <Link to={`/`} style={getDivStyle(0)} onClick={() => handleClick(0)} className='hover:text-gray-400'>Find Foond</Link>
                    <Link to={`/categories`} style={getDivStyle(1)} onClick={() => handleClick(1)} className='hover:text-gray-400' >Categories</Link>
                    <Link to={`/restaurants`} style={getDivStyle(2)} onClick={() => handleClick(2)} className='hover:text-gray-400' >Restaurant</Link>
                
                </div>
            </div>
            <div className='w-1/4  h-full'>
              <div className='flex  justify-end flex-wrap content-center h-full gap-6'>
                <div style={getDivStyle(3)} onClick={() => handleClick(3)} className='hover:text-gray-400' >Acount</div>
                <div><FaCartPlus /></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default header