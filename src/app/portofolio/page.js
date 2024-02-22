import PortoCard from "@/components/PortoCard";
import { db, storage } from "../../../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

async function getdataPorto() {
  let data = [];
  try {
    const ordersRef = collection(db, "porto");
    const q = query(ordersRef, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      data.push({ ...doc.data(), id: doc.id });
    });
  } catch (error) {
    alert(error);
  }
  return data;
}

export default async function portofolio() {
  const porto = await getdataPorto();
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-[url('/images/news/recent/cblog.png')] bg-no-repeat w-full md:h-[600px] ">
        <div className="bg-cover bg-no-repeat bg-[url('/images/about/banner/blue.png')] w-full bg-no-repeat h-full z-10 text-center items-center">
          <h1 className="font-bold md:text-5xl sm:text-4xl mx-3 text-2xl text-white pb-14 pt-16 md:pt-32 md:pb-24">
            PORTOFOLIO
          </h1>
          <h5 className="font-bold md:pb-24 pb-14 text-white md:text-3xl text-lg sm:text-xl">
            PT SAPTALOKA DIGITAL INDONESIA
          </h5>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-16 justify-evenly my-16">
          {/* DINAMIS PORTOFOLIO CARD */}
          {porto.map((data, i) => {
            return (
              <PortoCard
                key={i}
                src={data.img}
                title={data.title}
                desc={data.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
