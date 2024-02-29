import { Button } from "react-scroll";
import ceo from "../assets/kaylaw2.jpeg";
import kay from "../assets/kamil3.jpeg";
import Aos from "aos";
import { useState } from "react";
const Ceo = () => {
  const [readmore, setReadmore] = useState(false);
  Aos.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-out-sine",
    delay: 100,
  });
  // Aos.init();
  return (
    <>
      <section id="about">
        <div className="flex justify-around h-auto  max-sm:items-around bg-gray-50 py-5  max-sm:gap-1">
          <div className="flex flex-col justify-center ">
            <h1 className=" text-green-500  font-extrabold text-2xl max-sm:text-sm  px-4">
              {" "}
              MEET KAMIL LAWAL
            </h1>
            <div className="relative w-96 max-sm:w-60 max-sm:text-xs">
              <p
                data-aos="fade-down"
                className="px-4 text-sm font-extralight text-gray-950 "
              >
                <span className="text-green-500 text-xl">Kamil Lawal</span> ,
                the CEO of Kaylaw Incorporation. Is a UK-based nigerian
                enterpreneur , Investor, IT professional, public/motivational
                speaker, business oriented individual and activist.
              </p>
              {readmore && (
                <div className="relative">
                  <h1 className=" text-green-500  font-extrabold text-xl mt-2 max-sm:text-sm  px-4">
                    About Kamil
                  </h1>
                  <p className="px-4 text-sm font-extralight text-gray-950 mt-2">
                    {" "}
                    Kamil Lawal is multifaceted individual with wealth of of
                    experience in leadership, eductaion, and advocacy. His roles
                    within the United Kingdom and various community organzations
                    reflect his dedication to to promoting inclusivity,
                    diversity , and equality in bothacademic and socila spheres.
                  </p>
                  <p className="px-4 text-sm font-extralight text-gray-950 mt-2">
                    With a solid foundation in business administration and
                    management, complemented by practical experience in
                    organizational leadership and strategic planning.Kamil
                    brings uniques perspective to his endeavors. His commitment
                    to lifelong learning is evident through is pursuit for
                    advanced qualification ands and participation in professonal
                    development programs.
                  </p>
                  <p className="px-4 text-sm font-extralight text-gray-950 mt-2">
                    With a keen focus on leadership development and advocacy,
                    Kamil's work transcends borders, as he actively participates
                    in global programs such as the UN Millennium Fellows, the
                    Young African Leaders Initiative (YALI), Rotaract, and JCI.
                    Through these platforms, he continues to advocate for policy
                    reform, sustainable development, and youth empowerment on a
                    global scale. Kamil Lawal's dedication to excellence,
                    coupled with his passion for social impact, makes him a
                    driving force for positive change in both local and global
                    communities.
                  </p>
                  <p className="px-4 text-sm font-extralight text-gray-950 mt-2">
                    {" "}
                    Beyond his professional achievements, Kamil is known for his
                    strong interpersonal skills, adaptability and creativity. He
                    thrives in collaborative enviroments and passionate about
                    leveraging technology and innovation to drive positive
                    social change.
                  </p>
                  <p className="px-4 text-sm font-extralight text-gray-950 mt-2">
                    {" "}
                    Kamil's diverse background, coupled with his unwavering
                    dedication to makinga difference, positions himself as a
                    valueable asset to any organization or community initaitive.
                    Whether leading teams, advocating for social careers, or
                    inspiring the next generation leaders, Kamil consistently
                    demonstrates his ability effect meaninful change and create
                    lasting impact.{" "}
                  </p>
                </div>
              )}
              <div className="relative px-4 py-2 w-36">
                <Button
                to="/"
                  className="py-2 w-48  text-white rounded-md  font-medium bg-green-500 px-2 cursor-pointer hover:bg-green-700"
                  onClick={() => setReadmore(!readmore)}
                >
                  {readmore ? "Read less " : "Continue reading"}
                </Button>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-down"
            className="relative flex-col  flex h-auto w-96 justify-between max-sm:w-auto rounded-md max-sm:h-auto py-2 px-2 "
          >
            <a href={ceo}>
              {" "}
              <img
                src={ceo}
                style={{ shapeOutside: "50%" }}
                alt="ceo kaylaw inc"
                className="  rounded-lg w-auto border hover:bg-gray-200 border-gray-300  h-auto max-sm:rounded-full"
              />{" "}
            </a>
            <a href={kay} className="hidden max-sm:block">
              {" "}
              <img
                src={kay}
                style={{ shapeOutside: "50%" }}
                alt="ceo kaylaw inc"
                className="  rounded-lg w-auto border hover:bg-gray-200 border-gray-300  h-auto max-sm:rounded-full"
              />{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ceo;
