"use client"
import SolutionITBanner from '@/components/SolutionITBanner'
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
          <SolutionITBanner/>
          <div className="text-center">
            <br/>
            <div>
              <div className='bg-cover bg-no-repeat absolute w-full grid grid-cols-3 z-10 h-[300px] md:h-[600px] bg-[url("/images/solution/oursolution/rectangle15.png")]' id="it">
                <div className="my-auto mx-auto col-start-1 items-center">
                  <div className='text-center'>
                     <h1 className='font-bold md:mb-10 px-1 mb-4 text-[10px] sm:text-base md:text-4xl text-white'>SOFTWARE DEV</h1>
                     {
                     button1?<h1 onClick={onclick1} className='md:w-80 h-16 md:h-64 md:font-bold font-semibold md:text-2xl text-white text-[6px] sm:text-sm mx-auto px-1  mb-20 md:mb-8 sm:text-sm w-24 z-20 cursor-pointer show'>MULTIPLATFORM APP DEVELOPMENT. LAYANAN JASA PEMBUATAN APLIKASI MULTIPLATFORM TERINTEGRASI (CUSTOM)</h1>:<img onClick={onclick1} className="md:w-56 mx-auto w-20 z-20 cursor-pointer show" src='/images/itsolution/oursolution/bleft.png'/>
                     }
                  </div>
                </div>
                <div className="my-auto mx-auto col-start-2 items-center">
                  <div className='text-center'>
                     <h1 className='font-bold md:mb-10 px-1 mb-4 text-[10px] sm:text-base md:text-4xl text-white'>SAPTA WEB DEV</h1>
                     {
                     button2?<h1 onClick={onclick2} className='md:w-80 h-16 md:h-64 md:font-bold font-semibold md:text-2xl text-white text-[6px] sm:text-sm mx-auto px-1 mb-20 md:mb-8 sm:text-sm w-24 z-20 cursor-pointer show'>WEBSITE DEVELOPMENT. LAYANAN PEMBUATAN WEBSITE,LANDING PAGE,COMPANY PROFILE,DLL.(CUSTOM)</h1>:<img onClick={onclick2} className="md:w-56 mx-auto w-[70px] z-20 cursor-pointer show" src='/images/itsolution/oursolution/bmid.png'/>
                     }
                  </div>   
                </div>
                <div className="my-auto mx-auto col-start-3  items-center">
                  <div className='text-center'>
                     <h1 className='font-bold md:mb-10 mb-4 text-[10px] sm:text-base md:text-4xl px-1 text-white'>SAPTA GAME DEV</h1>
                     {
                     button3?<h1 onClick={onclick3} className='md:w-80 h-16 md:h-64 md:font-bold font-semibold md:text-2xl text-white text-[6px] sm:text-sm mx-auto px-1 mb-20 md:mb-8 sm:text-sm w-24 z-20 cursor-pointer show'>GAME DEVELOPMENT. LAYANAN JASA PEMBUATAN GAME UNTUK PEMBELAJARAN</h1>:<img onClick={onclick3} className="md:w-56 mx-auto w-20 z-20 cursor-pointer show" src='/images/itsolution/oursolution/bright.png'/>
                     }
                  </div>         
                </div>
              </div>
              <div className='w-full flex'>
                 <img className="w-2/6 h-[300px] md:h-[600px]" src="/images/itsolution/oursolution/cleft.png"/>
                 <img className="w-2/6 h-[300px] md:h-[600px]" src="/images/itsolution/oursolution/cmid.png"/> 
                 <img className="w-2/6 h-[300px] md:h-[600px]" src="/images/itsolution/oursolution/cright.png"/>
              </div>
            </div>
            <br/>
          </div>
        </>
            
    )
}