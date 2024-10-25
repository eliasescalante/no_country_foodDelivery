import React from 'react'

const CardProductRestaurant = ({data}) => {
  
  
  
    console.log(data)
    
  
    return (
    <div className='border-solid w-80 border-b-4 border-bgSecondary pb-4 cursor-pointer hover:scale-105 duration-500 shadow-xl'> 
        <div className='w-full'>
            <div className='flex w-full gap-2'>
                <div className='w-1/2 h-28' >
                    <div className='w-full h-full' >
                        <img src={data.imageUrl} className='w-100 h-100 object-cover rounded-md' alt="" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <div>{data.name}</div>
                    <div>info</div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardProductRestaurant