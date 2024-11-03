import React from "react";
import Text from "./text";
import Time from "./time";
function Nav2() {


  return (
   
    <div className="w-full h-12 textcolor items-center flex justify-between borderbottom ">
       
      <div className="items-center flex justify-between w-full mx-[4.4vw] ">

      <div className="flex items-center   justify-between w-full">
      <div className="w-[13vw]">
        <span className="  flex"> POLAND, POMERANIA,&nbsp; <div className="flex text-[#797670] w-fit">CTU&nbsp;  <Time/>  </div></span>

        
      </div>

      <div className="flex items-center w-[9.5vw]  ml-[9vw] opacity-40 justify-between">
      <div>#</div>
    
    
        <span>PERFECT_DESIGN</span>
      </div>

      

      <div className=" font-[Ibm] font-[600]  flex items-center w-[25vw] z-[100] text-[#000000]  justify-between ">
      
        {/* CHCE TU DAC ON HOVER TEN TEKST ZMIENIANIE SIE */}
       
        <Text texy="[YOUTUBE]"/>
        <Text texy="[COSMOS]"/>
        <Text texy="[DRIBBLE]"/>
        <Text texy="[BEHANCE]"/>
     
      </div>
    </div>
    </div>
    </div>
  );
}

export default Nav2;
