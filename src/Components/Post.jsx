
const Post = ({ post, title, date , picture}) => {
  return (
    <>
      <div className="relative block h-auto border  border-gray-200 w-auto  hover:shadow-md transition duration-300 shadow-gray-300 py-2  rounded-md hover:bg-gray-50 bg-white px-2">
        <fieldset className="border border-gray-300 rounded-sm ">
          <legend className="px-2 py-2 text-sky-500 ">{title}</legend>
        </fieldset>
        <img src={picture} className="w-full h-52 object-cover mt-1 mb-1" />
        <p className="underline text-sky-500 text-xs mt-2">Date: {date}</p>
        <p className="relative whitespace-pre-wrap font-light  text-xs mt-2">
          {post.length > 100 ? post.slice(0, 100) + "..." : post}
          {/* {post} */}
        </p>
        <button className="inline text-sky-500 text-xs">read more</button>
      </div>
    </>
  );
};

export default Post;
