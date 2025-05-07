import React from 'react'
import Image from "next/image";

function SearchUserCard({
    name = "default" ,
    avatar = "https://images.unsplash.com/photo-1746264726380-cb3186610ef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
} : {
    name ?: string,
    avatar ?: string
}) {
  return (
     <div
          className={`1border-2  h-[45px] rounded-md flex items-center w-full black4 m-0.5`}
        >
          <div
            className={`w-[30px] h-[30px] relative overflow-hidden rounded-full m-3`}
          >
            <Image
              src={`${avatar}`}
              alt=""
              fill
            ></Image>
          </div>
    
          <h1 className="text-white ">{`${name}`}</h1>
        </div>
  )
}

export default SearchUserCard