'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const loginPage = () => {
    router.push("/login");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="main-page">
        <h1 className="main-title">Welcome To My page</h1>
        <p> To pursue all the benifits please log in !😀</p>
        <button onClick={loginPage}>Go to Log In Page</button>
      </div>
    </main>
  );
}
