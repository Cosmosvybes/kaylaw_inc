import { Link } from "react-scroll";
import cv from "../assets/Kamil LawalCV.pdf";
import {
  Information,
  UserBlock,
  CallUser,
  MenuLineHorizontalHalf,
  DocumentText,
  ArrowBack,
} from "react-huge-icons/outline";
import { useState } from "react";
const Nav = () => {
  const [openNAv, setOpenNAv] = useState(false);
  const handleOpenNav = () => {
    setOpenNAv(!openNAv);
  };

  return (
    <>
      <div className="flex justify-between bg-sky-500  items-center py-1  relative px-3 max-sm:px-0">
        <h1 className="text-3xl font-extrabold text-white px-2"> Logo</h1>
        <div className="flex justify-around gap-1 max-sm:hidden">
          <Link className="border border-white rounded-md text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500">
            <UserBlock className="inline " /> About me
          </Link>
          <Link className="border border-white rounded-md text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500">
            <Information className="inline" /> Biography
          </Link>
          <Link className="border border-white rounded-md text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500">
            {" "}
            <CallUser className="inline " /> Contact me
          </Link>
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
          className="text-4xl text-white hidden max-sm:inline"
          onClick={handleOpenNav}
        />

        <div
          className="flex flex-col h-screen absolute z-10 bg-sky-500 w-full top-0 items-center justify-start py-10"
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
            {/* <Link > */}{" "}
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
