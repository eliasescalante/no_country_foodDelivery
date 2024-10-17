import React from 'react'
import { FaCartPlus } from "react-icons/fa";

const header = () => {
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
                    <div className='hover:text-gray-400 cursor-pointer'>Find Foond</div>
                    <div>Categories</div>
                    <div>Restaurant</div>
                </div>
            </div>
            <div className='w-1/4  h-full'>
              <div className='flex  justify-end flex-wrap content-center h-full gap-6'>
                <div>Acount</div>
                <div><FaCartPlus /></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default header