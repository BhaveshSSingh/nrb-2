import { BiCodeCurly } from "react-icons/bi";

function Header() {
  return (
    <div className="flex justify-between bg-purple-600 p-4">
      <div className="text-white flex items-center">
        <BiCodeCurly size={40} /> <h1 className="=">EcmaScripters</h1>
      </div>
    </div>
  );
}
export default Header;
