"use client"
import { Carousel } from "flowbite-react"
import { useEffect, useState } from "react"
import CarouselTemplate from "./CarouselTemplate"

export default function Carousels() {
  // const [carousel,setCarousel] = useState([])

  // useEffect(async ()=>{
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/carousels?populate=banner`)
  //   const data = await res.json()
  //   setCarousel(data.data)
  // },[])

  return (
    <div className="h-56 sm:h-64 z-10 md:h-[500px]">
      <Carousel className="z-10 uppercase"  >
        <CarouselTemplate image={"/images/home/carousel/banner1.png"} title={"Build & Develop Integrated Enteurprise Resource Planning (ERP) Applications"} description={"ERP software development services that can be costumized according to your business needs, so they are effective in finding potential audiences. We will process quickly and precisely, supported by an experienced and professional team."} />
        <CarouselTemplate image={"/images/home/carousel/banner3.png"} title={"Multiplatform software development"} description={"We are a company that develops websites, web application, mobile applications (android/ios) and games."} />
        <CarouselTemplate image={"/images/home/carousel/banner2.png"} title={"BUILD & DEVELOP MANUFACTURING EXECUTION SYSTEM (MES)"} description={"MES SOFTWARE DEVELOPMENT SERVICES THAT CAN BE CUSTOMIZED ACCORDING TO YOUR INDUSTRY NEEDS. WE WILL PROCESS QUICKLY AND PRECISELY, SUPPORTED BY AN EXPERIENCED AND PROFESSIONAL TEAM."} />
      </Carousel>
    </div>
  )
}