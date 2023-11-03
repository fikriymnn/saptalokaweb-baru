'use client'
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { useRouter } from "next/navigation";

export default function Content() {
  const { push } = useRouter();
  return (
    <>

      <h1 className="text-center md:mb-20 sm:mb-16 mb-5 md:mt-20 sm:mt-16 mt-5 text-3xl font-bold text-sky-500">Content</h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center mb-20">
        <a href="/admin/blog">
          <div className="w-80 h-40 border-4 rounded-lg flex justify-center bg-slate-50">
            <h1 className="m-auto text-center my-auto text-2xl font-bold">BLOG</h1>
          </div>
        </a>
        <a href="/admin/brand">
          <div className="w-80 h-40 border-4 rounded-lg flex justify-center bg-slate-50">
            <h1 className="m-auto text-center my-auto text-2xl font-bold">BRAND</h1>
          </div>
        </a>
        <a href="/admin/portofolio">
          <div className="w-80 h-40 border-4 rounded-lg flex justify-center bg-slate-50">
            <h1 className="m-auto text-center my-auto text-2xl font-bold">PORTOFOLIO</h1>
          </div>
        </a>

        <button onClick={() => {
          signOut(auth);

          push("/");
        }}>logout</button>
      </div>
    </>
  )
}