import Link from "next/link";
import ProfilCard from "@/components/ProfilCard";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// async function getDataAbout() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/abouts`, {
//     cache: "no-store",
//   });
//   return res.json();
// }

// async function getDataLeader() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_URL}/api/leaders?populate=image`,
//     { cache: "no-store" }
//   );
//   return res.json();
// }

export default async function About() {
  //   const dataAbout = await getDataAbout();
  //   const dataLeader = await getDataLeader();
  //   const about = await dataAbout.data[0].attributes;
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-[url('/images/about/banner/foto.png')] bg-no-repeat w-full md:h-[600px] ">
        <div className="bg-cover bg-no-repeat bg-[url('/images/about/banner/blue.png')] w-full bg-no-repeat h-full z-10 text-center items-center">
          <h1 className="font-bold md:text-5xl sm:text-4xl mx-3 text-2xl text-white pb-14 pt-16 md:pt-32 md:pb-24">
            PT SAPTALOKA DIGITAL INDONESIA
          </h1>
          <h5 className="font-bold md:pb-24 pb-14 text-white md:text-3xl text-lg sm:text-xl">
            STORY OF PT SAPTALOKA DIGITAL INDONESIA
          </h5>
          <div className="flex justify-center pb-20">
            <Link
              href="#weare"
              className="border-r-black text-white text-[8px] md:text-lg font-bold"
            >
              WE ARE
            </Link>
            <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-1 sm:mx-2" />
            <Link
              href="#wedo"
              className="border-r-black text-white text-[8px] md:text-lg font-bold"
            >
              WE DO
            </Link>
            <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-1 sm:mx-2" />
            <Link
              href="#vision"
              className="border-r-black text-white text-[8px] md:text-lg font-bold"
            >
              VISION
            </Link>
            <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-1 sm:mx-2" />
            <Link
              href="#mission"
              className="border-r-black text-white text-[8px] md:text-lg font-bold"
            >
              MISSION
            </Link>
            <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-1 sm:mx-2" />
            <Link
              href="#ourleader"
              className="border-r-black text-white text-[8px] md:text-lg font-bold"
            >
              OUR LEADER
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-cover bg-no-repeat h-max w-full bg-[url('/images/about/bgsaptaloka.png')] bg-no-repeat text-center">
        <h1 className="md:text-4xl sm:text-xl text-lg font-bold text-blue-700 pt-16 md:pb-20 pb-14 uppercase">
          STORY OF PT.SAPTALOKA DIGITAL INDONESIA
        </h1>
        <h3 className="md:text-2xl sm:text-sm text-[8px] text-blue-700 md:pb-16 sm:pb-10 pb-5 font-bold md:px-32 px-10 uppercase">
          {/* <ReactMarkdown children={about.description}/> */}
          PT SAPTALOKA DIGITAL INDONESIA DIBENTUK PADA TANGGAL 1 JANUARI 2022,
          MERUPAKAN GABUNGAN DARI DUA PERUSAHAAN, YAITU BENGKEL CODING DAN ALSI
          MEDIA.
        </h3>
        <h3 className="md:text-2xl sm:text-sm text-[8px] text-blue-700 md:pb-16 sm:pb-10 pb-5 font-bold md:px-32 px-10 uppercase">
          BENGKEL CODING MERUPAKAN PERUSAHAAN YANG BERGERAK DI BIDANG JASA IT
          CONSULTANT SEJAK TAHUN 2020-2021. SELAMA PERJALANANNY, BENGKEL CODING
          TELAH MENYELESAIKAN PROJECT-PROJECT DARI BEBERAPA CLIENT.
        </h3>
        <h3 className="md:text-2xl sm:text-sm text-[8px] text-blue-700 md:pb-16 sm:pb-10 pb-5 font-bold md:px-32 px-10 uppercase">
          ALSI MEDIA MERUPAKAN PERUSAHAAN YANG BERGERAK DI BIDANG JASA DIGITAL
          MARKETING DAN PRODUCTION HOUSE. PADA PERJALANANNYA ALSI MEDIA TELAH
          MENERIMA JASA PEMBUATAN VIDEO DAN FOTOGRAFI, SERTA MENYELESAIKAN LEBIH
          DARI LIMA PROJECT DIGITAL MARKETING.
        </h3>
        <h3 className="md:text-2xl sm:text-sm text-[8px] text-blue-700 md:pb-16 sm:pb-10 pb-5 font-bold md:px-32 px-10 uppercase">
          KEDUA PERUSAHAAN TERSEBUT AKHIRNYA MEMUTUSKAN UNTUK BERGABUNG DAN
          RE-BRANDING MENJADI SAPTALOKA DIGITAL INDONESIA YANG BERGERAK DI
          BIDANG IT & BUSSINESS CONSULTANT.
        </h3>
      </div>
      <div className="bg-cover bg-no-repeat grid grid-cols-2 gap-2 my-10 h-full w-full bg-no-repeat bg-[url('/images/about/bgwawd.png')]">
        <div className="bg-cover bg-no-repeat grid-span-1 bg-[url('/images/about/rectangle10.png')]">
          <div className="md:m-10 m-4">
            <h1 id="weare" className="font-bold md:text-3xl text-xl text-white">
              WE ARE
            </h1>
            <h3 className="font-bold md:text-xl sm:text-sm text-[8px] text-white mt-2">
              <ul>
                <li>
                  <h3 className="font-bold md:text-xl sm:text-sm text-[8px] text-white mt-2">
                    &ast; SAPTALOKA DIGITAL MERUPAKAN PERUSAHAAN YANG BERGERAK DI BIDANG IT & BUSSINESS CONSULTANT.
                  </h3>
                </li>
                <li>
                  <h3 className="font-bold md:text-xl sm:text-sm text-[8px] text-white mt-2">
                    &ast; SAPTALOKA DIGITAL MENAWARKAN JASA IT BERUPA PERMBUATAN WEBSITE, MULTIPLATFORM APPS DAN GAME,DAN JUGA MENAWARKAN JASA DIGITAL MARKETING.
                  </h3>
                </li>
                <li>
                  <h3 className="font-bold md:text-xl sm:text-sm text-[8px] text-white mt-2">
                    &ast; SAPTALOKA DIGITAL INDONESIA MEMBANTU PERKEMBANGAN PERUSAHAAN-PERUSAHAAN DARI BERBAGAI INDUSTRI.
                  </h3>
                </li>
              </ul>
            </h3>
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="bg-cover bg-no-repeat grid-span-4 h-full w-full bg-no-repeat bg-[url('/images/about/rectangle10.png')]">
          <div className="md:m-10 m-4">
            <h1 id="wedo" className="font-bold md:text-3xl text-xl text-white">
              WE DO
            </h1>
            <ul>
              <li>
                <h3 className="font-bold md:text-xl sm:text-sm text-[8px] text-white mt-2">
                  &ast; MEMBERI SARAN PADA KLIEN TENTANG PEMAKAIAN IT UNTUK MEMENUHI TARGET BISNIS ATAUPUN MEMBANTU PROBLEM SOLVING DARI MASALAH KLIEN.
                </h3>
              </li>
              <li>
                <h3 className="font-bold md:text-xl sm:text-sm text-[8px] text-white mt-2">
                  &ast; MEMBANTU MIGRASI TEKNOLOGI UNTUK MEMUDAHKAN OPERASIONAL BISNIS KLIEN.
                </h3>
              </li>
              <li>
                <h3 className="font-bold md:text-xl sm:text-sm text-[8px] text-white mt-2">
                  &ast; SAAT INI KAMI SEDANG MENGEMBANGKAN PRODUK PLATFORM DIGITAL ERP DAN MES UNTUK MENDUKUNG PERTUMBUHAN PERUSAHAAN-PERUSAHAAN DARI BERBAGAI INDUSTRI.
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 h-max w-full">
        <div className="bg-cover bg-no-repeat grid-span-1 bg-no-repeat bg-[url('/images/about/vsms.png')]">
          <div className="md:m-20 m-4 text-center pb-14">
            <h1
              id="vision"
              className="mt-6 md:mt14 text-xl md:text-4xl text-white font-bold"
            >
              OUR VISION
            </h1>
            <h3 className="md:p-10 p-1 sm:text-sm text-[8px] text-white md:text-3xl font-bold">
              &quot;MEMBANTU MENGEMBANGKAN BISNIS CLIENT DALAM BIDANG CONSULTANT IT DAN DIGITAL MARKETING SERTA MENGHASILKAN PRODUK TEKNOLOGI YANG BERGUNA BAGI MASYARAKAT&quot;
            </h3>

          </div>
        </div>
        <div className="grid-span-1">
          <div className="md:m-20 m-4 text-center pb-14 text-blue-700">
            <h1
              id="mission"
              className=" md:mb-10 mb-5 mt-6 md:mt14 text-xl md:text-4xl font-bold"
            >
              OUR MISSION
            </h1>
            <ul>
              <li>
                <h3 className="font-bold md:text-2xl sm:text-sm text-[8px] text-blue-700  mt-2">
                  &ast; MENJADI MITRA KUNCI DENGAN MEMBANGUN KEPERCAYAAN KLIEN DALAM MEMBANGUN ALUR BISNIS SECARA DIGITAL.
                </h3>
              </li>
              <li>
                <h3 className="font-bold md:text-2xl sm:text-sm text-[8px] text-blue-700  mt-2">
                  &ast; MEMBUAT PRODUK DALAM BIDANG IT UNTUK MEMBERIKAN SOLUSI TERHADAP PERMASLAHAN MASYARAKAT PADA ERA 5.0.
                </h3>
              </li>
              <li>
                <h3 className="font-bold md:text-2xl sm:text-sm text-[8px] text-blue-700  mt-2">
                  &ast; MENJADI PERLOPOR JASA IT DAN DIGITAL MARKETING SECARA MENGEMBANGKAN INOVASI DI ERA INDUSTRI 5.0.
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1
          id="ourleader"
          className="md:mt-10 mt-5 font-bold text-lg md:text-4xl"
        >
          OUR LEADER
        </h1>
        <div className="overflow-auto w-full h-full">
          <div className="justify-evenly flex md:mb-10 mb-2 md:h-full sm:h-full sm:w-full h-[310px] md:w-full w-[615px] flex-nowrap">

            <ProfilCard
              image={"/images/about/leader.png"}
              title={"CEO"}
              name={"MUHAMMAD NOVAN"}

            />
            <ProfilCard
              image={"/images/about/leader.png"}
              title={"HEAD OF IT"}
              name={"FIKRI ZAKI ADITAMA"}

            />
            <ProfilCard
              image={"/images/about/leader.png"}
              title={"HEAD OF UI/UX DESIGN"}
              name={"DAFFA"}
            />

          </div>
        </div>
      </div>
    </>
  );
}
