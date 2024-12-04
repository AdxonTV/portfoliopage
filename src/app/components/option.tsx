import React, { useState } from 'react'
import TextAppear from './textappear'
interface Props {
    name:string
    text:string
}

const Option : React.FC<Props> = ({name, text}) => {
    const [startAnimation, setStartAnimation] = useState(false)

  return (
    <span className="overflow-hidden w-[150px]  x lookoption h-full items-center flex "
    onMouseEnter={() => setStartAnimation(true)}
    onMouseLeave={() => setStartAnimation(false)}>
      <div
        className="flex look"
        
      >
        <div className="pr-14 w-[155px]  text-[1.5vw]"
        >{name}</div>

        <div className=" font-mono ">
          <TextAppear  texy={text} start={startAnimation} />
        </div>
      </div>
    </span>
  )
}

export default Option