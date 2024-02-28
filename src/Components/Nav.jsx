import { Link } from "react-scroll";
import {
  Information,
  UserBlock,
  CallUser,
  MenuLineHorizontalHalf,
  RemoveCircle,
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
        <h1 className="text-3xl font-extrabold text-white"> Logo</h1>
        <div className="flex justify-around gap-1 max-sm:hidden">
          <Link className="border border-white rounded-md text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500">
            <UserBlock className="inline " /> About us
          </Link>
          <Link className="border border-white rounded-md text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500">
            <Information className="inline" /> What we do
          </Link>
          <Link className="border border-white rounded-md text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500">
            {" "}
            <CallUser className="inline " /> Contact us
          </Link>
        </div>
        <MenuLineHorizontalHalf
          className="text-3xl text-white hidden max-sm:inline"
          onClick={handleOpenNav}
        />

        <div
          className="flex flex-col h-screen absolute z-10 bg-sky-500 w-full top-0 items-center justify-center"
          style={{ opacity: !openNAv ? 0 : 1, transition: "0.5s" }}
        >

          <RemoveCircle
            className="absolute right-2 top-2 text-white text-2xl "
            onClick={handleOpenNav}
          />
             <div className="flex justify-around gap-1 flex-col">
          <Link className="border w-40 border-white rounded-md text-white px-1 py-2 text-center cursor-pointer hover:bg-gray-100 hover:text-sky-500">
            <UserBlock className="inline " /> About us
          </Link>
          <Link className="border  w-40 border-white rounded-md   py-2 text-center text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500">
            <Information className="inline" /> What we do
          </Link>
          <Link className="border border-white rounded-md  py-2 text-center text-white px-1 cursor-pointer hover:bg-gray-100 hover:text-sky-500">
            {" "}
            <CallUser className="inline " /> Contact us
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
