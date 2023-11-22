import React from 'react'
import Aside from '../Aside/Aside'
import Sidebar from '../Sidebar/Sidebar'

export default function Section() {
  return (
    <>
    <div className='min-h-screen  flex justify-between'>
    <div className='w-[1800px] min-h-screen bg-white shadow-slate-50'>
      <Sidebar/>
    </div>
    <Aside/>
    </div>
    </>
  )
}
