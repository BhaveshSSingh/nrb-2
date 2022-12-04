import { BiCodeCurly } from "react-icons/bi";
import { teamName } from "../constants";

function Header() {
  return (
    <div className="flex justify-between bg-blue-600 p-4 items-center">
      <div className="text-white flex items-center">
        <BiCodeCurly size={40} />
        <h1 className="underline font-bold">{teamName}</h1>
      </div>
    </div>
  );
}
export default Header;
