import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import data from "../data.json";

const SearchComp = ({ filteredName }) => {
  const [searchMember, setSearchMember] = useState("");

  const searchMembersByName = (searchMember) => {
    return data.filter((res) =>
      res.name.toLocaleLowerCase().includes(searchMember.toLocaleLowerCase())
    );
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const resList = searchMembersByName(searchMember);
    filteredName(resList); //for changing the cards
  };

  return (
    <div className="">
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
        </form>
      </div>
    </div>
  );
};

export default SearchComp;
