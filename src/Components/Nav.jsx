import { Link } from "react-scroll";
// import { Link as link } from "react-router-dom";
import cv from "../assets/Kamil LawalCV.pdf";
import {
  Information,
  UserBlock,
  CallUser,
  MenuLineHorizontalHalf,
  DocumentText,
  ArrowBack,
} from "react-huge-icons/outline";
import ceo from "../assets/smallKay.jpg";
import { useState } from "react";
import ActivityNav from "./ActivityNav";
const Nav = () => {
  const [openNAv, setOpenNAv] = useState(false);
  const handleOpenNav = () => {
    setOpenNAv(!openNAv);
  };

  return (
    <>
      <div className="flex justify-between  relative bg-sky-500  items-center py-1  px-5 max-sm:px-0">
        <img src={ceo} className="w-10 h-10 object-cover rounded-full ml-1" />
        <h1 className="text-2xl font-extrabold  text-gray-100 px-2 py-1">
          <span className="border font-thin border-gray-300 rounded-xl bg-cyan-600 text-gray-100  mr-1 px-2">
            {" "}
            Kamil Lawal
          </span>{" "}
        </h1>
        <div className="flex justify-around gap-1 max-sm:hidden">
          <Link
            to="about"
            smooth={true}
            className="border z-10 border-white rounded-md text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500"
          >
            <UserBlock className="inline " /> About me
          </Link>
          <Link
            to="biography"
            smooth={true}
            className="border z-10 border-white rounded-md text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500"
          >
            <Information className="inline" /> Biography
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="border z-10 border-white rounded-md text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500"
          >
            {" "}
            <CallUser className="inline " /> Contact me
          </Link>
          <ActivityNav route={"activities"} routeName={"Activities"} />
          <ActivityNav route={"events"} routeName={"Kamil's Event"} />

          <a
            href={cv}
            download={cv}
            className="border  border-white rounded-md text-white px-1 cursor-pointer hover:bg-sky-100 hover:text-sky-500"
          >
            {" "}
            <DocumentText className="inline  text-xl " /> cv{" "}
          </a>
        </div>
        <MenuLineHorizontalHalf
          className="text-4xl text-white hidden max-sm:inline mr-3"
          onClick={handleOpenNav}
        />

        <div
          className="flex flex-col h-screen absolute bg-sky-500 w-full top-0 items-center justify-start py-16"
          style={{ opacity: !openNAv ? 0 : 1, transition: "0.7s" }}
        >
          <ArrowBack
            className="absolute right-2 top-2 text-white text-2xl "
            onClick={handleOpenNav}
          />
          <div className="flex justify-around gap-1 flex-col">
            <Link
              to="about"
              smooth={true}
              onClick={handleOpenNav}
              className="border w-40 border-white rounded-md font-semibold text-white px-1 py-2 text-center cursor-pointer hover:bg-gray-100 hover:text-sky-500"
            >
              <UserBlock className="inline text-2xl " /> About me
            </Link>
            <Link
              to="biography"
              smooth={true}
              onClick={handleOpenNav}
              className="border  w-40 border-white rounded-md font-semibold  py-2 text-center text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500"
            >
              <Information className="inline text-2xl" /> Biography
            </Link>
            <Link
              to="contact"
              smooth={true}
              onClick={handleOpenNav}
              className="border border-white rounded-md font-semibold  py-2 text-center text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500"
            >
              {" "}
              <CallUser className="inline  text-2xl" /> Connect
            </Link>
            <ActivityNav route={"events"} routeName={"Kamil's Event"} />
            {true && (
              <ActivityNav route={"activities"} routeName={"Activities"} />
            )}
            <a
              href={cv}
              download={cv}
              className="border border-white rounded-md font-semibold  py-2 text-center text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500"
            >
              {" "}
              <DocumentText className="inline  text-2xl " /> CV{" "}
            </a>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
