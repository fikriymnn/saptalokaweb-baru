"use client"
import { Navbar,Dropdown} from "flowbite-react"
import Link from "next/link"

export default function Headers(){
    return(
      <Navbar
      fluid={true}
      rounded={true}
      className="md:h-20 sm:h-16 h-16 fixed z-20 w-full top-0"
    >
      <Navbar.Brand href="/">
        <img 
          src="/images/logo/saptaloka_logo/saptaloka.png"
          className="mr-3 mb-2 md:h-14 sm:h-10 h-8 font-bold"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="w-full bg-white flex justify-evenly">
        <Navbar.Link
          className="md:mx-5 sm:mx-2 mx-1 md:text-xl sm:text-md text-lg font-bold bg-white"
          href="/about">
          ABOUT US
        </Navbar.Link>
            <Dropdown
             className="md:mx-5 sm:mx-2 mx-1 z-50"
             label={<Navbar.Link>
             <h1 className="md:text-xl sm:text-md text-lg font-bold bg-white" >SOLUTIONS</h1>
           </Navbar.Link>}
             inline={true}>
            <Dropdown.Item>
            <Link href="/solutions" className="bg-white ">
             SOLUTIONS
             </Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link href="/solutions/it"  className="bg-white">
             IT SOLUTION
             </Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link href="/solutions/business" className="bg-white">
            BUSSINES SOLUTION
            </Link>
            </Dropdown.Item>
            </Dropdown>
        
            <Navbar.Link className="md:mx-5 sm:mx-2 mx-1 md:text-xl sm:text-md text-lg font-bold" href="/portofolio">
          PORTOFOLIO
        </Navbar.Link>
        <Navbar.Link className="md:mx-5 sm:mx-2 mx-1 md:text-xl sm:text-md text-lg font-bold" href="/contact">
          CONTACT
        </Navbar.Link>
        <Navbar.Link className="md:mx-5 sm:mx-2 mx-1 md:text-xl sm:text-md text-lg font-bold" href="/blog">
          NEWS
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    )
}