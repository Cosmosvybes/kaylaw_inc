import { Link } from "react-scroll";
import {
  SmartPhone,
  Calling,
  Call,
  HomeLocation,
} from "react-huge-icons/outline";
const Footer = () => {
  return (
    <>
      <div className="grid h-72 bg-green-600  px-44 max-sm:px-3 max-sm:py-6 grid-cols-2  py-7 text-xs ">
        <div className="flex flex-col text-white mb-1 text-sm">
          <h1>Links </h1>
          <Link>Home</Link>
          <Link>Contact me</Link>
          <Link>Biography</Link>
        </div>
        <div className="flex flex-col mt-1">
          <h3 className="text-white">Contact Address </h3>
          <p className="text-white">
            <HomeLocation className=" inline text-white text-2xl" /> 59 Rose
            Street, YORK (United Kingdom)
          </p>
          <p className="text-white text-sm">
            <Calling className="text-2xl inline" /> +447769497343
          </p>
        </div>
        {/* <h1 className="text-white font-bold "> KAYLAW INC.</h1> */}
        <p className="pt-2 text-white  text-sm">
          KAMIL LAWAL &copy; All rights reserved {new Date().getFullYear()}{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
