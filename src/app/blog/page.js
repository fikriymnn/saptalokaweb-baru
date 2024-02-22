import BlogCard from "@/components/BlogCard";
import CarouselBlog from "@/components/CarouselBlog";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  getDoc,
  deleteDoc,
  updateDoc,
  doc,
  Firestore,
  orderBy,
  limit,
} from "firebase/firestore";
import { db, storage } from "../../../firebase/firebase";

async function getDataBlogStory() {
  let data = [];
  try {
    const ordersRef = collection(db, "blog");
    const q = query(
      ordersRef,
      where("category", "==", "Story"),
      orderBy("date", "desc"),
      limit(4)
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

async function getDataBlogTutorial() {
  let data = [];
  try {
    const ordersRef = collection(db, "blog");
    const q = query(
      ordersRef,
      where("category", "==", "Tutorial"),
      orderBy("date", "desc"),
      limit(4)
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

export default async function Blog() {
  const dataBlogStory = await getDataBlogStory();
  const dataBlogTutorial = await getDataBlogTutorial();
  const dataBlog = await getDataBlog();

  return (
    <div className="w-full items-center">
      <div className="bg-cover bg-no-repeat bg-[url('/images/about/banner/foto.png')] w-full md:h-[600px] h-[300px]">
        <div className="bg-cover bg-[url('/images/about/banner/blue.png')] w-full h-full z-10 text-center items-center">
          <h1 className="font-bold md:text-5xl text-2xl text-white md:pb-16 pb-10 pt-20 md:pt-56">
            BLOG AND NEWS
          </h1>
          <h5 className="font-bold w-full w-20 text-white md:text-3xl text-sm">
            BLOG AND LASTEST NEWS ABOUT INFORMATION TECHNOLOGY
          </h5>
        </div>
      </div>
      <div>
        <h1 className="md:ml-8 ml-4 text-lg md:text-4xl mt-5 md:mt-8 md:mb-5 font-bold text-blue-800">
          RECENT POST
        </h1>
        {/* DINAMIS DI COMPONENT CAROUSEL BLOG , 4 BLOG TERBARU CATEGORY (CAMPUR)*/}
        <CarouselBlog dataBlog={dataBlog} />
      </div>
      <br />
      <div className="w-full grid grid-cols-2 md:flex">
        <img
          src="/images/news/story/story.png"
          className="col-start-1 md:h-96 h-68"
        />
        <div className="overflow-auto w-full">
          <div className="flex flex-nowrap justify-evenly md:w-full w-[640px] md:h-auto col-start-2 content-center">
            {/* DINAMIS 4 BLOG TERBARU KATEGORI STORY  */}
            {dataBlogStory.map((data, i) => {
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
      </div>

      <div className="bg-cover w-full grid grid-cols-2 md:flex">
        <div className="overflow-auto w-full">
          <div className="flex flex-nowrap flex-row-reverse justify-evenly md:w-full md:h-auto w-[640px] col-start-1 content-center">
            {/* DINAMIS 3 BLOG TERBARU KATEGORI TUTORIAL  */}
            {dataBlogTutorial.map((data, i) => {
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
        <img
          src="/images/news/tutorial/tutorial.png"
          className="col-start-2 md:h-96 h80"
        />
      </div>
      <div className="mt-4 md:mt-0 w-full items-center flex justify-center md:grid md:grid-cols-4 md:gap-2 md:mb-16 mb-5">
        {/* <div className="cursor-pointer md:col-start-1 text-center mx-auto ">
            <h1 className="font-bold md:text-3xl text-xl text-blue-600 hover:text-blue-800">PREVIOUS</h1>
        </div>
        <div className="cursor-pointer md:col-start-3 text-center mx-auto">
            <h1 className="font-bold md:text-3xl text-xl text-blue-600 hover:text-blue-800">NEXT</h1>
        </div> */}
      </div>
    </div>
  );
}
