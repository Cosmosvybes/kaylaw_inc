import { Activity } from "react-huge-icons/outline";
import { Link } from "react-router-dom";

const ActivityNav = ({ route, routeName }) => {
  return (
    <>
      <Link
        to={`/${route}`}
        className=" rounded-md text-gray-600 px-1 cursor-pointer  text-2xl font-semibold flex items-center justify-start  hover:text-blue-900"
      >

        {/* <Activity className="inline text-xl" /> */}
        {" "} {routeName}
      </Link>
    </>
  );
};

export default ActivityNav;
