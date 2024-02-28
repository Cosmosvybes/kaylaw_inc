import { Link } from "react-scroll";
import bg from "../assets/bg.jpeg";
import Aos from "aos";
const Header = () => {
  Aos.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-out-sine",
    delay: 100,
  });

  return (
    <>
      <div
        className="flex h-screen max-sm:h-96 max-sm:bg-contain justify-center items-center flex-col max-sm:justify-start max-sm:py-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1
          data-aos="fade-down"
          className="text-8xl text-gray-100 max-sm:text-2xl font-extrabold"
        >
          {" "}
          Kaylaw Incorporation.
        </h1>
        {/* <div className="flex w-96 flex-col"> */}
        <p className="text-2xl py-3 text-white font-extrabold max-sm:font-light max-sm:text-center">
          Trade with Kaylaw Inc.{" "}
        </p>
        <p className="text-center text-xl  max-sm:text-sm font-light max-sm:font-extralight text-white px-10 max-sm:px-5">
          Hey welcome, whether you are looking to exchange currencies, exchange
          giftcards. We have got you covered.
        </p>
    
        <Link to="contact" className="h-30 py-3 cursor-pointer m-2  text-white font-extrabold  border border-sky-500 w-72 max-sm:w-52 hover:bg-sky-400 rounded-md text-center shadow-inner shadow-sky-400 ">
          Trade now
        </Link>
        {/* </div> */}
      </div>
      <div className="flex h-52 justify-center py-2 max-sm:py-2 px-10 max-sm:px-5 flex-col bg-gray-100 ">
        <h1 className="text-sky-500 font-extrabold text-2xl  text-center max-sm:text-sm">
          TIRED OF TRADING YOUR FUNDS WITH LOW-RATE VENDORS ?
        </h1>
        <p className="px-4 text-center font-extralight text-gray-950 text-sm">
          Worry no more, we have the best exchange rate compared to your
          favorite vendor. Our transactions are swift and paymentis quicker than
          you may have imagined.
        </p>
      </div>
    </>
  );
};

export default Header;
