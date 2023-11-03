"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import { SignIn } from "../../api/AuthenticationAPI";

export function LogInComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  async function handleLogIn() {
    try {
      setError(false);
      const result = await SignIn({ email, password });
      if (!result) {
        console.error('no user');
        return;
      }
      const postResult = await fetch("/api/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Authorization" : `Bearer ${await result.user.getIdToken()}`
        }
      });

      if (postResult.status === 200) {
        return router.push('/auth/profile');
      }

      // If not 200, means something wrong with the server
      setError(true);
      setErrorMessage('Something wrong with the server, didnt get 200 ok');

    } catch (error) {
      if (error instanceof Error && "code" in error) {
        switch (error.code) {
          case "auth/weak-password":
            setErrorMessage("Password should be at least 6 characters");
            break;
          case "auth/invalid-email":
            setErrorMessage("Invalid email");
            break;
          default:
            setErrorMessage("An unexpected error occurred");
        }
        console.error(`Error: ${error.message} code: ${error.code}`);
      } else {
        console.error(`An unexpected error occurred: ${error}`);
        setErrorMessage("An unexpected error occurred");
      }
      setError(true);
    }
  }

  return (
    <div className="flex flex-col m-4">
      <div className="flex flex-col mb-6">
        <input
          type="text"
          className="text-black focus:outline-none border-b-2 border-gray-400 mb-2"
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className="text-black text-xs">Email</p>
      </div>
      <div className="flex flex-col mb-6">
        <input
          type="text"
          className="text-black focus:outline-none border-b-2 border-gray-400 mb-2"
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="text-black text-xs">Password</p>
      </div>

      <div className="flex flex-row">{/* Checkbox here*/}</div>
      {error && <span className="text-red-500 m-4">{errorMessage}</span>}
      <Button className="w-20 self-center" size="large" onClick={handleLogIn}>
        Login
      </Button>
    </div>
  );
}
