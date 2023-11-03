"use client"
import SolutionBanner from '@/components/SolutionBanner'
import { useState } from 'react'
import Link from 'next/link'


export default function Solutions(){
  const [button1,setButton1] = useState(false)
  const [button2,setButton2] = useState(false)
  const [button3,setButton3] = useState(false)

  const onclick1 = ()=>{
    button1?setButton1(false):setButton1(true)
  }
  const onclick2 = ()=>{
    button2?setButton2(false):setButton2(true)
  }
  const onclick3 = ()=>{
    button3?setButton3(false):setButton3(true)
  }

    return(
        <>
          <SolutionBanner/>
          <div className="text-center">
            <div className='text-center'>
            <h1 className='text-lg md:text-3xl font-bold md:my-10 my-5 text-blue-800'>OUR SOLUTIONS</h1>
              <div className='absolute bg-cover w-full grid grid-cols-3 z-10 h-[300px] md:h-[600px] bg-[url("/images/solution/oursolution/rectangle15.png")]'>
                <div className="my-auto mx-auto col-start-1 items-center">
                  <div className='text-center'>
                     <h1 className='font-bold text-[10px] md:text-4xl text-white'>IT</h1>
                     <h1 className='font-bold md:mb-10 mb-4 text-[10px] sm:text-base md:text-4xl text-white'>SOLUTION</h1>
                     {
                     button1?<h1 onClick={onclick1} className='md:w-80 h-16 md:h-64 md:font-bold font-semibold md:text-2xl text-white text-[6px] px-1 sm:text-sm mx-auto mb-20 md:mb-8 w-24 z-20 cursor-pointer show'>LAYANAN TERBAIK UNTUK KEBUTUHAN SOLUSI IT TERINTEGRASI (SOFWARE DEVELOPMENT). MULAI DARI WEBSITE,APLIKASI MULTIPLATFORM, DAN GAME</h1>:<img onClick={onclick1} className="md:w-56 mx-auto w-20 z-20 cursor-pointer show" src='/images/solution/oursolution/bleft.png'/>
                     }
                  </div>
                </div>
                <div className="my-auto mx-auto col-start-2 items-center">
                  <div className='text-center'>
                     <h1 className='font-bold text-[10px] md:text-4xl text-white'>BUSINESS DIGITAL</h1>
                     <h1 className='font-bold md:mb-10 mb-4 text-[10px] sm:text-base md:text-4xl text-white'> SOLUTION</h1>
                     {
                     button2?<h1 onClick={onclick2} className='md:w-80 h-16 md:h-64 md:font-bold font-semibold md:text-2xl text-white text-[6px] px-1 sm:text-sm mx-auto mb-20 md:mb-8 w-24 z-20 cursor-pointer show'>LAYANAN JASA PEMBUATAN ENTERPRISE RESOURCE PLANNING (ERP) DAN MANUFACTURING EXECUTION SYSTEM (MES) UNTUK BERBAGAI INDUSTRI.</h1>:<img onClick={onclick2} className="md:w-56 mx-auto w-20 z-20 cursor-pointer show" src='/images/solution/oursolution/bmid.png'/>
                     }
                  </div>   
                </div>
                <div className="my-auto mx-auto col-start-3  items-center">
                  <div className='text-center'>
                     <h1 className='font-bold md:mb-10 mb-4 text-[10px] sm:text-base md:text-4xl text-white'>DIGITAL MARKETING</h1>
                     {
                     button3?<h1 onClick={onclick3} className='md:w-80 h-16 md:h-64 md:font-bold font-semibold md:text-2xl text-white text-[6px] px-1 sm:text-sm mx-auto mb-20 md:mb-8 w-24 z-20 cursor-pointer show'>LAYANAN JASA SOSIAL MEDIA MARKETING, WEBSITE LANDING PAGE, DAN LAINNYA UNTUK BISNIS ANDA.</h1>:<img onClick={onclick3} className="md:w-56 mx-auto w-20 z-20 cursor-pointer show" src='/images/solution/oursolution/bright.png'/>
                     }
                  </div>         
                </div>
              </div>
              <div className='w-full flex'>
                 <img className="w-2/6 h-[300px] md:h-[600px]" src="/images/solution/oursolution/cleft.png"/>
                 <img className="w-2/6 h-[300px] md:h-[600px]" src="/images/solution/oursolution/cmid.png"/> 
                 <img className="w-2/6 h-[300px] md:h-[600px]" src="/images/solution/oursolution/cright.png"/>
              </div>
            </div>
             <div className='flex my-10 justify-evenly'>
                <Link className="text-base md:text-2xl font-bold text-blue-800" href="/solutions/it">READ MORE</Link>
                <Link className="text-base md:text-2xl font-bold text-blue-800" href="/solutions/business">READ MORE</Link>
                <Link className="text-base md:text-2xl font-bold text-blue-800" href="/solutions/business">READ MORE</Link>
             </div>
          </div>
        </>
            
    )
}