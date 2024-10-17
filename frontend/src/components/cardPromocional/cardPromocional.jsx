import React from 'react'

const CardPromocional = () => {
  return (
    <div className='bg-black w-96 h-48 rounded p-4'>
        <div className='flex flex-col justify-items-center justify-center items-center w-full h-full gap-4'>
            <div className='flex text-5xl font-bold'>
                <div className='rounded-full bg-bgSecondary p-0.5 text-textSecondary'>50</div>
                <div className='text-textPrimary'>% OFF</div>
            </div>
            <div className='border-t-8 w-60 border-bgSecondary'></div>
            <div className='text-white text-xl'>First Shopping</div>
        </div>
    </div>
  )
}

export default CardPromocional