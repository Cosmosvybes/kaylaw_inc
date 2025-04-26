
import ceo from "../assets/kaylaw2-removebg-preview (1).png";
const Biography = () => {
  return (
    <>
      <section id="biography">
        <div className="flex w-full justify-around h-auto flex-row p-2 max-sm:items-around max-sm:flex-col-reverse max-sm:gap-0">
          <div
            // data-aos="fade-down"
            className="relative flex-col justify-center items-center  rounded-bl-lg rounded-br-lg flex h-auto w-1/2  bg-[rgba(97,101,231,0.6)]  max-sm:justify-between max-sm:w-auto  max-sm:h-auto py-2 px-2 "
          >

            <div className="relative rounded-full  flex justify-center items-center  bg-blue-950 h-[32rem] w-[32rem] max-sm:w-[14rem] max-sm:h-[14rem] max-sm:justify-center">
              <img
                src={ceo}
                alt="ceo kaylaw inc"
                className="relative flex-col  object-contain h-full w-[32rem] max-sm:w-[14rem] flex  justify-between max-sm:justify-center  max-sm:h-[14rem]  max-sm:rounded-xl"
              />

            </div>

          </div>
          <div className="flex flex-col justify-start w-1/2 bg-gray-100 max-sm:w-full  h-auto ">
            <h1 className=" text-blue-900  font-extrabold text-4xl max-sm:text-sm mt-2  px-4">
              {" "}
              KAMIL'S BIOGRAPHY
            </h1>
            <div className="relative w-full max-sm:w-full max-sm:text-sm ">
              <p
                // data-aos="fade-down"
                className="px-4 text-2xl max-sm:text-sm font-normal mt-2 text-gray-950"
              >
                <span className="text-blue-500 font-semibold  text-3xl">Kamil Lawal,</span> is a
                dynamic leader and advocate for students right and empowerment,
                currently serving as the{" "}
                <b className="text-sky-500">President </b>of Eduation at York
                St John University Student Union in the United Kingdom. Born and
                raised in Nigeria, Kamil's journey, is marked by a relentless
                commitment to education, social justice and community
                development.
              </p>

              <div className="relative w-full ">

                <p className="px-4 text-2xl max-sm:text-sm font-normal text-gray-950 mt-2">
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
                <p className="px-4 text-2xl max-sm:text-sm font-normal text-gray-950 mt-2">
                  Kamil's passion for advocacy and leadership emerged early in
                  his career when he served as the President of Nigeria
                  Association of Computing Students, overseeing the
                  coordination of student affairs and spearheading impactful
                  initiatives such as career development seminars, community
                  outreach prpgrams, and participation NCS(Nigeria Computing
                  Society) annual IT development program in 2014.
                </p>
                <p className="px-4 text-2xl max-sm:text-sm font-normal text-gray-950 mt-2">
                  {" "}
                  Upon relocating to the United Kingdom, Kamil immersed
                  himself in student activism,, serving as an Academic
                  Representative and later ascending to the position of
                  President of Education at York St. John University student
                  Union. In this role he leads a team responsible for over{" "}
                  <b className="text-xl text-blue-900 font-normal">10,000</b> students, ensuring their voices are heard and
                  their needs are addressed within the academic community.
                  Kamil's strategic vision and collaborative approach have
                  resulted in the succesful management of academic
                  representatives, policy creation and active participation in
                  university committees aimed at enhancing the students
                  experience.
                </p>
                <p className="px-4 text-2xl max-sm:text-sm font-normal text-gray-950 mt-2">
                  {" "}
                  Beyond his university responsibilities, Kamil is deeply
                  engaged in grassroots initiatives promoting peace, social
                  justice and enviromental sustainability. He serves as the
                  General Secretary of the National Youth Peace Summit in
                  Nigeria and coordinates efforts with organization such as
                  Student for Liberty and Student for Sensible Drug Policy to
                  advocate for human rights and policy reform.
                </p>
                <p className="px-4 text-2xl max-sm:text-sm  font-normal text-gray-950 mt-2">
                  {" "}
                  Kamil's leadership extends beyond borders, as evidenced by
                  his involvement in global initiatives such as the Millennium
                  Fellows program and the Young African Leaders Initiative,
                  where he honed his skills in public policy, sustainable
                  development, and leadership.
                </p>
                <p className="px-4 text-2xl max-sm:text-sm font-normal text-gray-950 mt-2 mb-2">
                  Driven by a commitment to excellence and a vision of a more
                  just and equitable world, Kamil Lawal continues to inspire
                  and empower individuals to effect positive change in their
                  communities and beyond.
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Biography;
