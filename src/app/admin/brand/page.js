"use client"
import { useState, useEffect } from "react";
import { db, storage } from "../../../../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc

} from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { format } from "date-fns";

export default function Brand() {
  //data brand
  const [brand, setBrand] = useState([]);
  //data input
  const [downloadURL, setDownloadURL] = useState("");
  //loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataBrand();
  }, []);


  const getDataBrand = async () => {
    try {
      const ordersRef = collection(db, "brand");
      const q = query(ordersRef, orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      let data = [];

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setBrand(data);
    } catch (error) {
      alert(error);
    }
  };

  const addData = async (e) => {
    e.preventDefault();
    var today = new Date();
    var date = today.getDate() + " " + format(today, "MMMM yyyy");
    const docRef = await addDoc(collection(db, "brand"), {
      img: downloadURL,
      date: date,

    });

    alert("success");
  };

  const handleUpload = async (filess) => {
    const files = filess;
    try {
      setLoading(true);
      const storageRef = ref(storage, `/brand/${files.name}`);

      // progress can be paused and resumed. It also exposes progress updates.
      // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, files);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );


        },
        (err) => console.log(err),
        () => {
          // download url

          getDownloadURL(uploadTask.snapshot.ref).then((url) => {

            setDownloadURL(url);
            setLoading(false);
          });
        }
      );
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };
  return (
    <>

      <h1 className="text-center md:mb-20 sm:mb-16 mb-5 md:mt-20 sm:mt-16 mt-5 text-3xl font-bold text-sky-500">Brand</h1>

      <div className="border-2 rounded-lg w-7/12 m-auto">
        <h1 className="text-center font-bold text-sky-500 text-2xl mt-24 md:mb-14 sm:mb-10 mb-10">Tambah Brand</h1>
        <form onSubmit={addData} method="POST">

          <div className="my-2 grid grid-cols-1">
            <h1 className="text-center text-lg font-bold">Logo</h1>
            <input className="mx-auto" type="file" onChange={(event) => handleUpload(event.target.files[0])} />
          </div>
          <br />

          <div className="my-1 grid grid-cols-1">
            {loading ? (
              <p>Loading</p>
            ) : (
              <button className="mx-auto my-10 text-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2"> submit</button>
            )}
          </div>

        </form>
      </div>

      <br />
      <br />
      <br />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center mb-20">
        {
          brand.map((data, i) => {
            return (
              <div key={i} className="flex flex-col">
                <img src={data.img} className="w-48 h-28 md:w-[400px] md:h-[240px]" />
                <button onClick={async (e) => {
                  try {
                    // Delete the todo document with the given ID from the "todos" collection in Firestore.
                    await deleteDoc(
                      doc(db, "brand", data.id)
                    );
                    alert("delete success");


                  } catch (error) {
                    alert("An error occured", error);
                  }
                }} className="mx-auto my-10 text-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2"> delete</button>
              </div>
            )
          })
        }


      </div>
    </>
  )
}