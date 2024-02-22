"use client"
import { useState, useEffect } from "react";
import { db, storage } from "../../../../../firebase/firebase";
import {
    getDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { useRouter } from "next/navigation";
export default function BlogDetail({ params }) {
    const router = useRouter()
    const { id } = params
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [time, setTime] = useState("");
    const [downloadURL, setDownloadURL] = useState("");


    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState("");

    useEffect(() => {
        getDataArticles(id);
    }, [id]);

    const getDataArticles = async (idd) => {
        try {
            const docRef = doc(db, "blog", idd);
            const querySnapshot = await getDoc(docRef);

            // if (querySnapshot.exists()) {
            //   console.log("Document data:", querySnapshot.data());
            // } else {
            //   // docSnap.data() will be undefined in this case
            //   console.log("No such document!");
            // }
            let data = [];

            // doc.data() is never undefined for query doc snapshots

            data.push(querySnapshot.data());

            setTitle(data[0].title);
            setDescription(data[0].description);
            setCategory(data[0].category);
            setAuthor(data[0].author);

        } catch (error) {
            alert(error);
        }
    };

    const editData = async (e, idd) => {
        e.preventDefault();
        const todoRef = doc(db, "blog", idd);

        if (file == "") {
            await updateDoc(todoRef, {
                title: title,
                description: description,
                category: category,
                author: author,
            });
        } else {
            await updateDoc(todoRef, {
                title: title,
                description: description,
                category: category,
                author: author,
                img: downloadURL,
            });
        }

        alert("success");
    };




    const handleUpload = async (filess) => {
        const files = filess;
        try {
            setLoading(true);
            setFile(files.name);
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

            <h1 className="text-center md:mb-20 sm:mb-16 mb-5 md:mt-20 sm:mt-16 mt-5 text-3xl font-bold text-sky-500">Detail blog</h1>

            <div className="border-2 rounded-lg w-7/12 m-auto">
                <h1 className="text-center font-bold text-sky-500 text-2xl mt-24 md:mb-14 sm:mb-10 mb-10">BLOOG</h1>
                <form method="POST">
                    <div className="my-2 grid grid-cols-1">
                        <h1 className=" text-lg font-bold">Titlee</h1>
                        <input name="title" className="" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <br />
                    <div className="my-2 grid grid-cols-1">
                        <h1 className=" text-lg font-bold">Description</h1>
                        <input name="description" className="" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <br />
                    <div className="my-2 grid grid-cols-1">
                        <h1 className=" text-lg font-bold">Author</h1>
                        <input name="author" className="" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                    <br />
                    <br />
                    <div className="my-2 grid grid-cols-1">
                        <h1 className=" text-lg font-bold">category</h1>
                        <input name="category" className="" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
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
                            <button onClick={(e) => editData(e, id)} className=" mt-5 text-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2"> update</button>
                        )}

                    </div>
                    <div className="my-1 grid grid-cols-1">
                        <button onClick={async (e) => {
                            try {
                                // Delete the todo document with the given ID from the "todos" collection in Firestore.
                                await deleteDoc(
                                    doc(db, "blog", id)
                                );
                                alert("delete success");


                            } catch (error) {
                                alert("An error occured", error);
                            }
                        }} className=" mb-5 ext-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2"> delete</button>
                    </div>

                </form>
            </div>
        </>
    )
}