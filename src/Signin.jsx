import { ArrowBack, ArrowLeft, ArrowRight } from "react-huge-icons/outline";
import image from "./assets/smallKay.jpg";
import { useState } from "react";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    console.log({ email, password });
  };

  return (
    <>
      <div className="flex justify-start items-center px-2">
        <ArrowLeft className="" onClick={() => history.back()} />
        <p>back</p>
      </div>

      <section className="flex justify-center items-center gap-2 px-44 h-screen flex-col max-sm:px-0">
        <img src={image} className="w-20 h-20 rounded-full object-cover" />
        <h1 className="text-sm text-left">Sign-in as admin</h1>
        <div className="block relative py-3 gap-2 items-center  h-96 px-2 rounded-md max-sm:w-full">
          <p>Email</p>
          <input
            type="text"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" py-2  rounded-sm border border-gray-300 w-96 max-sm:w-full px-2 outline-sky-500"
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="py-2  border border-gray-300 w-96 max-sm:w-full px-2 outline-sky-500"
          />
          <div className="flex max-sm:justify-end  justify-center w-full mt-2">
            <button className="" onClick={handleSignin}>
              {" "}
              proceed <ArrowRight className="inline" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
