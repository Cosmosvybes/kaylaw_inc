const Service = () => {
  return (
    <>
      <section className="bg-gray-100 px-2">
        <h1 className="text-sky-500 font-extrabold text-2xl max-sm:text-sm  px-4 max-sm:px-4  py-2 underline">
          WHAT WE DO{" "}
        </h1>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-3 px-30 max-sm:px-4 py-1 ">
          <div className="ralative flex flex-col justify-center items-center h-60 border max-sm:h-36 border-gray-300 w-72 max-sm:w-auto rounded-md bg-gray-200"></div>
          <div className="ralative flex flex-col justify-center items-center h-60 max-sm:h-36 border border-gray-300 w-72 max-sm:w-auto rounded-md bg-gray-200"></div>
          <div className="ralative flex flex-col justify-center items-center h-60 max-sm:h-36 border border-gray-300 w-72 max-sm:w-auto rounded-md bg-gray-200 "></div>
          <div className="ralative flex flex-col justify-center items-center h-60 max-sm:h-36 border border-gray-300 w-72 max-sm:w-auto rounded-md bg-gray-200 "></div>
        </div>
      </section>
    </>
  );
};

export default Service;
