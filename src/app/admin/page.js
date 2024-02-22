'use client'
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { useRouter } from "next/navigation";

export default function Content() {
  const { push } = useRouter();
  return (
    <div className='h-screen '>

      <h1 className="text-center md:mb-20 sm:mb-16 mb-5 md:mt-24 sm:mt-16 mt-5 text-3xl font-bold text-sky-500">Content</h1>
      <div className='w-full h-full px-36 pb-24'>

        <div className="flex md:flex-row flex-col justify-between gap-5 sm:grid-cols-2 justify-items-center mb-28">
          <a href="/admin/blog">
            <div className="w-80 h-40  rounded-lg flex justify-center bg-blue-300">
              <h1 className="m-auto text-center text-blue-800 my-auto text-2xl font-bold">BLOG</h1>
            </div>
          </a>
          <a href="/admin/brand">
            <div className="w-80 h-40  rounded-lg flex justify-center bg-blue-300">
              <h1 className="m-auto text-center text-blue-800 my-auto text-2xl font-bold">BRAND</h1>
            </div>
          </a>
          <a href="/admin/portofolio">
            <div className="w-80 h-40  rounded-lg flex justify-center bg-blue-300">
              <h1 className="m-auto text-center text-blue-800 my-auto text-2xl font-bold">PORTOFOLIO</h1>
            </div>
          </a>

        </div>
        <div>
          <button className='bg-red-500 px-3 py-2 rounded-md text-white text-xl font-semibold' onClick={() => {
            signOut(auth);

            push("/");
          }}>SIGN OUT</button>
        </div>
      </div>
    </div>
  )
}