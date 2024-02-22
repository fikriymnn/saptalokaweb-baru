import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCWVTEr_HpkoVXvzbihhhOkhSzeH0Z_I3M",
//   authDomain: "saptaloka-web.firebaseapp.com",
//   projectId: "saptaloka-web",
//   storageBucket: "saptaloka-web.appspot.com",
//   messagingSenderId: "477492485536",
//   appId: "1:477492485536:web:2b885824978e928dc0d8c5"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const metadata = {
  title: "Saptaloka Digital",
  description: "PT Saptaloka Digital Indonesia",
  icons: {
    icon: "/images/logo/saptaloka_logo/saptaloka.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo/saptaloka_logo/saptaloka.png" />
      </Head>
      <body>
        <Navbar />
        <div className="md:mt-20 sm:mt-16 mt-16">{children}</div>

        <Footer />
      </body>
    </html>
  );
}

export const revalidate = 3;
