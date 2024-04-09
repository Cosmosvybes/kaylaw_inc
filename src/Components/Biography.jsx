import { useState } from "react";
import ceo from "../assets/kay.jpeg";
import kaylaw from "../assets/Kay4.jpeg";
// import { Button } from "react-scroll";
const Biography = () => {
  const [readmore, setReadmore] = useState(false);
  return (
    <>
      <section id="biography">
        <div className="flex justify-around h-auto  max-sm:items-around bg-gray-100   max-sm:gap-1">
          <div
            data-aos="fade-down"
            className="relative flex-col  flex h-auto max-sm:h-auto w-96 justify-center max-sm:justify-between  max-sm:w-full rounded-md px-2"
          >
            <a href={kaylaw}>
              {" "}
              <img
                src={kaylaw}
                // style={{ shapeOutside: "50%" }}
                alt="ceo kaylaw inc"
                className="rounded-lg object-contain w-auto  hover:bg-gray-200  h-auto max-sm:h-52 max-sm:rounded-md"
              />{" "}
            </a>
            <a href={ceo} className="hidden max-sm:block">
              {" "}
              <img
                src={ceo}
                // style={{ shapeOutside: "50%" }}
                alt="ceo kaylaw inc"
                className="  rounded-md w-auto  hover:bg-gray-200 max-sm:h-52 object-contain   h-full max-sm:rounded-md"
              />{" "}
            </a>
          </div>
          <div className="flex flex-col justify-center ">
            <h1 className=" text-sky-500  font-extrabold text-2xl max-sm:text-sm  px-4">
              {" "}
              KAMIL'S BIOGRAPHY
            </h1>
            <div className="relative w-96 max-sm:w-60 max-sm:text-xs">
              <p
                data-aos="fade-down"
                className="px-4 text-sm font-extralight text-gray-950"
              >
                <span className="text-sky-500 text-xl">Kamil Lawal,</span> is a
                dynamic leader and advocate for students right and empowerment,
                currently serving as the{" "}
                <b className="text-sky-500">President </b>of Eduation at York
                St John University Student Union in the United Kingdom. Born and
                raised in Nigeria, Kamil's journey, is marked by a relentless
                commitment to education, social justice and community
                development.
              </p>
              {readmore && (
                <div className="relative">
              
                  <p className="px-4 text-sm font-extralight text-gray-950 mt-2">
                    {" "}
                    With a solid foundation in computer science and a Higher
                    National Diploma from Oyo state College of Agriculture and
                    Technology, Kamil embarked on a multifaceted career journey
                    that has seen him excel in various roles across different
                    sectors. His educational pursuits took him to prestigious
                    institutions, including Ladoke Akintola University of
                    Technology and York St. John University, where he earned a
                    Master's in Business Administration with Merit.
                  </p>
                  <p className="px-4 text-sm font-extralight text-gray-950 mt-2">
                    Kamil's passion for advocacy and leadership emerged early in
                    his career when he served as the President of Nigeria
                    Association of Computing Students, overseeing the
                    coordination of student affairs and spearheading impactful
                    initiatives such as career development seminars, community
                    outreach prpgrams, and participation NCS(Nigeria Computing
                    Society) annual IT development program in 2014.
                  </p>
                  <p className="px-4 text-sm font-extralight text-gray-950 mt-2">
                    {" "}
                    Upon relocating to the United Kingdom, Kamil immersed
                    himself in student activism,, serving as an Academic
                    Representative and later ascending to the position of
                    President of Education at York St. John University student
                    Union. In this role he leads a team responsible for over{" "}
                    <b className="text-sm text-sky-500 font-bold">10,000</b> students, ensuring their voices are heard and
                    their needs are addressed within the academic community.
                    Kamil's strategic vision and collaborative approach have
                    resulted in the succesful management of academic
                    representatives, policy creation and active participation in
                    university committees aimed at enhancing the students
                    experience.
                  </p>
                  <p className="px-4 text-sm font-extralight text-gray-950 mt-2">
                    {" "}
                    Beyond his university responsibilities, Kamil is deeply
                    engaged in grassroots initiatives promoting peace, social
                    justice and enviromental sustainability. He serves as the
                    General Secretary of the National Youth Peace Summit in
                    Nigeria and coordinates efforts with organization such as
                    Student for Liberty and Student for Sensible Drug Policy to
                    advocate for human rights and policy reform.
                  </p>
                  <p className="px-4 text-sm  font-extralight text-gray-950 mt-2">
                    {" "}
                    Kamil's leadership extends beyond borders, as evidenced by
                    his involvement in global initiatives such as the Millennium
                    Fellows program and the Young African Leaders Initiative,
                    where he honed his skills in public policy, sustainable
                    development, and leadership.
                  </p>
                  <p className="px-4 text-sm font-extralight text-gray-950 mt-2">
                    Driven by a commitment to excellence and a vision of a more
                    just and equitable world, Kamil Lawal continues to inspire
                    and empower individuals to effect positive change in their
                    communities and beyond.
                  </p>
                </div>
              )}
              <div className="relative px-4 py-2 w-36">
                <button
                  // data-aos="fade-left"
                  className="py-2 w-48 z-10  text-white rounded-md  font-medium bg-sky-500 px-2 cursor-pointer hover:bg-sky-700"
                  // data-aos="fade-down"
                  onClick={() => setReadmore(!readmore)}
                >
                  {readmore ? "Read less " : "Continue reading"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Biography;
