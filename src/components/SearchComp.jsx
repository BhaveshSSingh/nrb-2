import data from "../utils/data.json";
import stateObj from "../utils/state-city.json";

import { useState } from "react";
import { FcSearch } from "react-icons/fc";

const SearchComp = ({ filteredName }) => {
  const [searchMember, setSearchMember] = useState("");

  const searchMembersByName = (searchMember) => {
    return data.filter((res) =>
      res.userName
        .toLocaleLowerCase()
        .includes(searchMember.toLocaleLowerCase())
    );
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const resList = searchMembersByName(searchMember);
    filteredName(resList);
  };

  // state
  const [stateName, setStateName] = useState([]);
  const [cityName, setCityName] = useState([]);

  return (
    <div className=" bg-blue-50 flex justify-center">
      <div className="w-[230px] bg-blue-50 m-1 mt-5 rounded-md  p-1">
        <form className="flex items-center" onSubmit={formSubmitHandler}>
          <input
            className="rounded-md p-1 ml-1 border border-sky-500	 bg-blue-50"
            placeholder="Search..."
            value={searchMember}
            onChange={(e) => setSearchMember(e.target.value)}
          />
          <button className="p-2">
            <FcSearch />
          </button>
          <div className=" ">
            <select
              className="border border-blue-800 p-1"
              value={stateName}
              onChange={(e) => {
                setStateName(e.target.value);
              }}
            >
              {Object.keys(stateObj).map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
            {/* City */}
            <select
              className="border border-blue-800 p-1"
              value={cityName}
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            >
              {cityName.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchComp;
