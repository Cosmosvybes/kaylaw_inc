import image1 from "../assets/kaylaw2.jpeg";
import image2 from "../assets/kamil3.jpeg";
import image3 from "../assets/kay.jpeg";
import image4 from "../assets/kay5.jpeg";
import clip1 from "../assets/WhatsApp Video 2024-02-29 at 10.52.20 AM.mp4";
import clip2 from "../assets/WhatsApp Video 2024-02-29 at 10.52.23 AM.mp4";
import clip3 from "../assets/WhatsApp Video 2024-03-02 at 1.19.45 PM.mp4";
import clip4 from "../assets/WhatsApp Video 2024-03-02 at 1.19.44 PM.mp4";
const Service = () => {
  return (
    <>
      <section className="bg-gray-100 px-2 ">
        <h1 className="text-sky-500 font-extrabold text-center text-2xl max-sm:text-sm  px-4 max-sm:px-4  py-2 ">
          KAMIL EVENT'S GALLERY
        </h1>
        <div className="flex justify-center px-30 max-sm:px-4 py-1 ">
          <div
            data-aos="fade-down"
            className="ralative flex flex-col justify-center items-center h-auto border  border-gray-300 w-auto max-sm:h-52 max-sm:w-auto rounded-md bg-gray-200"
          >
            <video src={clip4} controls loop>
              <source src={clip4} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="flex justify-around items-center max-sm:grid grid-cols-2 max-sm:grid-cols-2 gap-3 px-30 max-sm:px-4 py-1 ">
          <div
            data-aos="fade-down"
            className="ralative flex flex-col justify-center items-center h-auto border  border-gray-300 w-96 max-sm:h-auto max-sm:w-auto rounded-md bg-gray-200"
          >
            <video src={clip2} controls loop>
              <source src={clip2} type="video/mp4"></source>
            </video>
          </div>
          <div
            data-aos="fade-up"
            className="ralative flex flex-col justify-center items-center h-auto border  border-gray-300 w-96 max-sm:h-auto max-sm:w-auto rounded-md bg-gray-200"
          >
            <video src={clip1} controls loop>
              <source src={clip2} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="flex justify-center w-full  px-30 max-sm:px-4 py-1 ">
          <div
            data-aos="fade-down"
            className="ralative flex flex-col justify-center items-center h-auto px-10 py-10 border max-sm:px-0 max-sm:w-full  border-gray-300 w-auto max-sm:h-auto  max-sm:py-0 rounded-md bg-gray-200"
          >
            <video src={clip3} controls loop className="rounded-md">
              <source src={clip3} type="video/mp4"></source>
            </video>
          </div>
        </div>

        <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-3 px-30 max-sm:px-4 py-1 ">
          <div className="ralative flex flex-col justify-center items-center h-auto border  border-gray-300 w-72 max-sm:h-auto max-sm:w-auto rounded-md bg-gray-200">
            <a href={image1}>
              <img
                data-aos="fade-left"
                src={image1}
                className="w-full h-auto rounded-md"
              />
            </a>
          </div>
          <div className="ralative flex flex-col justify-center items-center h-auto max-sm:h-auto border border-gray-300 w-72 max-sm:w-auto rounded-md bg-gray-200">
            <a href={image4}>
              {" "}
              <img
                data-aos="fade-right"
                src={image4}
                className="w-full h-auto rounded-md"
              />
            </a>
          </div>
          <div className="ralative flex flex-col justify-center items-centerh-auto max-sm:h-auto border border-gray-300 w-72 max-sm:w-auto rounded-md bg-gray-200 ">
            <a href={image2}>
              {" "}
              <img
                data-aos="fade-left"
                src={image2}
                className="w-full h-auto rounded-md"
              />
            </a>
          </div>
          <div className="ralative flex flex-col justify-center items-center h-auto max-sm:h-auto border border-gray-300 w-72 max-sm:w-auto rounded-md bg-gray-200 ">
            <a href={image3}>
              {" "}
              <img
                data-aos="fade-right"
                src={image3}
                className="w-full h-auto rounded-md"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
