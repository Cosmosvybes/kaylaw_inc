const Post = ({ post, title, date }) => {
  return (
    <>
      <fieldset className="border border-sky-600 rounded-md ">
        <legend>{title}</legend>
        <div className="relative block h-auto border  border-gray-200 w-auto  hover:shadow-md transition duration-300 shadow-gray-300 py-2  rounded-md hover:bg-gray-50 bg-white px-1">
          <p>Date: {date}</p>
          {/* <h1>Title: {title}</h1> */}
          <pre className="relative whitespace-pre-wrap text-gray-700 text-pretty space-y-1">
            <p className="text-xs">{post} </p>
          </pre>
        </div>
      </fieldset>
    </>
  );
};

export default Post;
