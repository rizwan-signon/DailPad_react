import { BiLogIn } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { FcContacts } from "react-icons/fc";
import { IoKeypad } from "react-icons/io5";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="flex items-center flex-col">
        <CiStar className=" text-2xl" />
        <p className="text-xs">fav</p>
      </div>
      <div className="flex items-center flex-col">
        <IoKeypad className=" text-2xl" />
        <p className="text-xs">kepad</p>
      </div>
      <div className="flex items-center flex-col">
        <FcContacts className=" text-2xl" />
        <p className="text-xs">contact</p>
      </div>
      <Link to={"/call-log"}>
        <div className="flex items-center flex-col">
          <BiLogIn className=" text-2xl" />
          <p className="text-xs">logs</p>
        </div>
      </Link>
    </>
  );
};

export default Footer;
