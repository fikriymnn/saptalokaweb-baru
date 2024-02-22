"use client";
import { useState, useEffect } from "react";
import AdminCard from "@/components/AdminCard";
import AdminPortoCard from "@/components/AdminPortoCard";
import { db, storage } from "../../../../firebase/firebase";
import {
    collection,
    addDoc,
    getDocs,
    orderBy,
    query,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { format } from "date-fns";

export default function PortofolioAdmin() {
    //data porto
    const [porto, setPorto] = useState([]);
    //data input
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [downloadURL, setDownloadURL] = useState("");
    //loading
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDataPorto();
    }, []);

    const getDataPorto = async () => {
        try {
            const ordersRef = collection(db, "porto");
            const q = query(ordersRef, orderBy("date", "desc"));
            const querySnapshot = await getDocs(q);
            let data = [];

            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots

                data.push({ ...doc.data(), id: doc.id });
            });
            setPorto(data);
        } catch (error) {
            alert(error);
        }
    };

    const addData = async (e) => {
        e.preventDefault();
        var today = new Date();
        var date = today.getDate() + " " + format(today, "MMMM yyyy");
        const docRef = await addDoc(collection(db, "porto"), {
            title: title,
            description: description,

            img: downloadURL,
            date: date,
        });

        alert("success");
        location.reload();
    };

    const handleUpload = async (filess) => {
        const files = filess;
        try {
            setLoading(true);
            const storageRef = ref(storage, `/porto/${files.name}`);

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
            <div className="w-7/12 m-auto flex justify-between text-center md:mb-4 sm:mb-4 mb-3 md:mt-20 sm:mt-16 mt-5  font-bold ">
                <a href="/admin" className="h-full p-3 bg-blue-500 hover:bg-blue-400 text-white rounded-md">BACK</a>

                <h1 className="text-3xl text-sky-500">PORTOFOLIO</h1>
                <div className="h-full p-3 bg-red-300 opacity-0">BACK</div>
            </div>

            <div className="bg-blue-100 rounded-lg w-7/12 m-auto p-6">

                <form onSubmit={addData} method="POST">
                    <p className="text-xl font-bold mb-2 text-sky-500">ADD NEW PORTOFOLIO</p>
                    <div className=" grid grid-cols-1">
                        <h1 className="text-start text-lg font-bold">Title</h1>
                        <input
                            name="title"
                            className="w-full rounded-md"
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className=" grid grid-cols-1">
                        <h1 className="text-start text-lg font-bold">Description</h1>
                        <textarea
                            rows={5}
                            name="description"
                            className="w-full rounded-md"
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className=" grid grid-cols-1">
                        <h1 className="text-start text-lg font-bold">Image</h1>
                        <div className="w-full rounded-md bg-white border border-slate-600 flex justify-center py-5">

                            <input className='rounded-md bg-slate-200' type="file" onChange={(event) => handleUpload(event.target.files[0])} />
                        </div>
                    </div>

                    <br />

                    <div className="my-1 grid grid-cols-1">
                        {loading ? (
                            <p>Loading</p>
                        ) : (
                            <button className="w-full font-semibold rounded-md text-lg text-white rounded-lg bg-sky-500 px-5 py-2">SUBMIT</button>
                        )}
                    </div>
                </form>
            </div>

            <br />
            <br />
            <br />
            <h1 className="text-center md:mb-4 sm:mb-4 mb-3 md:mt-20 sm:mt-16 mt-5 text-3xl font-bold text-sky-500">OUR PORTOFOLIO</h1>
            <div className="px-10 w-full h-full">

                <div className="grid md:grid-cols-3 bg-blue-100 rounded-md sm:grid-cols-2 grid-cols-1 justify-items-center mb-20 p-10">
                    {porto.map((data, i) => {
                        return (
                            <AdminPortoCard
                                key={i}
                                title={data.title}
                                id={data.id}
                                image={data.img}
                            />
                        );
                    })}


                </div>
            </div>


        </>
    );
}
