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
        <Link className="h-30 py-3 bg-sky-500 border-2 font-bold border-white  text-gray-100 hover:text-gray-100 max-sm:font-light max-sm:hover:bg-sky-700  rounded-md text-center w-72 max-sm:w-40 hover:bg-sky-600  cursor-pointer mt-2 max-sm:text-gray-100 max-sm:bg-sky-600 shadow-inner max-sm:border border-none shadow-gray-100 ">
          Trade now
        </Link>
        {/* </div> */}
      </div>
      <div className="flex h-52 justify-center py-2 max-sm:py-2 px-10 max-sm:px-5 flex-col bg-gray-100 ">
        <h1 className="text-sky-500 font-extrabold text-2xl  text-center max-sm:text-sm">
          ARE YOU TIRED TRADING YOUR FUNDS WITH LOW-RATE VENDORS ?
        </h1>
        <p className="px-4 text-center font-extralight text-gray-500 text-sm">
          Worry no more, we have the best exchange rate compared to your
          favorite vendor. Our transactions are swift and paymentis  quicker than
          you may have imagined.
        </p>
      </div>
    </>
  );
};

export default Header;
