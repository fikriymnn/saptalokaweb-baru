"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

export default function Admin() {
    const { push } = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const Submit = async (e) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                alert("Login Berhasil");

                push("/admin");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                console.log(errorCode);
            });
        e.preventDefault();


    };
    return (
        <>
            <div></div>
            <div className="border-2 rounded-lg w-7/12 m-auto">
                <h1 className="text-center font-bold text-sky-500 text-2xl mt-24 md:mb-14 sm:mb-10 mb-10">LOGIN</h1>
                <form onSubmit={(e) => Submit(e)} method="POST">
                    <div className="my-2 grid grid-cols-1">
                        <h1 className="text-center text-lg font-bold">Email</h1>
                        <input className="mx-auto" type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br />
                    <div className="my-2 grid grid-cols-1">
                        <h1 className="text-center text-lg font-bold" >Password</h1>
                        <input type="password" className="mx-auto" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="my-1 grid grid-cols-1">
                        <button className="mx-auto my-10 text-lg border-2 text-white rounded-lg bg-sky-500 px-5 py-2"> submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}