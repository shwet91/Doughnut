import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateChatBar } from '@/store/sectionSlice'


function Dm() {
    const [isActive , setIsActive] = useState(true)

    const dispatch = useDispatch()

    const clickHandler = () => {
          console.log("clicked")
          dispatch(updateChatBar({
            activeState : "DM"
          }))
    }

  return (
    <div onClick={clickHandler} className=" relative flex items-center cursor-pointer select-none  w-full h-20">
    {
      isActive &&  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-[30px] rounded-r-sm border-2 border-gray-200"></div>
    }

    <div className="mx-auto bg-blue-600 flex-shrink-0  sm:w-[40px] sm:h-[40px] rounded-xl flex items-center justify-center">
     
      <h1 className='text-white text-md'>DM</h1>
    </div>
  </div>
  )
}

export default Dm