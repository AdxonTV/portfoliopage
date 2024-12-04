import React from 'react'
import Image from 'next/image'
const Forfooter = () => {
  return (
   
    <div className="w-full h-[4vh] flex items-center justify-between   bg-[#ECE7E3] bg-opacity-80 backdrop-blur-[40px] border-t textcolor">
<div className='flex'>
<div className=" ">
          <div className="flex justify-between  w-[23vw] ml-3  mr-[4vw]">
            <span>MEET ME</span>
            <span>03</span>
          </div>
        </div>

       <div className="flex   w-[70vw] j left-0 justify-between ">
          <span>FOOTER</span>
          
        


            <div className="flex">


              <Image alt='' src="/img/arrow.svg"    width={15}  // podaj odpowiednią szerokość
  height={15} style={{ transform: "rotate(90deg)" }} className="  mx-2 " />
              <span>EXPLORE</span>
        

           

          </div>

          <div className="mr-[3vw] w-[19vw]  flex justify-end items-center">
  <div className="">
    @ADAM_MARKOWSKI
  </div>
</div></div>



        </div>



        
           

            
        </div>
   
  )
}

export default Forfooter