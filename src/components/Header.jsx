import { BiCodeCurly } from "react-icons/bi";
import { BsMoonStars, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { teamName } from "../utils/constants";

function Header() {
  return (
    <div className="flex justify-between bg-blue-600 p-4 items-center">
      <div className="text-white flex items-center">
        <BiCodeCurly data-testId="logo" size={40} />
        <h1 className="underline font-bold">{teamName}</h1>
        <div className="pl-8">
          <Link className=" p-2" to="home">
            Home
          </Link>
          <Link className="p-2" to="about-us">
            About
          </Link>
        </div>
      </div>
      <div className=" text-white">
        {/* toggle */}
        {/* <button>
          {dark ? <BsMoonStars size={20} /> : 
          
          <BsFillSunFill size={20} />
          }
          <BsFillSunFill size={20} />
        </button> */}
      </div>
    </div>
  );
}
export default Header;
