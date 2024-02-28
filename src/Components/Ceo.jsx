import ceo from "../assets/kaylaw.jpg";
const Ceo = () => {
  return (
    <>
      <div className="flex justify-around h-auto  max-sm:flex-around bg-gray-50 py-5  max-sm:gap-1">
        <div className="flex flex-col">
          <h1 className="text-green-500 font-extrabold text-2xl max-sm:text-sm  px-4">
            {" "}
            MEET THE CEO
          </h1>
          <p className="px-4 text-sm font-extralight text-gray-600">
            Hi there, I'm Lawal Kamil Kayode , the CEO of Kaylaw Incorporation.{" "}
          </p>
        </div>
      
          <div className="relative h-auto w-80  max-sm:w-full rounded-md max-sm:h-auto py-2 px-2 ">
          <a href={ceo}>  <img
              src={ceo}
              alt="ceo kaylaw inc"
              className="  rounded-lg w-auto border border-gray-300  h-full max-sm:rounded-full"
            />       </a>
          </div>
 
      </div>
    </>
  );
};

export default Ceo;
