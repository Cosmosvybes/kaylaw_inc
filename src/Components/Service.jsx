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
      <section className="bg-gray-100 px-30 max-lg:px-4 ">
        <h1 className="text-sky-500 font-extrabold text-start px-36 max-lg:px-4  text-2xl max-sm:text-sm max-sm:px-4  py-2 ">
          PICTURES
        </h1>
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:px-4 px-36 max-sm:grid-cols-2 max-lg:grid-cols-2 max-lg:gap-5 gap-3  max-sm:px-4 py-1 mt-3">
          <div className="ralative flex flex-col justify-center items-center h-52 border  border-gray-300 w-60 max-sm:h-auto max-sm:w-auto rounded-md bg-gray-200">
            <a href={image1}>
              <img
                data-aos="fade-left"
                src={image1}
                className="w-full h-auto rounded-md object-cover"
              />
            </a>
          </div>
          <div className="ralative flex flex-col justify-center items-center h-52 max-sm:h-auto border border-gray-300 w-60 max-sm:w-auto rounded-md bg-gray-200">
            <a href={image4}>
              {" "}
              <img
                data-aos="fade-right"
                src={image4}
                className="w-full h-auto rounded-md object-cover"
              />
            </a>
          </div>
          <div className="ralative flex flex-col justify-center items-center h-52 max-sm:h-auto border border-gray-300 w-60 max-sm:w-auto rounded-md bg-gray-200 ">
            <a href={image2}>
              {" "}
              <img
                data-aos="fade-left"
                src={image2}
                className="w-full h-auto rounded-md object-cover"
              />
            </a>
          </div>
          <div className="ralative flex flex-col justify-center items-center h-52 max-sm:h-auto border border-gray-300 w-60 max-sm:w-auto rounded-md bg-gray-200 ">
            <a href={image3}>
              {" "}
              <img
                data-aos="fade-right"
                src={image3}
                className="w-full h-auto rounded-md object-cover"
              />
            </a>
          </div>
        </div>
        <h1 className="text-sky-500 font-extrabold text-start px-36  max-lg:px-4 max-lg:py-4  text-2xl max-sm:text-sm   max-sm:px-4  py-2 ">
          VIDEOS
        </h1>

        <div className="grid grid-cols-3 gap-1 max-sm:grid-cols-1  px-36 mt-2 max-sm:px-4 py-1 ">
          <div
            data-aos="fade-down"
            className="ralative flex flex-col justify-center items-center  max-sm:h-52 border  border-gray-306 w-66 h-56  max-sm:w-auto rounded-md bg-gray-200"
          >
            <video
              src={clip2}
              controls
              loop
              className="object-cover h-full w-full rounded-md"
            >
              <source src={clip2} type="video/mp4"></source>
            </video>
          </div>
          <div
            data-aos="fade-up"
            className="ralative flex flex-col justify-center items-center border border-gray-300 w-66 h-56 max-sm:h-52 max-sm:w-auto rounded-md bg-gray-200"
          >
            <video
              src={clip1}
              controls
              loop
              className="object-cover h-full w-full rounded-md"
            >
              <source src={clip2} type="video/mp4"></source>
            </video>
          </div>
          <div
            data-aos="fade-down"
            className="ralative flex flex-col justify-center py-0 items-center h-auto border  border-gray-3006 w-66 max-sm:h-52 max-sm:w-auto rounded-md bg-gray-200"
          >
            <video
              src={clip4}
              controls
              loop
              className="w-full h-full object-cover rounded-md"
            >
              <source src={clip4} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="flex justify-around">
          <div
            data-aos="fade-down"
            className="ralative flex flex-col justify-center items-center h-56 w-96 max-sm:px-4  max-sm:w-full max-sm:h-52  max-sm:py-0 rounded-md "
          >
            <video
              src={clip3}
              controls
              loop
              className="object-cover w-full h-full rounded-md"
            >
              <source src={clip3} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
