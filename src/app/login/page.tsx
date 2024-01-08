"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Link } from "react-router-dom";
export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    console.log({ email, password });

    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);

        router.push("/home");
      })
      .catch((error) => {
        alert(error);
        alert("User not found");
      });
  };

  return (
    <>
      <div className=" login-page">
        <div className="form-container">
          <div className="form-content">
            <h1 className="main-title">
              Get more things done with Loggin platform.
            </h1>
            <p>
              Access to the most powerfull tool in the entire design and web
              industry.
            </p>
            <div className="email-container">
              <input
                value={email}
                placeholder="Enter Email"
                onChange={handleEmail}
                type="email"
              />
            </div>
            <div className="password-container">
              <input
                value={password}
                placeholder="Enter Password"
                onChange={handlePassword}
                type="text"
              />
            </div>
            <button type="submit" onClick={handleApi}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
