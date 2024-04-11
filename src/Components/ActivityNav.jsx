import { Activity } from "react-huge-icons/outline";
import { Link } from "react-router-dom";

const ActivityNav = ({ route, routeName }) => {
  return (
    <>
      <Link
        to={`/${route}`}
        className="border z-10 font-semibold  border-white rounded-md text-center text-white px-2  flex justify-center items-center max-sm:py-2 cursor-pointer hover:bg-gray-100 hover:text-sky-500"
      >
        <Activity className="inline text-xl" />
        {" "} {routeName}
      </Link>
    </>
  );
};

export default ActivityNav;
