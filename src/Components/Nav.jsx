import { Link } from "react-scroll";
// import { Link as link } from "react-router-dom";
import cv from "../assets/Kamil LawalCV.pdf";
import {

  MenuLineHorizontal,
  RemoveRectangle,
} from "react-huge-icons/outline";
import ceo from "../assets/smallKay.jpg";
import { useState } from "react";
import ActivityNav from "./ActivityNav";
const Nav = () => {
  const [openNav, setOpenNAv] = useState(false);
  const handleOpenNav = () => {
    setOpenNAv(!openNav);
  };

  return (
    <>
      <div className="flex justify-between sticky top-0 left-0  z-10 right-0 bg-gray-50 p-10 h-[7rem] max-sm:h-[4rem] flex-row  items-center   max-sm:px-2">


        <div className="relative w-1/2 p-2 max-sm:p-1 h-auto hover:bg-blue-950 bg-blue-900 rounded-full">
          <div className="relative  flex justify-start items-center   w-1/2 max-sm:w-full">
            <div className="rounded-full p-2    flex justify-center animate-pulse items-center  bg-blue-950 ">
              <img onClick={() => alert("okay")} src={ceo} className="w-14 h-14 max-sm:h-10 max-sm:w-10 object-cover rounded-full" /></div>
            <h1 className="  px-2 text-gray-50 text-5xl max-sm:text-xl font-extrabold py-1">
              KAYLAW

            </h1> </div>
        </div>

        <nav className="flex h-auto justify-around gap-2 max-sm:hidden">
          <Link
            to="about"
            smooth={true}
            className=" rounded-md text-blue-900 px-1 cursor-pointer font-semibold flex items-center text-xl justify-start  hover:text-blue-600"
          >
            ABOUT ME
          </Link>
          <Link
            to="biography"
            smooth={true}
            className=" rounded-md text-blue-900 px-1 cursor-pointer font-semibold flex items-center text-xl  justify-start  hover:text-blue-600"
          >
            BIOGRAPHY
          </Link>
          <Link
            className=" rounded-md text-blue-900 px-1 cursor-pointer font-semibold flex items-center  text-xl justify-start  hover:text-blue-600"
          >


            {" "}
            CONTACT ME
          </Link>
          <ActivityNav route={"activities"} routeName={"ACTIVITIES"} />
          <ActivityNav route={"events"} routeName={"UPDATES"} />

          <a
            href={cv}
            download={cv}
            className=" rounded-md text-blue-900 px-1 cursor-pointer font-semibold flex items-center  text-xl justify-start  hover:text-blue-600"
          >
            {" "}
            CV{" "}
          </a>
        </nav>
        <MenuLineHorizontal
          className="text-4xl text-blue-900 hidden max-sm:inline mr-3"
          onClick={handleOpenNav}
        />

        {openNav && <div className="h-screen w-full backdrop-blur-sm transition-all duration-500  fixed flex justify-center items-center p-4 left-0 right-0 top-0 bg-[rgba(0,0,0,0.5)]">
          <RemoveRectangle className="text-3xl text-red-500 absolute right-2 top-2" onClick={handleOpenNav} />
          <div className="relative bg-white w-full flex justify-center items-center flex-col rounded-lg shadow">
            <Link
              to="about"
              smooth={true}
              onClick={handleOpenNav}
              className=" rounded-md font-semibold text-blue-900 px-1 py-2  text-xl text-center cursor-pointer  hover:text-blue-600"
            >
              ABOUT ME
            </Link>
            <Link
              to="biography"
              smooth={true}
              onClick={handleOpenNav}
              className=" rounded-md font-semibold text-blue-900 px-1 py-2  text-xl text-center cursor-pointer  hover:text-blue-600"
            >
              BIOGRAPHY
            </Link>
            <Link
              to="contact"
              smooth={true}
              onClick={handleOpenNav}
              className="b rounded-md font-semibold   text-xl py-2 text-center text-blue-900 px-1 cursor-pointer  hover:text-blue-600"
            >
              {" "}
              LET'S CONNECT
            </Link>
            <hr className="border-t border-blue-950  w-full mt-1 mb-1" />
            <ActivityNav route={"events"} routeName={"EVENT's"} />

            {true && (
              <ActivityNav route={"activities"} routeName={"UPDATES"} />
            )}
            <a
              href={cv}
              download={cv}
              className="b rounded-md font-semibold  py-2 text-center text-blue-900 px-1 cursor-pointer  hover:text-blue-600"
            >
              {" "}
              DOWNLOAD  CV
            </a>
          </div>

        </div>}

        {/* <div
          className="flex flex-col h-screen absolute bg-sky-500 w-full top-0 items-center justify-start py-16"
          style={{ opacity: !openNAv ? 0 : 1, transition: "0.7s" }}
        >
          <ArrowBack
            className="absolute right-2 top-2 text-blue-900 text-xl "
            onClick={handleOpenNav}
          />
          <div className="flex justify-around gap-1 flex-col">
            <Link
              to="about"
              smooth={true}
              onClick={handleOpenNav}
              className=" rounded-md font-semibold text-blue-900 px-1 py-2  text-xl text-center cursor-pointer  hover:text-blue-600"
            >
              <UserBlock className="inline text-xl " /> ABOUT ME
            </Link>
            <Link
              to="biography"
              smooth={true}
              onClick={handleOpenNav}
              className="  rounded-md font-semibold  py-2 text-center text-blue-900 px-1 cursor-pointer  hover:text-blue-600"
            >
              <Information className="inline text-xl" /> BIOGRAPHY
            </Link>
            <Link
              to="contact"
              smooth={true}
              onClick={handleOpenNav}
              className="b rounded-md font-semibold   text-xl py-2 text-center text-blue-900 px-1 cursor-pointer  hover:text-blue-600"
            >
              {" "}
              <CallUser className="inline  text-2xl" /> LET'S CONNECT
            </Link>
            <ActivityNav route={"events"} routeName={"EVENT's"} />
            {true && (
              <ActivityNav route={"activities"} routeName={"UPDATES"} />
            )}
            <a
              href={cv}
              download={cv}
              className="b rounded-md font-semibold  py-2 text-center text-blue-900 px-1 cursor-pointer  hover:text-blue-600"
            >
              {" "}
              CV{" "}
            </a>
      
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Nav;
