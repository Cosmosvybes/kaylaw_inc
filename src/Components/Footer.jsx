import { Link } from "react-scroll";
import {
  SmartPhone,
  Calling,
  Call,
} from "react-huge-icons/outline";
const Footer = () => {
  return (
    <>
      <div className="grid h-64 max-sm:h-auto bg-gradient-to-bl from-blue-800 to-black px-44 max-sm:px-3 max-sm:py-4 grid-cols-2 gap-5 max-sm:grid-cols-1  py-4 text-xs ">
        <div className="flex flex-col text-white mb-1 text-sm">
          <h1 className="text-xl">Quick Links </h1>
          <Link className="text-2xl max-sm:text-md">Home</Link>
          <Link className="text-2xl max-sm:text-md">Contact me</Link>
          <Link className="text-2xl max-sm:text-md">Biography</Link>
        </div>
        <div className="flex flex-col mt-1">
          <h3 className="text-white tex-3xl">Phone Contact </h3>
          {/* <p className="text-white">
            <HomeLocation className=" inline text-white text-2xl" />  Rose
            Street, YORK (United Kingdom)
          </p> */}
          <p className="text-white text-2xl">
            <Calling className="text-2xl inline max-sm:text-md" /> +447769497343
          </p>
        </div>
        <div className="relative grid grid-cols-1 mt-2">
          <h1 className="text-white  text-3xl font-extrabold "> KAMIL LAWAL.</h1>
        </div>

        <p className="pt-2 text-white  text-xs max-sm:text-md ">
     All rights reserved {new Date().getFullYear()} &copy;
        </p>
      </div>
    </>
  );
};

export default Footer;
