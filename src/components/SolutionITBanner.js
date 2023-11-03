import Link from "next/link"

export default function ITBanner(){
    return(
        <div className="bg-cover bg-no-repeat bg-[url('/images/itsolution/banner/custom.png')] w-full md:h-[600px] h-[300px]">
            <div className="bg-cover bg-[url('/images/solution/banner/rectangle14.png')] w-full h-full z-10 text-center items-center">
                <h1 className="font-bold text-2xl md:text-5xl text-white mx-5 md:mx-14 md:pb-16 pb-5 pt-16 md:pt-32">
                IT SOLUTION
                </h1>
                <h5 className="font-bold text-white text-xs md:text-xl pb-3 md:pb-16 mx-14 md:mx-80">
                DEVELOPMENT OF WEBSITE, MULTIPLATFORM SOFTWARE (WEB,MOBILE,AND DESKTOP APPS),AND GAMES.
                </h5>
                <h4 className="font-bold pt-6 pb-5 text-white md:text-2xl text-xs">OUR SOLUTION</h4>
                <div className="flex justify-center pb-20">
                    <Link href="#it" className="border-r-black text-white text-[8px] md:text-lg font-bold">SOFTWARE DEV.</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-2"/>   
                    <Link href="#it" className="border-r-black text-white text-[8px] md:text-lg font-bold">SAPTA WEB DEV.</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-2"/>
                    <Link href="#it" className="border-r-black text-white text-[8px] md:text-lg font-bold">SAPTA GAMES DEV.</Link>
                </div>
            </div>
        </div>
    )
}