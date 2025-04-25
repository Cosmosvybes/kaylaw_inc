// import { Button, Link } from "react-scroll";
import bg from "../assets/coolbackgrounds-particles-stellar.png";
// import AOS from "aos";
import "aos/dist/aos.css";
// import gsap from "gsap";
// import { useEffect } from "react";
import cv from "../assets/Kamil LawalCV.pdf"
import Ceo from "./Ceo";
import Biography from "./Biography";
import Service from "./Service";
import Social from "./Social";
import Footer from "./Footer";
import { Button } from "react-scroll";
// import Nav from "./Nav";
const Header = () => {
  // const handleOpenNav = () => {
  //   setOpenNAv(!openNAv);
  // };
  // useEffect(() => {
  //   gsap.fromTo(
  //     "#btn",
  //     { opacity: 0, scale: 0 },
  //     {
  //       opacity: 1,
  //       yoyo: true,
  //       scale: 1,
  //       repeat: -1,
  //       duration: 2,
  //       ease: "power2.inOut",
  //     }
  //   );
  //   AOS.init({
  //     offset: 200,
  //     duration: 600,
  //     easing: "ease-in-out-sine",
  //     delay: 100,
  //   });
  // }, []);

  return (
    <>
      {/* <Nav /> */}
      <div
        className="flex h-screen max-sm:h-screen    max-sm:bg-contain justify-start items-center  max-sm:justify-center max-sm:py-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="relative w-1/2 max-sm:w-full h-3/4  max-sm:h-auto p-10 flex justify-center max-sm:p-4 max-sm:items-start  gap-5 flex-col  ">
          <h1 className="text-[24px] font-bold text-white">HELLO, I'M</h1>
          <h1 className="text-4xl text-gray-100 max-sm:text-2xl font-extrabold mt-2">
            {" "}KAMIL LAWAL
          </h1>
          <p className="text-gray-500 font-semibold text-xl">ENTREPRENUER.</p>


          <p className="text-xl  text-white max-sm:font-light max-sm:text-center line-clamp-6 text-pretty mt-5">
            This page offers a closer look at Kamil Lawal—his background, interests, and the meaningful work he's engaged in. From personal projects to professional achievements, you'll find insights into his journey, passions, and ongoing contributions in various fields. Whether you're here to connect, collaborate, or simply learn more, you're in the right place.
          </p>

          <div className="relative w-full flex justify-start max-sm:flex-col items-center gap-2">
            <a href="#" download={cv} className="p-4 h-14 w-1/4 max-sm:w-full  text-[20px] rounded-md bg-blue-900 text-white font-bold text-center hover:bg-blue-950 transition-all duration-500">VIEW CV</a>
            <Button to="contact" className="p-4 h-14  max-sm:w-full w-1/4 rounded-md text-[20px] bg-white text-blue-900 font-bold text-center  hover:bg-blue-950 transition-all duration-500">LET'S CONNECT</Button>
          </div>

        </div>

      </div>

      <div className="relative flex flex-col justify-center items-center">
        <div

          className="flex h-[24rem] w-3/4 max-sm:w-full justify-center py-2 max-sm:py-2 px-10 max-sm:px-5 flex-col  "
        >
          <div className="relative bg-blue-900 p-4 rounded-full">
            <h1 className=" text-white font-extrabold text-4xl  text-center max-sm:text-sm">
              WHO IS KAMIL LAWAL ?
            </h1>  </div>
          <p className="px-4 text-4xl max-sm:text-xl font-bold  text-center mt-4  text-blue-950  rounded-md py-3">
            A dedicated leader with a proven track record of driving positive
            change in academic, social, and community settings. With a strong
            background in computer science and a Master's in Business
            Administration.
          </p>
        </div>
      </div>


      <Ceo />
      <Biography />
      <Service />
      <Social />
      <Footer />
    </>
  );
};

export default Header;
