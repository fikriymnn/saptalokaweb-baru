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
        <div className=" w-screen flex justify-center">

            <div className="bg-blue-100 rounded-lg w-4/12 p-6 my-10">
                <h1 h1 className="text-center font-bold text-sky-500 text-2xl mb-5" > LOGIN</h1 >
                <form onSubmit={(e) => Submit(e)} method="POST">
                    <div className=" grid grid-cols-1">
                        <h1 className="text-start text-lg font-bold">Email</h1>
                        <input className="w-full rounded-md" type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br />
                    <div className=" grid grid-cols-1">
                        <h1 className="text-start text-lg font-bold" >Password</h1>
                        <input type="password" className="w-full rounded-md" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className=" mt-8 grid grid-cols-1">
                        <button type="submit" className="w-full font-semibold rounded-md text-lg text-white rounded-lg bg-sky-500 px-5 py-2">LOGIN</button>
                    </div>

                </form>
            </div >
        </div >
    )
}