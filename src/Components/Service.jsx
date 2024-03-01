import image1 from "../assets/kaylaw2.jpeg";
import image2 from "../assets/kamil3.jpeg";
import image3 from "../assets/kay.jpeg";
import image4 from "../assets/kay5.jpeg";
const Service = () => {
  return (
    <>
      <section className="bg-gray-100 px-2">
        <h1 className="text-sky-500 font-extrabold text-2xl max-sm:text-sm  px-4 max-sm:px-4  py-2 ">
          KAMIL EVENT'S GALLERY
        </h1>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-3 px-30 max-sm:px-4 py-1 ">
          <div className="ralative flex flex-col justify-center items-center h-auto border  border-gray-300 w-72 max-sm:h-auto max-sm:w-auto rounded-md bg-gray-200">
            <a href={image1}>
              <img data-aos="fade-left" src={image1} className="w-full h-auto rounded-md" />
            </a>
          </div>
          <div className="ralative flex flex-col justify-center items-centerh-aut max-sm:h-auto border border-gray-300 w-72 max-sm:w-auto rounded-md bg-gray-200">
            <a href={image4}>
              {" "}
              <img data-aos="fade-right" src={image4} className="w-full h-auto rounded-md" />
            </a>
          </div>
          <div className="ralative flex flex-col justify-center items-centerh-aut max-sm:h-auto border border-gray-300 w-72 max-sm:w-auto rounded-md bg-gray-200 ">
            <a href={image2}>
              {" "}
              <img data-aos="fade-left" src={image2} className="w-full h-auto rounded-md" />
            </a>
          </div>
          <div className="ralative flex flex-col justify-center items-centerh-aut max-sm:h-auto border border-gray-300 w-72 max-sm:w-auto rounded-md bg-gray-200 ">
            <a href={image3}>
              {" "}
              <img data-aos="fade-right" src={image3} className="w-full h-auto rounded-md" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
