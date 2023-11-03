"use client"
import { Carousel } from "flowbite-react"
import { useEffect, useState } from "react"
import BlogCardLS from "./BlogCardLS"

export default function CarouselBlog(){
    // const [carousel,setCarousel] = useState([])

    // useEffect(async ()=>{
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs?populate=image&pagination[start]=0&pagination[limit]=5&sort=id:desc`,{ cache: "no-store" })
    //     const data = await res.json()
    //     setCarousel(data.data)
    // },[])

    return(
    <div className="h-40 md:h-80 border">
     <Carousel>
     <BlogCardLS image={'/images/news/recent/cblog.png'}
                  title={"Informatika pada sehari hari"} slug={'/informatika'} content={"asdasdasd asdasda asdasd asdasd asdasd asdasda sdasdas dasda sda sdasdas "}/>
                  <BlogCardLS image={'/images/news/recent/cblog.png'}
                  title={"Informatika pada sehari hari"} slug={'/informatika'} content={"asdasdasd asdasda asdasd asdasd asdasd asdasda sdasdas dasda sda sdasdas "}/>
                  <BlogCardLS image={'/images/news/recent/cblog.png'}
                  title={"Informatika pada sehari hari"} slug={'/informatika'} content={"asdasdasd asdasda asdasd asdasd asdasd asdasda sdasdas dasda sda sdasdas "}/>
     
                  
    </Carousel>
   </div>
    )
}