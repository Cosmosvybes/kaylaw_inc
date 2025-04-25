
import { Link } from "react-router-dom";

const ActivityNav = ({ route, routeName }) => {
  return (
    <>
      <Link
        to={`/${route}`}
        className=" rounded-md text-gray-600 px-1 cursor-pointer  text-xl font-semibold flex items-center justify-start  hover:text-blue-900"
      >

        {" "} {routeName}
      </Link>
    </>
  );
};

export default ActivityNav;
