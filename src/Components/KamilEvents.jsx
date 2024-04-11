import { ArrowBack, FilterThreeLineHorizontal } from "react-huge-icons/outline";
import Post from "./Post";
import { useState } from "react";
import image from "../assets/kay5.jpeg";
import gsap from "gsap";
const KamilEvents = () => {
  const handleFilter = () => {
    const param = document.querySelector("#event");
    let eventValue = param.options[param.selectedIndex].value;
    setCategory(eventValue);
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1, duration: 1 });
  };
  const [eventCategory, setCategory] = useState("Positive news");
  let [events, setEvents] = useState([
    {
      id: 1,
      post: `The Controller shall use a privacy policy and make it available to Data Subjects for their information prior to collecting their Personal Data. The policy shall specify the purpose of Collection, Personal Data to be collected, the means used for Collection, Processing, storage and Destruction, and information about the Data Subject rights and how to exercise such rights`,
      date: new Date().toUTCString(),
      category: "Past events",
      title: "Engagement",
      image: image,
    },
    {
      id: 2,
      post: `The Controller shall use a privacy policy and make it available to Data Subjects for their information prior to collecting their Personal Data. The policy shall specify the purpose of Collection, Personal Data to be collected, the means used for Collection, Processing, storage and Destruction, and information about the Data Subject rights and how to exercise such rights`,
      date: new Date().toUTCString(),
      category: "Positive news",
      title: "Symposium Education",
      image: image,
    },
    {
      id: 3,
      post: `The Controller shall use a privacy policy and make it available to Data Subjects for their information prior to collecting their Personal Data. The policy shall specify the purpose of Collection, Personal Data to be collected, the means used for Collection, Processing, storage and Destruction, and information about the Data Subject rights and how to exercise such rights`,
      date: new Date().toUTCString(),
      category: "Presentation",
      title: "OOPL",
      image: image,
    },
    {
      id: 5,
      post: `The Controller shall use a privacy policy and make it available to Data Subjects for their information prior to collecting their Personal Data. The policy shall specify the purpose of Collection, Personal Data to be collected, the means used for Collection, Processing, storage and Destruction, and information about the Data Subject rights and how to exercise such rights`,
      date: new Date().toUTCString(),
      category: "Positive news",
      title: "Abokuta Summit",
      image: image,
    },
    {
      id: 7,
      post: `The Controller shall use a privacy policy and make it available to Data Subjects for their information prior to collecting their Personal Data. The policy shall specify the purpose of Collection, Personal Data to be collected, the means used for Collection, Processing, storage and Destruction, and information about the Data Subject rights and how to exercise such rights`,
      date: new Date().toUTCString(),
      category: "Engagement",
      title: "Immigration Aide",
      image: image,
    },
  ]);

  return (
    <>
      <ArrowBack
        className="text-2xl ml-4 mt-1 text-sky-500 text-light"
        onClick={() => history.back()}
      />
      <section className="h-screen px-44 max-sm:px-1">
        <h1 className="text-sky-500 text-2xl ml-2 text-left font-light">
          {" "}
          Kamil's Activities
        </h1>

        <div className="flex justify-end items-center mr-2  ">
          <FilterThreeLineHorizontal className="text-gray-500 " />
          <select
            id="event"
            className="ml-2 outline-gray-100 border text-xs py-2 bg-gray-100 border-gray-200 rounded-full px-2 text-black"
            onChange={handleFilter}
          >
            <option>Presentation</option>
            <option>Engagement</option>
            <option>Positive news</option>
          </select>
        </div>

        <div className="grid grid-cols-3  max-sm:grid-cols-1 max-lg:grid-cols-2 relative gap-2 py-2 px-2  ">
          {events.filter((event) => event.category == eventCategory).length ==
          0 ? (
            <p className="text-xs text-gray-500">This category is empty</p>
          ) : (
            events
              .filter((event) => event.category == eventCategory)
              .map((event) => (
                <div className="" key={event.id}>
                  <Post
                    picture={event.image}
                    post={event.post}
                    title={event.title}
                    date={event.date}
                    id={event.id}
                    canDelete={false}
                    // deletePost={handleDeletePost}
                  />
                </div>
              ))
          )}
        </div>
      </section>
    </>
  );
};

export default KamilEvents;
