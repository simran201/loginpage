'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
const loggedIn=()=>{
  router.push("/login");

}
  return (
    <main className="main-page ">
      <div className="main-title">
        <h2>Welcome to my page !</h2>
      </div>
      <h4 className="subtitle">Loggin to enjoy and see more benifits</h4>
      <button onClick={loggedIn}>Go to login Page ! Click here😒</button>
    </main>
  );
}
