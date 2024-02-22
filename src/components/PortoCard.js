'use client'
import Image from "next/image";

export default function PortoCard({ src, title, desc }) {
  const descs = desc.substring(0, 150);
  const myLoader = ({ src }) => {
    return `${src}`;
  }
  const [isHover, setIsHover] = usestate(false)



  return (
    <>
      {/* <div className="rounded-2xl border md:w-8/12 w-9/12 mx-auto md:my-10 sm:my-6 my-3">
        <img src={src} className="rounded-2xl w-full px-1 mx-auto md:my-10 sm:my-6 my-3" />
        <h1 className="md:text-2xl px-2 font-bold sm:text-base text-xs">{title}</h1>
        <p className="md:text-2xl px-2 sm:text-sm font-semibold text-[8px] md:my-5 sm:my-3 my-1">{desc?.length >= 150 ? `${descs}...` : desc}</p>
      </div> */}
      <div className="border w-[450px] h-72 relative rounded-2xl overflow-hidden">
        <div className="flex justify-center items-center w-full h-full absolute  rounded-2xl ">

          <Image loader={myLoader} src={src} alt="" width={384} height={384} sizes="100 vw" className=" object-cover h-full w-full rounded-2xl " />
        </div>
        <div className="absolute w-full h-full bg-gradient-to-t from-[#3a5775] via-transparent to-transparent"></div>
        <div className="absolute flex flex-col justify-end  h-full p-5 " >

          <p className="text-[24px] font-semibold text-white">{title}</p>
          <p className="text-[16px] text-gray-300">
            {desc?.length >= 150 ? `${descs}...` : desc}
          </p>
        </div>
      </div>
    </>
  )
}