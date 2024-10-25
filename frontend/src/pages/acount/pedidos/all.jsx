import React from 'react'
import CardOrders from '../../../components/cards/cardsOrders.jsx'

const all = () => {
  return (
    <div className='w-full h-full p-8'>
        <div className='bg-textPrimary p-8 rounded-md w-full'>
            <div className='w-full'>
                {/** cards orders */}
                <div className=' w-full'>
                    <CardOrders />
                </div>
            </div>
        </div>
    </div>
  )
}

export default all