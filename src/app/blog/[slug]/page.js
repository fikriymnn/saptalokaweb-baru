import Image from "next/image"
import BlogCard from "@/components/BlogCard"
import Link from "next/link"

// async function getDataBlogOne(params){
//     const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs?populate=image&filters[slug]=${params}`)
//     return res.json()
// }

// async function getDataBlog(){
//     const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blogs?populate=image&pagination[start]=0&pagination[limit]=4&sort=id:desc`,{ cache: "no-store" })
//     return res.json()
// }

export default async function DetailBlog({params}){
    // const dataBlogOne = await getDataBlogOne(params.slug)
    // const dataBlog = await getDataBlog()
    // const blog = await dataBlogOne.data[0].attributes

    

    return(
        <>
           <div className="bg-cover bg-no-repeat w-full md:h-[600px] h-[300px]" style={{backgroundImage:`url(/images/news/recent/cblog.png)`}}>
            <div className="bg-cover bg-[url('/images/solution/banner/rectangle14.png')] w-full h-full z-10 text-center items-center" >
                <h1 className="font-bold sm:text-2xl text-sm md:text-5xl text-white mx-5 md:mx-14 md:pb-16 pb-9 md:pt-40 pt-20">
                {/* TITLE */}
                {"Hari Ini Adalah Hari Senin yang CERAH"}
                </h1>
                <div className="flex justify-center md:pb-16 sm:pb-16 pb-3">
                    <Link href="#" className="border-r-black text-white sm:text-base text-[8px] md:text-lg font-bold uppercase ">
                        {/* Author */}
                        {"Luthfi khaeri Ihsan"}</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-1"/>   
                    <Link href="#" className="border-r-black text-white sm:text-base text-[8px] md:text-lg font-bold">
                        {/* TANGGAL */}
                        {"30 oktober 2023"}</Link>
                </div>
                <h1 className="uppercase md:text-2xl sm:text-lg text-xs font-bold text-white md:pb-14 pb-2 mx-auto">
            {/* CATEGORY */}
                    {"Teknologi"}</h1>
            </div>
        </div>
        <div >
            
            <img src="/images/news/recent/cblog.png" className="md:w-[600px] md:h-[330px] sm:w-64 sm:h-40  w-48 h-32 md:px-10 md:pb-5 px-4 pb-2 float-left"/>
            
            <h4 className="font-normal md:text-lg text-sm md:m-16 m-4">
                {/* CONTENT */}
            {"lotremr er er sdfsdfs fsdfsdf sdfsdfsdfsd sdfsdfsdfsdf sdfsdfsdfsdf sdfsdf sdf sdfsfsfdf sdfs"}
            </h4>
        </div>
        <div style={{backgroundImage:'url(/images/news/rectangle18.png)'}} className="md:mt-[330px] sm:mt-40 mt-32 bg-cover bg-no-repeat w-full md:h-20 h-14 text-center py-5">
           <h1 className="mx-auto my-auto md:text-2xl sm:text-xl text-lg font-bold text-white md:pb-10 pb-7">OTHER POSTS</h1>
        </div>
        <div className="overflow-auto w-full">
        <div className="flex flex-nowrap md:w-full w-[900px] justify-evenly md:py-8 py-1">
            {/* DINAMIS 3 BLOG TERBARU CATEGORY (CAMPUR)*/}
        <BlogCard
                  image={'/images/news/recent/cblog.png'}
                  title={"Informatika pada sehari hari"}
                  slug={'/informatika'}
                  
                />
                <BlogCard
                  image={'/images/news/recent/cblog.png'}
                  title={"Informatika pada sehari hari"}
                  slug={'/informatika'}
                  
                />
                <BlogCard
                  image={'/images/news/recent/cblog.png'}
                  title={"Informatika pada sehari hari"}
                  slug={'/informatika'}
                  
                />
        </div>
        </div>
        </>
    )
}