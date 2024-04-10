import { useState } from "react";
import {
  ArrowBack,
  FilterThreeLineHorizontal,
  PlusThin,
  RemoveThin,
  SendFast,
  UploadRectangle,
} from "react-huge-icons/outline";
import Post from "./Post";
import gsap from "gsap";
// import e from "express";
const Events = () => {
  const [switcher, setSwitch] = useState(false);
  let [events, setEvents] = useState([
    {
      id: 1,
      post: `The Controller shall use a privacy policy and make it available to Data Subjects for their information prior to collecting their Personal Data. The policy shall specify the purpose of Collection, Personal Data to be collected, the means used for Collection, Processing, storage and Destruction, and information about the Data Subject rights and how to exercise such rights`,
      date: new Date().toUTCString(),
      category: "Past events",
      title: "Engagement",
    },
    {
      id: 2,
      post: `The Controller shall use a privacy policy and make it available to Data Subjects for their information prior to collecting their Personal Data. The policy shall specify the purpose of Collection, Personal Data to be collected, the means used for Collection, Processing, storage and Destruction, and information about the Data Subject rights and how to exercise such rights`,
      date: new Date().toUTCString(),
      category: "Positive news",
      title: "Symposium Education",
    },
    {
      id: 3,
      post: `The Controller shall use a privacy policy and make it available to Data Subjects for their information prior to collecting their Personal Data. The policy shall specify the purpose of Collection, Personal Data to be collected, the means used for Collection, Processing, storage and Destruction, and information about the Data Subject rights and how to exercise such rights`,
      date: new Date().toUTCString(),
      category: "Presentation",
      title: "OOPL",
    },
    {
      id: 5,
      post: `The Controller shall use a privacy policy and make it available to Data Subjects for their information prior to collecting their Personal Data. The policy shall specify the purpose of Collection, Personal Data to be collected, the means used for Collection, Processing, storage and Destruction, and information about the Data Subject rights and how to exercise such rights`,
      date: new Date().toUTCString(),
      category: "Positive news",
      title: "Abokuta Summit",
    },
    {
      id: 7,
      post: `The Controller shall use a privacy policy and make it available to Data Subjects for their information prior to collecting their Personal Data. The policy shall specify the purpose of Collection, Personal Data to be collected, the means used for Collection, Processing, storage and Destruction, and information about the Data Subject rights and how to exercise such rights`,
      date: new Date().toUTCString(),
      category: "Engagement",
      title: "Immigration Aide",
    },
  ]);
  

  const handleSwitch = () => {
    setSwitch(!switcher);
  };
  const [eventCategory, setCategory] = useState("Positive news");
  const [post, setPost] = useState("");
  const [postTitle, setTitle] = useState("");
  //handle create post
  const submitPost = (e) => {
    e.preventDefault();
    const postcategory = document.querySelector("#postCategory");
    let categoryChoice = postcategory.options[postcategory.selectedIndex].value;
    let postData = {
      id: Date.now(),
      post: post,
      title: postTitle,
      category: categoryChoice,
      date: new Date().toUTCString(),
    };
    setEvents([...events, postData]);
  };

  const handleFilter = () => {
    const param = document.querySelector("#event");
    let eventValue = param.options[param.selectedIndex].value;
    setCategory(eventValue);
    console.log(eventValue);
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1, duration: 1 });
  };

  return (
    <>
      <ArrowBack
        className="text-2xl ml-4 mt-1 text-sky-500"
        onClick={() => history.back()}
      />
      <section className="h-screen px-44 max-sm:px-1">
        <h1 className="text-sky-500 text-2xl ml-2 text-left font-bold">
          {" "}
          Activities
        </h1>
        {!switcher && (
          <div className="flex justify-end items-center mr-2  ">
            <FilterThreeLineHorizontal className="text-sky-500 " />
            <select
              id="event"
              className="ml-2 outline-gray-100 border shadow-inner text-xs py-1 shadow-gray-300 border-gray-200 rounded-sm text-sky-500"
              onChange={handleFilter}
            >
              <option>Presentation</option>
              <option>Engagement</option>
              <option>Positive news</option>
            </select>
          </div>
        )}

        {!switcher ? (
          <div className="grid grid-cols-3  max-sm:grid-cols-1 max-lg:grid-cols-2 relative gap-2 py-2 px-2  ">
            {events
              .filter((event) => event.category == eventCategory)
              .map((event) => (
                <div className="" key={event.id}>
                  <Post
                    post={event.post}
                    title={event.title}
                    date={event.date}
                  />
                </div>
              ))}

            <PlusThin
              className="fixed bottom-0  right-0 text-7xl text-sky-500 mr-20 mb-24 max-sm:mb-20 max-sm:mr-4 z-10 "
              onClick={handleSwitch}
            />
          </div>
        ) : (
          <div className="flex flex-col relative mt-2 ">
            <div className="flex flex-start flex-col-reverse">
              <input
                type="text"
                placeholder="Post title"
                value={postTitle}
                onChange={(e) => setTitle(e.target.value)}
                className="outline-sky-500 border border-gray-300 w-52 max-sm:w-40 px-2 py-2 rounded-md mb-1"
              />

              <select
                id="postCategory"
                className="block rounded-md w-52 max-sm:w-40 border border-gray-300 mb-1"
              >
                <option>Presentation</option>
                <option>Engagement</option>
                <option>Positive news</option>
              </select>
            </div>

            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="border border-gray-300 w-full rounded-md h-96 text-xs outline-sky-600 px-2 py-2"
            ></textarea>
            <div className="flex justify-between items-center mt-3 px-3">
              <div className="flex justify-around gap-3 items-center">
                <UploadRectangle className="text-3xl text-sky-500" />
                <SendFast
                  onClick={submitPost}
                  className="text-3xl text-green-500"
                />
              </div>
              <RemoveThin
                className="text-3xl text-red-500"
                onClick={handleSwitch}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Events;
