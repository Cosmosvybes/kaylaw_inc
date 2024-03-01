import { Button, Link } from "react-scroll";
import bg from "../assets/bg.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { useEffect } from "react";
const Header = () => {
  const handleOpenNav = () => {
    setOpenNAv(!openNAv);
  };
  useEffect(() => {
    gsap.fromTo(
      "#btn",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        yoyo: true,
        scale: 1,
        repeat: -1,
        duration: 2,
        ease: "power2.inOut",
      }
    );
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div
        className="flex h-screen max-sm:h-96  max-sm:bg-contain justify-center items-center flex-col max-sm:justify-start max-sm:py-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1
          // data-aos="fade-down"
          className="text-8xl text-gray-100 max-sm:text-2xl font-extrabold"
        >
          {" "}
          KAMIL LAWAL
        </h1>
        {/* <div className="flex w-96 flex-col"> */}
        <p className="text-xl py-3 text-white font-semibold max-sm:font-light max-sm:text-center">
          Welcome to Kamil Lawal Official Website.
        </p>
        <p className="text-center text-xl  max-sm:text-sm font-semibold max-sm:font-semibold text-white px-10 max-sm:px-5 ">
          You are welcome to Kamil Lawal Official Website, on this page you can
          read more about Kamil and his activities.
        </p>

        <Link
          to="contact"
          id="btn"
          smooth={true}
          className="h-30  py-3 cursor-pointer max-sm:mt-20 mt-5 text-white font-semibold  border border-sky-500 w-72 max-sm:w-52 hover:bg-sky-400 rounded-md text-center shadow-inner shadow-sky-400 "
        >
          Connect with Kamil
        </Link>
      </div>
      <div
        // data-aos="fade-down"
        className="flex h-52 justify-center py-2 max-sm:py-2 px-10 max-sm:px-5 flex-col bg-gray-100 "
      >
        <h1 className=" text-sky-500 font-extrabold text-2xl  text-center max-sm:text-sm">
          WHO IS KAMIL LAWAL ?
        </h1>
        <p className="px-4  text-center font-extralight text-gray-950 text-sm border border-gray-200 rounded-md py-3">
          A dedicated leader with a proven track record of driving positive
          change in academic, social, and community settings. With a strong
          background in computer science and a Master's in Business
          Administration.
        </p>
      </div>
    </>
  );
};

export default Header;
