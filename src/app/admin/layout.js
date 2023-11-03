"use client";

import { redirect } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
    const { push } = useRouter();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                children;


            } else {
                push("/");

            }
        });
    }, []);

    return (
        <>
            {children}

        </>
    );
}