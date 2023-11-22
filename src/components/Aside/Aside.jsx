import React from 'react'
import { IoIosAddCircle, IoIosNotifications } from 'react-icons/io'

export default function Aside() {
  return (
    <>
    <div  className=' flex flex-col justify-between '>
        <div className='rounded-lg w-14 h-10  flex justify-center text-4xl bg-slate-200 shadow-lg '><IoIosNotifications /></div>
        <div className='flex flex-col  gap-8'>
            <div className='w-14 h-60 bg-slate-200 shadow-xl'></div>
            <div className='rounded-lg w-14 h-10  flex justify-center text-4xl bg-slate-200 shadow-lg'><IoIosAddCircle /></div>
        </div>
    </div>
    </>
  )
}
