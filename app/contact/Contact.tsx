"use client";


import {  useState } from "react";

const SignUp: React.FC = () => {

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  


  const [errUsername, setErrUserName] = useState<string>("");
  const [errEmail, setErrEmail] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");
  

  

 
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserName(e.target.value);
    setErrUserName("");
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
    setErrEmail("");
  };

  
  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  
    setErrUserName("");
    setErrEmail("");
    setErrMessage("");
    


    
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

  className="w-full text-sm bg-white outline-none border border-zinc-400 py-1.5 h-40 px-3 focus:border-yellow-500 resize-none"
  rows={4} 
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