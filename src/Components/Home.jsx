import { ArrowRight } from "react-huge-icons/outline";
import { Link } from "react-router-dom";
import image from "../assets/smallKay.jpg";

const Home = () => {
  return (
    <>
      <section className="h-screen flex justify-center items-center flex-col gap-2">
        <img src={image} className="w-20 h-20 rounded-full object-cover" />
        <h1 className="block text-2xl text-sky-500">Voila, welcome </h1>
        <Link to={"/home"} className=" inline">
          {" "}
          Proceeed as guest <ArrowRight className="inline text-sky-500" />
        </Link>
        <Link to={"/sign-in"} className=" inline">
          {" "}
          Admin <ArrowRight className="inline text-sky-500" />
        </Link>
      </section>
    </>
  );
};

export default Home;
