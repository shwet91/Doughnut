"use client"
import Channel from '@/components/userNeeds/Channel'
import Chat from '@/components/userNeeds/Chat'
import ChatBox from '@/components/userNeeds/ChatBox'
import Description from '@/components/userNeeds/Description'
import FriendBar from '@/components/userNeeds/FriendBar'
import { useSelector, UseSelector } from 'react-redux'
import Notification from '@/components/userNeeds/Notification'

import React from 'react'

function page() {

  const store = useSelector((state : any) => state.section)

  return (

    <div>
<button onClick={() => console.log(store)}>click me</button>
      <div className='w-screen text-white text-center jet-black flex items-center justify-center gap-5 h-[5vh]'>
      Doughnut
      
        <Notification></Notification>
        
       
      </div>
      
    <div className='w-screen overflow-hidden h-[95vh]  jet-black flex'>
    
        <Chat></Chat>
       
        {
          store.chatBar.activeState === "DM" ? <FriendBar></FriendBar> : <Channel></Channel>
        }
        
        
        <ChatBox></ChatBox>
        <Description></Description>
    </div>
    </div>

  )
}

export default page