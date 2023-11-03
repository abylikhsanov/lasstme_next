"use client";

import { useState } from "react";
import AppHeader from "../components/AppHeader";
import { Button } from "antd";
import { SignUp } from "../api/AuthenticationAPI";
import { SignUpComponent } from "./components/SignUpComponent";
import { LogInComponent } from "./components/LogInComponent";

export default function SignUpPage() {
  const [isLoginPage, setIsLoginPage] = useState(false);

  return (
    <div className="flex flex-col bg-white">
      <AppHeader />
      <div className="flex flex-col self-center justify-around bg-gray-50 w-96 m-8">
        <div className="flex flex-row justify-around p-8">
          <div className={`border-b-2 cursor-pointer ${isLoginPage ? 'border-transparent' : 'border-black'}`}>
            <p className="text-black font-bold m-2" onClick={() => setIsLoginPage(false)}>Create account</p>
          </div>
          <div className={`border-b-2 hover:cursor-pointer ${isLoginPage ? 'border-black' : 'border-transparent'}`}>
            <p className="text-black font-bold m-2" onClick={() => setIsLoginPage(true)}>Sign in</p>
          </div>
        </div>
        {isLoginPage ? <LogInComponent /> : <SignUpComponent />}
      </div>
    </div>
  );
}
