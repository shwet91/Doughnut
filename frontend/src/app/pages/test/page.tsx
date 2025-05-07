"use client"

import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../../store/counterSlice';

import { useSession } from 'next-auth/react';

function page() {

  const sesson = useSession()


  const count = useSelector((state : any) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div className="p-4">
      <h1 className="text-2xl">Count: {count}</h1>
      <button className="m-2 px-4 py-2 bg-blue-500 text-white" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="m-2 px-4 py-2 bg-red-500 text-white" onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button className="m-2 px-4 py-2 bg-green-500 text-white" onClick={() => console.log(sesson)}>
        Session
      </button>
    </div>
  )
}

export default page