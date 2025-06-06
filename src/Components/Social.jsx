import {
  Twitter,
  Facebook,
  Whatsapp,
  Telegram,
  Instagram,
  Linkedln,
} from "react-huge-icons/outline";
const Social = () => {
  return (
    <>
      <section id="contact" className="relative bg-gray-100 p-2 h-auto ">
        <div className="flex  flex-col max-sm:px-4 justify-center  items-center w-full h-auto ">
          <h1 className="text-blue-950 font-extrabold text-2xl max-sm:text-sm  px-44 max-sm:px-4  py-2">
            CONNECT WITH ME
          </h1>
          <div className="flex justify-around px-10 items-center w-96 rounded-full h-36 max-sm:h-28 bg-gray-200  border border-gray-200 max-sm:w-64">
            <Instagram
              className="text-2xl text-rose-600"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/kaythrix?igsh=MXZwaXcyb3N3MWY2cg%3D%3D&utm_source=qr"
                );
              }}
            />
            <Twitter className="text-2xl text-sky-600" />{" "}
            <Facebook
              className="text-2xl text-blue-950"
              onClick={() => {
                window.open("https://facebook.com/lawal.kamil.3");
              }}
            />{" "}
            <Linkedln
              onClick={() => {
                window.open(
                  "     https://www.linkedin.com/in/kamil-kayode-lawal"
                );
              }}
              className="text-2xl text-blue-700"
            />
            {/* <Whatsapp className="text-2xl text-green-600" />{" "} */}
            <Telegram className="text-2xl text-blue-900" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Social;
