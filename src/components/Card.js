import Link from "next/link"

export default function Cards({url,title,desc}){
    return(
        <div class="max-w-sm bg-white border md:mx-5 md:my-5 mx-1 my-2 sm:my-3 border-gray-200 shadow rounded-lg dark:bg-gray-800 dark:border-gray-700 md:w-full sm:w-full w-56">
        <Link href="#">
            <img class="rounded-t-md md:h-64 md:w-full sm:w-full w-56 sm:h-56 h-40" src={url} alt="" />
        </Link>
        <div class="p-5 items-center text-center">
            <Link href="#">
                <div className="h-14">
                <h5 class=" md:text-2xl sm:text-xl text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </div>
            </Link>
            <div className="md:h-28 sm:h-28 h-20 my-2">
            <p class="mb-3 md:text-lg sm:text-lg text-xs font-semibold text-gray-700 dark:text-gray-400">{desc}</p>                 
            </div>
            
            <Link href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                READ MORE
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
       </div>
    )
}