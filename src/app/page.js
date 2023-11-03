import Carousel from "@/components/Carousel";
import Slide from "@/components/Slide";
import Card from "@/components/Card";
import BlogCard from "@/components/BlogCard";
import { cardContent } from "./content";
import { db, storage } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,

} from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

async function getdataBrand() {
  let data = [];
  try {
    const ordersRef = collection(db, "brand");
    const q = query(ordersRef, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);


    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      data.push({ ...doc.data(), id: doc.id });
    });

  } catch (error) {
    alert(error);
  }
  return data;
}


export default async function Home() {
  const brand = await getdataBrand();
  return (
    <>
      <Carousel />
      <div className="text-center m-10 sm:m-14 md:m-20">
        <h1 className="font-bold text-lg sm:text-2xl md:text-4xl md:mb-10 mb-5 show">
          OUR SOLUTIONS WILL LEAD YOUR BUSINESS TO DIGITAL TRANSFORMATION
        </h1>
        <h3 className="font-bold text-sm sm:text-lg md:text-2xl show">
          SAPTALOKA DIGITAL IS MADE OF THREE CORE BUSINESS
        </h3>
      </div>
      <div className="flex justify-center flex-wrap md:flex-nowrap">
        {/* tidak dinamis */}
        {
          cardContent.map((a, key) => {
            return (
              <Card url={a.url} title={a.title} desc={a.desc} key={key} />
            )
          })
        }
      </div>

      <div className="bg-no-repeat flex justify-end my-14 md:my-24 w-full h-1/6 bg-[url('/images/home/core_value/bg.png')]">
        <img
          src="/images/home/core_value/text.png"
          className="md:h-full sm:h-9/12 h-6/12 w-6/12 md:w-4/12 md:mr-5"
        />
      </div>
      <div>
        {/* DINAMIS INPUT ARRAY ISI LINK URL BRAND */}
        <Slide logo={
          brand.map((data, i) => data.img)
        } />
      </div>
      <br />
      <br />
      <div className="text-center md:mb-6 mb-3">
        <h1 className="md:mt-20 sm:mt-14 mt-10 font-bold md:text-2xl text-xl md:mb-10 mb-3">LASTEST NEWS</h1>
        <div className="w-full overflow-auto">
          <div className="flex md:w-full w-[600px] justify-center md:justify-evenly">
            {/* DiNAMIS INPUT 3 BLOG CARD TERBARU */}
            <BlogCard
              image={'/images/news/recent/cblog.png'}
              title={"Informatika pada sehari hari"}
              slug={'/informatika'}

            />
            <BlogCard
              image={'/images/news/recent/cblog.png'}
              title={"Informatika pada sehari hari"}
              slug={'/informatika'}

            />
            <BlogCard
              image={'/images/news/recent/cblog.png'}
              title={"Informatika pada sehari hari"}
              slug={'/informatika'}

            />
          </div>
        </div>
      </div>
    </>
  );
}
