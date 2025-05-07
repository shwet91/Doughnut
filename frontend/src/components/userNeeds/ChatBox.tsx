"use client"

import React from 'react'
import MessageBox from './MessageBox'
import { useSelector } from 'react-redux'
import Friend from './Friend'

function ChatBox() {
  const channelBar = useSelector((state : any) => state.section.channelBar)
 

  return (
    <div className="border-t-1 border-gray-600 sm:w-[50%] ">
    
    {/* <Friend></Friend> */}

    {
      channelBar.activeState === "friendsOption" ? <Friend></Friend> :  <MessageBox></MessageBox> 
    }

    {/* <MessageBox></MessageBox> */}
    </div>
  )
}

export default ChatBox