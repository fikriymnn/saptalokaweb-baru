import Image from "next/image";
import Link from "next/link";

// async function getDataInformation() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/informs`);
//   return res.json();
// }

export default async function Footer() {
  // const dataInformation = await getDataInformation()
  // const information = await dataInformation.data[0].attributes

  return (
    <footer
      className="bg-white w-full shadow"
      style={{
        background:
          "linear-gradient(120.82deg, #71C8ED 16.97%, #13017C 84.34%, #013088 84.34%, #013088 84.34%",
      }}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex w-full max-w-screen-xl mx-auto items-center justify-center text-center">
          <h6 className="text-white font-semibold md:text-xl text-[8px]">
            GET CONNECTED WITH US ON SOCIAL NETWORKS:
          </h6>
          <Link href={"/"}>
            <Image
              src="/images/logo/sosmed_logo/ig.png"
              width={20}
              height={20}
              alt="logo"
              className="m-3"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/images/logo/sosmed_logo/wa.png"
              width={25}
              height={25}
              alt="logo"
              className="m-3"
            />
          </Link>
          <Link href={""}>
            <Image
              src="/images/logo/sosmed_logo/fb.png"
              width={20}
              height={20}
              alt="logo"
              className="m-3"
            />
          </Link>
          <Link href={'/'}>
            <Image
              src="/images/logo/sosmed_logo/email.png"
              width={20}
              height={20}
              alt="logo"
              className="m-3"
            />
          </Link>
        </div>
        <hr className="mb-6 border-white-200 sm:mx-auto dark:border-white-700 lg:my-8" />
        <div className="">
          <div className="grid grid-cols-2 gap-8 sm:justify-evenly sm:flex">
            <div className="">
              <Link
                href="/"
                className="flex items-center mb-6 text-sm font-semibold text-gray-900 uppercase text-white md:mx-auto"
              >
                <img
                  src="/images/logo/saptaloka_logo/saptaloka.png"
                  className="h-6 mr-1"
                  alt="saptaloka"
                />
                <span className="self-center font-semibold md:text-xl text-[8px] whitespace-nowrap text-white">
                  Saptaloka Digital
                </span>
              </Link>
              <ul className="text-white font-medium">
                <li className="mb-4 flex md:mx-auto">
                  <img
                    src="/images/logo/link_logo/location.png"
                    className="md:w-6 md:h-6 w-3 h-3 md:mr-3 mr-2"
                  />
                  <Link
                    href="/contact"
                    className="hover:underline md:text-sm md:w-40 w-32 text-[8px]"
                  >
                    JALAN MELONG TENGAH RT 1 RW 21 33 JAWABARAT
                  </Link>
                </li>
                <li className="mb-4 flex">
                  <img
                    src="/images/logo/link_logo/sms.png"
                    className="md:w-6 md:h-6 w-3 h-3 md:mr-3 mr-2"
                  />
                  <Link
                    href="#"
                    className="hover:underline md:text-sm md:w-1/3 w-24 text-[7px]"
                  >
                    SAPTALOKADIGITAL@GMAIL.COM
                  </Link>
                </li>
                <li className="flex">
                  <img
                    src="/images/logo/link_logo/telp.png"
                    className="md:w-6 md:h-6 w-3 h-3 md:mr-3 mr-2"
                  />
                  <Link
                    href="#"
                    className="hover:underline md:text-sm md:w-40 w-32 text-[8px]"
                  >
                    09345345345/340435345
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <Link href="/blog" className="flex">
                <img
                  src="/images/logo/link_logo/solution.png"
                  className="md:h-6 md:w-6 w-3 h-3 md:mr-3 mr-2"
                  alt="saptaloka"
                />
                <h2 className="mb-6 md:text-xl text-[8px] font-semibold text-white uppercase ">
                  SOLUTION
                </h2>
              </Link>
              <ul className="text-white font-medium">
                <li className="mb-4 flex">
                  <img
                    src="/images/logo/link_logo/it.png"
                    className="md:w-6 md:h-6 w-3 h-3 md:mr-3 mr-2"
                  />
                  <Link
                    href="/solutions/it"
                    className="hover:underline  md:text-sm text-[8px]"
                  >
                    IT SOLUTION
                  </Link>
                </li>
                <li className="mb-4 flex">
                  <img
                    src="/images/logo/link_logo/business.png"
                    className="md:w-6 md:h-6 w-3 h-3 md:mr-3 mr-2"
                  />
                  <Link
                    href="/solutions/business"
                    className="hover:underline md:text-sm text-[8px]"
                  >
                    BUSINESS DIGITAL SOLUTION
                  </Link>
                </li>
                <li className="flex">
                  <img
                    src="/images/logo/link_logo/marketing.png"
                    className="md:w-6 md:h-6 w-3 h-3 md:mr-3 mr-2"
                  />
                  <Link
                    href="/solutions/business"
                    className="hover:underline md:text-sm text-[8px]"
                  >
                    DIGITAL MARKETING
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <Link href="/blog" className="flex">
                <img
                  src="/images/logo/link_logo/blog.png"
                  className="md:h-6 md:w-6 w-3 h-3 md:mr-3 mr-2"
                  alt="saptaloka"
                />
                <h2 className="mb-6 md:text-xl text-[8px] font-semibold text-white uppercase">
                  BLOG & NEWS
                </h2>
              </Link>
              <ul className="text-white font-medium">
                <li className="mb-4 flex">
                  <img
                    src="/images/logo/link_logo/tutorial.png"
                    className="md:w-6 md:h-6 w-3 h-3 md:mr-3 mr-2"
                  />
                  <Link
                    href="/blog"
                    className="hover:underline md:text-sm text-[8px]"
                  >
                    TUTORIAL
                  </Link>
                </li>
                <li className="flex">
                  <img
                    src="/images/logo/link_logo/stories.png"
                    className="md:w-6 md:h-6 w-3 h-3 md:mr-3 mr-2"
                  />
                  <Link
                    href="/blog"
                    className="hover:underline md:text-sm text-[8px]"
                  >
                    STORIES
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white-200 sm:mx-auto dark:border-white-700 lg:my-8" />
        <div className="block mmx-auto text-[0.65rem] text-white text-center">
          © PT SAPTALOKA DIGITAL INDONESIA 2023
        </div>
      </div>
    </footer>
  );
}
