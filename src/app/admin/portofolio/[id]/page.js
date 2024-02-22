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

export default function PortofolioDetail({ params }) {
    const { id } = params
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [downloadURL, setDownloadURL] = useState("");


    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState("");

    useEffect(() => {
        getDataPorto(id);
    }, [id]);

    const getDataPorto = async (idd) => {
        try {
            const docRef = doc(db, "porto", idd);
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


        } catch (error) {
            alert(error);
        }
    };

    const editData = async (e, idd) => {
        e.preventDefault();
        const todoRef = doc(db, "porto", idd);

        if (file == "") {
            await updateDoc(todoRef, {
                title: title,
                description: description,



            });
        } else {
            await updateDoc(todoRef, {
                title: title,
                description: description,

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
                <a href="/admin/portofolio" className="h-full p-3 bg-blue-500 hover:bg-blue-400 text-white rounded-md">BACK</a>

                <h1 className="text-3xl text-sky-500">DETAIL PORTOFOLIO</h1>
                <div className="h-full p-3 bg-red-300 opacity-0">BACK</div>
            </div>

            <div className="bg-blue-100 rounded-lg w-7/12 m-auto p-6">
                <p className="text-xl font-bold mb-2 text-sky-500">DETAIL</p>
                <form onSubmit={(e) => editData(e, id)} method="POST">
                    <div className="grid grid-cols-1">
                        <h1 className="text-start text-lg font-bold">Title</h1>
                        <input name="title" className="w-full rounded-md" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <br />
                    <div className="grid grid-cols-1">
                        <h1 className="text-start text-lg font-bold">Description</h1>
                        <textarea rows={5} name="description" className="w-full rounded-md" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
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
                            <button onClick={(e) => editData(e, id)} className="w-full mt-5 text-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2 font-semibold"> UPDATE PORTOFOLIO</button>
                        )}

                    </div>
                    <div className="my-1 grid grid-cols-1">
                        <button onClick={async (e) => {
                            try {
                                // Delete the todo document with the given ID from the "todos" collection in Firestore.
                                await deleteDoc(
                                    doc(db, "porto", id)
                                );
                                alert("delete success");


                            } catch (error) {
                                alert("An error occured", error);
                            }
                        }} className="w-full mt-5 text-lg border-2 text-white rounded-lg bg-red-500 px-5 py-2 font-semibold"> DELETE PORTOFOLIO</button>
                    </div>

                </form>
            </div>
        </>
    )
}