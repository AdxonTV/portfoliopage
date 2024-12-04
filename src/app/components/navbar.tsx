import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <div className="w-full h-12 textcolor items-center flex justify-between font-medium borderbottom ">
      <div className="items-center flex justify-between w-full mx-[4.4vw] ">

      <div className="flex items-center   justify-between w-full">
      <div className="w-[12vw] ">
        <span className="  ">ADAM-MARKOWSKI</span>

        
      </div>

      <div className="flex items-center w-[10vw] ml-[9vw]  justify-around ">
      <Image   width={7} height={4}src="/img/Group 240.svg" alt="" />
      <span>WARSAW</span>
        <Image   width={15} height={15} src="/img/arrow.svg" alt="" />
        <span>POLAND</span>
      </div>

      

      <div className="flex items-center w-[25vw]  justify-between ">
        <span className="opacity-40 font-[ibm] font-[600]">SOCIALS</span>
        <span className=" font-[ibm] font-[600]">EN</span>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Navbar;
