import Link from "next/link"

export default function BusinessBanner(){
    return(
        <div className="bg-cover bg-no-repeat bg-[url('/images/businessolution/banner/custom.png')] w-full md:h-[600px] h-[300px]">
            <div className="bg-cover bg-[url('/images/solution/banner/rectangle14.png')] w-full h-full z-10 text-center items-center">
                <h1 className="font-bold text-2xl md:text-5xl text-white mx-5 md:mx-14 md:pb-16 pb-5 md:pt-32 pt-16">
                BUSINESS DIGITAL SOLUTION
                </h1>
                <h5 className="font-bold text-white text-xs md:text-xl pb-3 md:pb-16 mx-14 md:mx-80">
                DEVELOPMENT OF ENTERPRISES RESOURCE PLANNING (ERP) AND MANUFACTURING EXECUTION SYSTEEM (MES)
                </h5>

                <h4 className="font-bold pt-6 pb-5 text-white md:text-2xl text-base">OUR SOLUTION</h4>
                <div className="flex justify-center pb-20">
                    <Link href="#business" className="border-r-black text-white text-[8px] md:text-lg font-bold">SAPTALOKA ERP</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-1"/>   
                    <Link href="#business" className="border-r-black text-white text-[8px] md:text-lg font-bold">SAPTALOKA MES</Link>
                    <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-1"/>
                    <Link href="#business" className="border-r-black text-white text-[8px] md:text-lg font-bold">SAPTALOKA POS</Link>
                </div>
            </div>
        </div>
    )
}