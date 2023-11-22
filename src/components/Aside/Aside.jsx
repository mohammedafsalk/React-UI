import React from 'react'
import { IoIosAddCircle, IoIosNotifications } from 'react-icons/io'

export default function Aside() {
  return (
    <>
    <div  className=' flex flex-col justify-between '>
        <div className='rounded-lg w-14 h-10  flex justify-center text-4xl bg-white shadow-lg text-blue-500 '><IoIosNotifications /></div>
        <div className='flex flex-col  gap-8'>
            <div className='w-14 h-60 bg-white shadow-xl'></div>
            <div className='rounded-lg w-14 h-10  flex justify-center text-4xl bg-white shadow-lg text-blue-500 '><IoIosAddCircle /></div>
        </div>
    </div>
    </>
  )
}
