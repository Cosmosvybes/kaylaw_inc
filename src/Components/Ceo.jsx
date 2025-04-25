
import ceo from "../assets/kaylaw2-removebg-preview (1).png";

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
      <section id="about">
        <div className="flex justify-around h-auto flex-row p-2 max-sm:items-around max-sm:flex-col-reverse max-sm:gap-0">
          <div className="flex flex-col bg-[rgba(167,171,229,0.9)]     justify-start w-1/2 max-sm:w-full  ">
            <h1 className=" text-blue-900  font-extrabold text-4xl mt-2 max-sm:text-sm  px-4">
              {" "}
              MEET KAMIL LAWAL
            </h1>
            <div className="relative w-full max-sm:w-full  max-sm:text-xs mt-5">
              <p

                className="px-4 text-2xl font-normal max-sm:text-sm text-gray-950 "
              >
                <span className="text-blue-500 text-2xl">Kamil Lawal</span> ,
                the manager of Softlink International Limited. And UK-based
                Nigeria entrepreneur .
              </p>

              <div
                className="relative h-full "

              >
                <h1 className=" text-blue-800  font-extrabold text-xl mt-5 max-sm:text-sm  px-4">
                  About Kamil
                </h1>
                <p className="px-4 text-2xl font-normal max-sm:text-sm text-gray-950 mt-1">
                  {" "}
                  Kamil Lawal is multifaceted individual with wealth of of
                  experience in leadership, education, and advocacy. His roles
                  within the United Kingdom and various community organzations
                  reflect his dedication to to promoting inclusivity,
                  diversity , and equality in both academic and social
                  spheres.
                </p>
                <p className="px-4 text-2xl font-normal max-sm:text-sm text-gray-950 mt-2">
                  With a solid foundation in business administration and
                  management, complemented by practical experience in
                  organizational leadership and strategic planning.Kamil
                  brings uniques perspective to his endeavors. His commitment
                  to lifelong learning is evident through is pursuit for
                  advanced qualification ands and participation in professonal
                  development programs.
                </p>
                <p className="px-4 text-2xl font-normal max-sm:text-sm text-gray-950 mt-2">
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
                <p className="px-4 text-2xl font-normal max-sm:text-sm text-gray-950 mt-2">
                  {" "}
                  Beyond his professional achievements, Kamil is known for his
                  strong interpersonal skills, adaptability and creativity. He
                  thrives in collaborative enviroments and passionate about
                  leveraging technology and innovation to drive positive
                  social change.
                </p>
                <p className="px-4 text-2xl font-normal max-sm:text-sm text-gray-950 mb-4">
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


            </div>
          </div>

          <div
            // data-aos="fade-down"
            className="relative flex-col justify-start items-center  flex h-auto w-1/2  bg-[rgba(167,171,229,0.6)]  max-sm:justify-between max-sm:w-auto  max-sm:h-auto py-2 px-2 "
          >

            <div className="relative rounded-full  flex justify-start items-center max-sm:-mt-10 shadow bg-blue-950 h-[44rem] w-[44rem] max-sm:w-[14rem] max-sm:h-[14rem] max-sm:justify-center  ">
              <img
                src={ceo}

                alt="ceo kaylaw inc"
                className="relative flex-col  object-contain h-full w-[44rem] flex  justify-between max-sm:justify-center  max-sm:w-auto rounded-full max-sm:h-52  max-sm:rounded-xl"
              />{" "}
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Ceo;
