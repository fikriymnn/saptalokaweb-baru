"use client"
import { useState, useEffect } from "react";
import AdminCard from "@/components/AdminCard";
import { db, storage } from "../../../../firebase/firebase";
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
import { format } from "date-fns";

export default function BlogAdmin() {
    // data blog
    const [blog, setBlog] = useState([]);
    //data input
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [time, setTime] = useState("");
    const [file, setFile] = useState("");
    const [downloadURL, setDownloadURL] = useState("");
    //loading
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDataBlog();
    }, []);


    const getDataBlog = async () => {
        try {
            const ordersRef = collection(db, "blog");
            const q = query(ordersRef, orderBy("date", "desc"));
            const querySnapshot = await getDocs(q);
            let data = [];

            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                data.push({ ...doc.data(), id: doc.id });
            });
            setBlog(data);
        } catch (error) {
            alert(error);
        }
    };


    const addData = async (e) => {
        e.preventDefault();
        var today = new Date();
        var date = today.getDate() + " " + format(today, "MMMM yyyy");
        const docRef = await addDoc(collection(db, "blog"), {
            title: title,
            description: description,
            category: category,
            author: author,
            img: downloadURL,
            date: date,

        });

        alert("success");
    };


    const handleUpload = async (filess) => {
        const files = filess;
        try {
            setLoading(true);
            const storageRef = ref(storage, `/blog/${files.name}`);

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

            <h1 className="text-center md:mb-20 sm:mb-16 mb-5 md:mt-20 sm:mt-16 mt-5 text-3xl font-bold text-sky-500">BLOG</h1>

            <div className="border-2 rounded-lg w-7/12 m-auto">
                <h1 className="text-center font-bold text-sky-500 text-2xl mt-24 md:mb-14 sm:mb-10 mb-10">Tambah blog</h1>
                <form onSubmit={addData} method="POST" className="px-5">
                    <div className="my-2 grid grid-cols-1">
                        <h1 className=" text-lg font-bold">Title</h1>
                        <input name="title" className="" type="text" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <br />
                    <div className="my-2 grid grid-cols-1">
                        <h1 className=" text-lg font-bold">Description</h1>
                        <input name="description" className="" type="text" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <br />
                    <div className="my-2 grid grid-cols-1">
                        <h1 className=" text-lg font-bold">Author</h1>
                        <input name="author" className="" type="text" onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <br />
                    <div className="my-2 grid grid-cols-1">
                        <h1 className=" text-lg font-bold">Category</h1>
                        <input name="category" className="" type="text" onChange={(e) => setCategory(e.target.value)} />

                    </div>

                    <br />
                    <div className="my-2 grid grid-cols-1">
                        <h1 className=" text-lg font-bold">Image</h1>
                        <input className="" type="file" onChange={(event) => handleUpload(event.target.files[0])} />
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
                    blog.map((data, i) => {
                        return <AdminCard key={i} title={data.title} id={data.id} image={data.img} />
                    })
                }


            </div>
        </>
    )
}