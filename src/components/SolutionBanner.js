import Link from "next/link"

export default function Banner(){
    return(
        <div className="bg-cover bg-no-repeat bg-[url('/images/solution/banner/custom.png')] w-full md:h-[600px]">
            <div className="bg-cover bg-[url('/images/solution/banner/rectangle14.png')] w-full h-full z-10 text-center items-center">
                <h1 className="font-bold text-2xl md:text-5xl text-white mx-5 md:mx-14 md:pb-16 pb-5 md:pt-32 pt-20">
                CLIENT TRUST AND SATISFACTION ARE OUR PRIORITY
                </h1>
                <h5 className="font-bold text-white text-xs md:text-xl pb-3 md:pb-16 mx-14 md:mx-80">
                WE CONTINUE TO WORK OPTIMALLY THROUGH THE PRODUCTS AND SERVICES WE HAVE TO SUPPORT YOUR BUSINESS GROWTH
                </h5>

                <h4 className="font-bold pt-6 pb-5 text-white md:text-2xl text-base">OUR SOLUTION</h4>
                <div className="flex justify-center pb-20">
                    <Link href="/solutions/it" className="border-r-black text-white text-[8px] md:text-lg font-bold">IT SOLUTION</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-1"/>   
                    <Link href="/solutions/business" className="border-r-black text-white text-[8px] md:text-lg font-bold">BUSINESS DIGITAL SOLUTION</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-1"/>
                    <Link href="/solutions/business" className="border-r-black text-white text-[8px] md:text-lg font-bold">DIGITAL MARKETING</Link>
                </div>
            </div>
        </div>
    )
}