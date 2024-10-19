"use client";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa6";
import Link from "next/link";

import { useEffect, useState } from "react";

const SignUp: React.FC = () => {

  // State variables for user input and error messages
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  


  const [errUsername, setErrUserName] = useState<string>("");
  const [errEmail, setErrEmail] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");
  

  

  // Handlers for input changes
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserName(e.target.value);
    setErrUserName("");
  };

  const emailValidation = (email: string): boolean => {
    // Simple regex for email validation
    return (
      String(email)
        .toLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) !== null
    );
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
    setErrMessage("");
  };

  // Main registration handler
  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous error messages
    setErrUserName("");
    setErrEmail("");
    setErrMessage("");
    
    let hasError = false;

    // Validate userName
    if (!userName) {
      setErrUserName("Enter your name");
      hasError = true;
    } else if (userName.length > 15) {
      setErrUserName("Name should not exceed 15 characters.");
      hasError = true;
    }
    
    // Validate email
    if (!email) {
      setErrEmail("Enter your email");
      hasError = true;
    } else if (!emailValidation(email)) {
      setErrEmail("Enter a valid email");
      hasError = true;
    } else if (email.length > 25) {
      setErrEmail("Email should not exceed 25 characters."); // Corrected length
      hasError = true;
    }
    
    // Validate password
    if (!message) {
        setErrMessage("Enter Message ");
      hasError = true;
    } 
    
    

    
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex-grow bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          
          <form
            onSubmit={handleRegistration}
            className="w-full flex flex-col items-start bg-white border border-zinc-200 rounded-md shadow-md p-6 mt-0"
          >
            <h2 className="text-3xl font-medium mb-4">Contact Us</h2>
            <div className="w-full flex flex-col gap-1">
              <div className="flex flex-col">
                <p className="text-sm font-medium mb-1">Name</p>
                <input
                  type="text"
                  value={userName}
                  onChange={handleUserName}
                  className="w-full text-sm bg-white outline-none border border-zinc-400 py-1.5 px-3 focus:border-yellow-500"
                />
                <p className="text-red-600 text-xs font-bold flex items-center gap-1.5 mt-1">
                  {errUsername && (
                    <>
                      <span className="italic font-extrabold">!</span>
                      {errUsername}
                    </>
                  )}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-medium mb-1">Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  className="w-full text-sm bg-white outline-none border border-zinc-400 py-1.5 px-3 focus:border-yellow-500"
                />
                <p className="text-red-600 text-xs font-bold flex items-center gap-1.5 mt-1">
                  {errEmail && (
                    <>
                      <span className="italic font-extrabold">!</span>
                      {errEmail}
                    </>
                  )}
                </p>
                
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-medium mb-1">Message</p>
                <textarea
  value={message}
  className="w-full text-sm bg-white outline-none border border-zinc-400 py-1.5 h-40 px-3 focus:border-yellow-500 resize-none"
  rows={4} // Adjust the number of rows as needed
/>

                <p
                  className="text-red-600 text-xs font-bold flex items-center gap-1.5 mt-1"
                  style={{ minHeight: "1rem" }}
                >
                  {errMessage && (
                    <>
                      <span className="italic font-extrabold">!</span>
                      {errMessage}
                    </>
                  )}
                </p>
              </div>
              
              <button
                type="submit"
                className="rounded-lg text-black w-full font-bold mt-2  px-3 py-3 bg-[#f4bb1e] shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
              >
                Submit
              </button>

            </div>
            
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;