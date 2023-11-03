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

            <h1 className="text-center md:mb-20 sm:mb-16 mb-5 md:mt-20 sm:mt-16 mt-5 text-3xl font-bold text-sky-500">Detail portofolio</h1>

            <div className="border-2 rounded-lg w-7/12 m-auto">
                <h1 className="text-center font-bold text-sky-500 text-2xl mt-24 md:mb-14 sm:mb-10 mb-10">PORTOFOLIO</h1>
                <form onSubmit={(e) => editData(e, id)} method="POST">
                    <div className="my-2 grid grid-cols-1">
                        <h1 className="text-center text-lg font-bold">Title</h1>
                        <input name="title" className="mx-auto" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <br />
                    <div className="my-2 grid grid-cols-1">
                        <h1 className="text-center text-lg font-bold">Description</h1>
                        <input name="description" className="mx-auto" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <br />
                    <div className="my-2 grid grid-cols-1">
                        <h1 className="text-center text-lg font-bold">Image</h1>
                        <input className="mx-auto" type="file" onChange={(event) => handleUpload(event.target.files[0])} />
                    </div>
                    <br />

                    <div className="my-1 grid grid-cols-1">
                        {loading ? (
                            <p>Loading</p>
                        ) : (
                            <button onClick={(e) => editData(e, id)} className="mx-auto mt-5 text-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2"> update</button>
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
                        }} className="mx-auto mb-5 ext-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2"> delete</button>
                    </div>

                </form>
            </div>
        </>
    )
}