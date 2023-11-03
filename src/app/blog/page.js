import BlogCard from "@/components/BlogCard";
import CarouselBlog from "@/components/CarouselBlog";

// async function getDataBlogStory() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_URL}/api/blogs?populate=image&filters[category][$eq]=story&pagination[start]=0&pagination[limit]=3&sort=id:desc`,{ cache: "no-store" }
//   );
//   return res.json();
// }

// async function getDataBlogTutorial() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_URL}/api/blogs?populate=image&filters[category][$eq]=tutorial&pagination[start]=0&pagination[limit]=3&sort=id:desc`,{ cache: "no-store" }
//   );
//   return res.json();
// }

export default async function Blog() {
  // const dataBlogStory = await getDataBlogStory();
  // const dataBlogTutorial = await getDataBlogTutorial();
  

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
        <CarouselBlog />
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
      
      <div className="bg-cover w-full grid grid-cols-2 md:flex">
        <div className="overflow-auto w-full">
          <div className="flex flex-nowrap flex-row-reverse justify-evenly md:w-full md:h-auto w-[640px] col-start-1 content-center">
          {/* DINAMIS 3 BLOG TERBARU KATEGORI TUTORIAL  */}
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
