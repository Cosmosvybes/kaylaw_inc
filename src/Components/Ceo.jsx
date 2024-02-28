import { Link } from "react-scroll";
import ceo from "../assets/kaylaw.jpg";
import Aos from "aos";
const Ceo = () => {
  Aos.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-out-sine",
    delay: 100,
  });
  // Aos.init();
  return (
    <>
      <div className="flex justify-around h-auto  max-sm:flex-around bg-gray-50 py-5  max-sm:gap-1">
        <div className="flex flex-col justify-center ">
          <h1 className="underline text-green-500  font-extrabold text-2xl max-sm:text-sm  px-4">
            {" "}
            MEET THE CEO
          </h1>
          <div className="relative w-96 max-sm:w-64">
            <p
              data-aos="fade-down"
              className="px-4 text-sm font-extralight text-gray-700"
            >
              Hi there, I'm Lawal Kamil Kayode , the CEO of Kaylaw
              Incorporation. I'm a uk-based nigerian enterpreneur , Investor, IT
              professional, public/motivational speaker business oriented
              individual and Activist.
            </p>
            <div className="relative px-4 py-2 w-36">
              <Link className="py-2 w-full   text-white rounded-md bg-green-500 px-2 cursor-pointer hover:bg-green-700">
                About me
              </Link>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          className="relative h-auto w-80  max-sm:w-full rounded-md max-sm:h-auto py-2 px-2 "
        >
          <a href={ceo}>
            {" "}
            <img
              src={ceo}
              alt="ceo kaylaw inc"
              className="  rounded-lg w-auto border hover:bg-gray-200 border-gray-300  h-auto max-sm:rounded-full"
            />{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Ceo;
