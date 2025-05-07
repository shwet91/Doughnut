import React from "react";

function MessageCard({className} : {className ? :string}) {
  return (
    <div className=" hover:bg-gray-600  w-full">
    <div className={` ${className} className relative m-5 rounded-xl p-3 bg-black inline-block min-w-[100px] max-w-[300px]`}>
      <p className="text-white mb-5">hi jdk kjfksjf kfjlksdjf  kdjflksf ksdfkhjhj jsjdhfjksdfh sldjf   df df s dfsdf sdf sdf sdfsd fsd fsd fdsf dsf sd <br /> kjfgkfg kfd <br /> kdfjgkl dklf</p>
      <p className="text-[10px] absolute bottom-1 mt-5 text-white ">25-04-25</p>
    </div>
    </div>

  );
}

export default MessageCard;
