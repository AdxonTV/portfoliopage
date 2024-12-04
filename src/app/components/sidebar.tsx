import React from "react";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="w-[3vw]  h-[100vh] bordersides textcolor flex flex-col justify-between items-center">
      <div className="flex flex-col mt-3 justify-between items-center h-full">
        <Image src="/img/Group 287.svg" width={25} height={25} alt="" />
       
        <div className=""> </div>
      
      </div>
    </div>
  );
};

export default Sidebar;
