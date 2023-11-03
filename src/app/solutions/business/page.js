"use client"
import SolutionBusinessBanner from '@/components/SolutionBusinessBanner'
import { useState } from 'react'

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
          <SolutionBusinessBanner/>
          <div className="text-center">
            <br/>
            <div>
              <div className='bg-cover bg-no-repeat absolute w-full grid grid-cols-3 z-10 h-[300px] md:h-[600px] bg-[url("/images/solution/oursolution/rectangle15.png")]'>
                <div className="my-auto mx-auto col-start-1 items-center">
                  <div className='text-center'>
                     <h1 className='font-bold md:mb-10 mb-4 text-[10px] sm:text-base md:text-3xl text-white'>SAPTALOKA ERP</h1>
                     {
                     button1?<h1 onClick={onclick1} className='md:w-80 h-16 md:h-64 md:font-bold font-semibold md:text-2xl text-white text-[6px] px-1 sm:text-sm mx-auto mb-20 md:mb-8 w-24 z-20 cursor-pointer show'>ENTERPRISES RESOURCE PLANNING. LAYANAN JASA PEMBUATAN APLIKASI ENTERPRISES RESOURCE PLANNING (ERP)</h1>:<img onClick={onclick1} className="md:w-80 mx-auto w-24 z-20 cursor-pointer show" src='/images/businessolution/oursolution/bleft.png'/>
                     }
                  </div>
                </div>
                <div className="my-auto mx-auto col-start-2 items-center">
                  <div className='text-center'>
                     <h1 className='font-bold md:mb-10 mb-4 text-[10px] sm:text-base md:text-3xl text-white'>IT SOLUTION</h1>
                     {
                     button2?<h1 onClick={onclick2} className='md:w-80 h-16 md:h-64 md:font-bold font-semibold md:text-2xl text-white text-[6px] px-1 sm:text-sm mx-auto mb-20 md:mb-8 w-24 z-20 cursor-pointer show'>MANUFACTURING EXECUTION SYSTEM. LAYANAN JASA PEMBUATAN APLIKASI MANUFACTURING EXECUTION SYSTEM (MES)</h1>:<img onClick={onclick2} className="md:w-80 mx-auto w-24 z-20 cursor-pointer show" src='/images/businessolution/oursolution/bmid.png'/>
                     }
                  </div>   
                </div>
                <div className="my-auto mx-auto col-start-3  items-center">
                  <div className='text-center'>
                     <h1 className='font-bold md:mb-10 mb-4 text-[10px] sm:text-base md:text-3xl text-white'>SAPTALOKA POS</h1>
                     {
                     button3?<h1 onClick={onclick3} className='md:w-80 h-16 md:h-64 md:font-bold font-semibold md:text-2xl text-white text-[6px] px-1 sm:text-sm mx-auto mb-20 md:mb-8 w-24 z-20 cursor-pointer show'>POINT OF SALES. LAYANAN JASA PEMBUATAN APLIKASI POINT OF SALES (POS)</h1>:<img onClick={onclick3} className="md:w-64 mx-auto w-20 z-20 cursor-pointer show" src='/images/businessolution/oursolution/bright.png'/>
                     }
                  </div>         
                </div>
              </div>
              <div className='w-full flex'>
                 <img className="w-2/6 h-[300px] md:h-[600px]" src="/images/businessolution/oursolution/cleft.png"/>
                 <img className="w-2/6 h-[300px] md:h-[600px]" src="/images/businessolution/oursolution/cmid.png"/> 
                 <img className="w-2/6 h-[300px] md:h-[600px]" src="/images/businessolution/oursolution/cright.png"/>
              </div>
            </div>
             <br/>
          </div>
        </>
            
    )
}