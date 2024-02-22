import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  getDoc,
  updateDoc,
  doc,
  Firestore,
  orderBy,
  limit,
} from "firebase/firestore";
import { db, storage } from "../../../../firebase/firebase";
import { data } from "autoprefixer";

async function getDataBlogOne(id) {
  let data = {};

  try {
    const docRef = doc(db, "blog", id);
    const querySnapshot = await getDoc(docRef);

    data = querySnapshot.data();
  } catch (error) {
    console.log(error);
  }
  return data;
}

async function getDataBlog() {
  let data = [];
  try {
    const ordersRef = collection(db, "blog");
    const q = query(
      ordersRef,

      orderBy("date", "desc"),
      limit(3)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      data.push({ ...doc.data(), id: doc.id });
    });
  } catch (error) {
    console.log(error);
  }
  return data;
}

export default async function DetailBlog({ params }) {
  const dataBlogOne = await getDataBlogOne(params.slug);

  const dataBlog = await getDataBlog();
  // const blog = await dataBlogOne.data[0].attributes

  return (
    <>
      <div
        className="bg-cover bg-no-repeat w-full md:h-[600px] h-[300px]"
        style={{ backgroundImage: `url(/images/news/recent/cblog.png)` }}
      >
        <div className="bg-cover bg-[url('/images/solution/banner/rectangle14.png')] w-full h-full z-10 text-center items-center">
          <h1 className="font-bold sm:text-2xl text-sm md:text-5xl text-white mx-5 md:mx-14 md:pb-16 pb-9 md:pt-40 pt-20">
            {/* TITLE */}
            {dataBlogOne.title}
          </h1>
          <div className="flex justify-center md:pb-16 sm:pb-16 pb-3">
            <Link
              href="#"
              className="border-r-black text-white sm:text-base text-[8px] md:text-lg font-bold uppercase "
            >
              {/* Author */}
              {dataBlogOne.author}
            </Link>
            <hr className="border-transparent w-0.5 md:h-8 h-3 bg-white md:mx-4 mx-1" />
            <Link
              href="#"
              className="border-r-black text-white sm:text-base text-[8px] md:text-lg font-bold"
            >
              {/* TANGGAL */}
              {dataBlogOne.date}
            </Link>
          </div>
          <h1 className="uppercase md:text-2xl sm:text-lg text-xs font-bold text-white md:pb-14 pb-2 mx-auto">
            {/* CATEGORY */}
            {dataBlogOne.category}
          </h1>
        </div>
      </div>
      <div>
        <img
          src={dataBlogOne.img}
          className="md:w-[600px] md:h-[330px] sm:w-64 sm:h-40  w-48 h-32 md:px-10 md:pb-5 px-4 pb-2 float-left"
        />

        <h4 className="font-normal md:text-lg text-sm md:m-16 m-4">
          {/* CONTENT */}
          {dataBlogOne.description}
        </h4>
      </div>
      <div
        style={{ backgroundImage: "url(/images/news/rectangle18.png)" }}
        className="md:mt-[330px] sm:mt-40 mt-32 bg-cover bg-no-repeat w-full md:h-20 h-14 text-center py-5"
      >
        <h1 className="mx-auto my-auto md:text-2xl sm:text-xl text-lg font-bold text-white md:pb-10 pb-7">
          OTHER POSTS
        </h1>
      </div>
      <div className="overflow-auto w-full">
        <div className="flex flex-nowrap md:w-full w-[900px] justify-evenly md:py-8 py-1">
          {/* DINAMIS 3 BLOG TERBARU CATEGORY (CAMPUR)*/}
          {dataBlog.map((data, i) => {
            return (
              <BlogCard
                key={i}
                image={data.img}
                title={data.title}
                slug={"/" + data.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
