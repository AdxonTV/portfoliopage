import React from 'react'
import Image from 'next/image'


interface Props{
    title: string
    subtitle:string
    midtitle:string
}
  




const Aphoto: React.FC<Props> = ({title, subtitle, midtitle}) => {
  return (
    <div className="font-mono">
    <Image   width={500}  // podaj odpowiednią szerokość
  height={500} src="/img/p1.jpg" alt="x" className="box" />

    <div className="flex w-full  justify-between">
      <div>{title}</div>
      <div className='opacity-30'>{midtitle}</div>
      <div>{subtitle}</div>
      </div>
    </div>
  )
}

export default Aphoto