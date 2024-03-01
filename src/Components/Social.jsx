import {
  Twitter,
  Facebook,
  Whatsapp,
  Telegram,
  Instagram,
} from "react-huge-icons/outline";
const Social = () => {
  return (
    <>
      <section id="contact" className="relative bg-gray-100 h-48 mb-1">
        <div className="flex  flex-col max-sm:px-4 justify-center  items-center w-full h-auto border border-gray-100 ">
          <h1 className="text-green-500 font-extrabold text-2xl max-sm:text-sm  px-44 max-sm:px-4  py-2">
            CONNECT WITH ME
          </h1>
          <div className="flex justify-around px-10 items-center w-96 rounded-full h-36 max-sm:h-28 bg-gray-200  border border-gray-200 max-sm:w-64">
            <Twitter className="text-2xl text-sky-600" />{" "}
            <Facebook
              className="text-2xl text-blue-950"
              onClick={() => {
                window.open("https://facebook.com/lawal.kamil.3");
              }}
            />{" "}
            <Instagram
              className="text-2xl text-blue-950"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/kaythrix?igsh=MXZwaXcyb3N3MWY2cg%3D%3D&utm_source=qr"
                );
              }}
            />
            <Whatsapp className="text-2xl text-green-600" />{" "}
            <Telegram className="text-2xl text-blue-900" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Social;
