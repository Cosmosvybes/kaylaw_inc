import { useState } from "react";
import {
  ArrowBack,
  FilterThreeLineHorizontal,
  LoadingDashed,
  LoadingDoted,
  PlusThin,
  RemoveThin,
  SendFast,
  UploadRectangle,
} from "react-huge-icons/outline";
import Post from "./Post";
import gsap from "gsap";
// import e from "express";
import image from "../assets/kay5.jpeg";
const Events = () => {
  const [switcher, setSwitch] = useState(false);
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

  const handleSwitch = () => {
    setSwitch(!switcher);
  };
  const [eventCategory, setCategory] = useState("Positive news");
  const [post, setPost] = useState("");
  const [postTitle, setTitle] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [isLoading, setLoading] = useState(false)
  //handle create post
  const submitPost = async (e) => {
    try {
      e.preventDefault();
      if (!post || !postTitle) return;
      const postcategory = document.querySelector("#postCategory");
      let categoryChoice = postcategory.options[postcategory.selectedIndex].value;
      let postData = {
        id: Date.now(),
        post: post,
        title: postTitle,
        category: categoryChoice,
        date: new Date().toUTCString(),
        image: postImage,
      };
      setEvents([...events, postData]);
      setSwitch(!switcher);
      const token = localStorage.getItem("token");
      if (!token) return;

      setLoading(true)
      const response = await fetch("https://kaylaw-server.onrender.com/api/create", { method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }, body: JSON.stringify(postData) });
      const data = await response.json();
      if (response.status != 200) {
        setLoading(true)
        throw new Error("something went wrong, please try again later");

      }
      else if (response.status === 403) {
        setLoading(true)
        throw new Error("forbidden")

      }
      else {
        setPost("");
        setTitle("");
        setPostImage(null);
        setPreview(null);
        alert("post created successfully")
        location.replace("/home")
        setLoading(false)
        // console.log(data)
      }
    } catch (error) {
      alert(error)
      setLoading(false)
    }

  };

  //handleDeletePost
  const handleDeletePost = (id) => {
    setEvents(events.filter((event) => event.id != id));
    const token = localStorage.getItem("token");
    if (!token) return;
    setLoading(true)
    try {

      fetch("https://kaylaw-server.onrender.com/api/delete", { method: "DELETE", headers: { "Content-Type": "application/json", "Authorizaton": `Bearer ${token}` }, body: JSON.stringify({ id }) })
        .then((res) => {
          if (!res.ok) {
            setLoading(true)
            throw new Error("something went wrong, please try again later")
          }
          return res.json();
        })
        .then((data) => {
          setLoading(true)
          alert("Post deleted successfully")

        })
    } catch (error) {
      setLoading(true)
      alert("Post deletion failed")

    }
  };

  const handleFilter = () => {
    const param = document.querySelector("#event");
    let eventValue = param.options[param.selectedIndex].value;
    setCategory(eventValue);
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1, duration: 1 });
  };

  let [imagePreview, setPreview] = useState(null);
  // imageUpload
  const handleImageUpload = (e) => {
    let imageFile = e.target.files[0];
    let ImageUrl = URL.createObjectURL(imageFile);
    setPostImage(ImageUrl);
    setPreview(ImageUrl);


  };

  return (
    <>

      {isLoading && <div className="h-screen w-full z-30 backdrop-blur-sm transition-all duration-500  fixed flex justify-center items-center p-4 left-0 right-0 top-0 bg-[rgba(0,0,0,0.5)]">
        <LoadingDashed className="text-5xl text-blue-950 animate-spin" />

      </div>}
      <ArrowBack
        className="text-2xl ml-4 mt-1 text-blue-700 text-light"
        onClick={() => history.back()}
      />
      <section className="h-screen px-44 max-sm:px-1">
        <h1 className="text-blue-700 text-2xl ml-2 text-left font-light">
          {" "}
          My Activities
        </h1>
        {!switcher && (
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
        )}

        {!switcher ? (
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
                      deletePost={handleDeletePost}
                      canDelete={true}
                    />
                  </div>
                ))
            )}

            <PlusThin
              className="fixed bottom-0  right-0 text-7xl text-blue-700 mr-20 mb-24 max-sm:mb-20 max-sm:mr-4 z-10 "
              onClick={handleSwitch}
            />
          </div>
        ) : (
          <div className="flex flex-col relative mt-2 ">
            <div className="flex flex-between gap-2">
              <input
                type="text"
                placeholder="Post title"
                value={postTitle}
                onChange={(e) => setTitle(e.target.value)}
                className="outline-blue-700 border border-gray-300 w-52 max-sm:w-auto px-2 py-2 rounded-md mb-1"
              />

              <select
                id="postCategory"
                className="block rounded-md w-52 max-sm:w-auto border text-xs text-gray-500 py-2 border-gray-300 mb-1"
              >
                <option>Presentation</option>
                <option>Engagement</option>
                <option>Positive news</option>
              </select>
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                className="w-52 h-52 object-cover max-sm:w-full mb-1"
              />
            )}
            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="border border-gray-300 w-full rounded-md h-96 text-xs outline-blue-700 px-2 py-2"
            ></textarea>
            <div className="flex justify-between items-center mt-3 px-3">
              <div className="flex justify-around gap-3 items-center">
                <input
                  type="file"
                  onChange={handleImageUpload}
                  id="imageFile"
                  className="hidden"
                />
                <label htmlFor="imageFile">
                  {" "}
                  <UploadRectangle className="text-3xl text-blue-700" />
                </label>

                <SendFast
                  onClick={submitPost}
                  className="text-3xl text-blue-900"
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
