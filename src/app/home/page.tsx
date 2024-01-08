"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);
  return (
    <>
    <div className="main-page">
      <h1 className="main-title">You Are Suceesfully Logged In</h1>
      <h3 className="subtitle"> This is Your Home Page</h3>
      <button
        onClick={() => {
          localStorage.removeItem('token')
          console.log('logout');
          window.location.href = "/";

        }}
      >
        Logout
      </button>
    </div>
    </>
  );
}
