import { useEffect, useState } from "react";
import { getMemberInfo } from "../api/GithubApi";
import CardsContainer from "./CardsContainer";
import SearchComp from "./SearchComp";

const BodyComp = () => {
  const [filteredName, setFilteredName] = useState([]);
  const [listOfMembers, setListOfMembers] = useState([]);

  useEffect(() => {
    getApiInfo();
  }, []);

  const getApiInfo = async () => {
    const users = await getMemberInfo();
    setListOfMembers(users);
  };

  return (
    <div>
      <SearchComp filteredName={setFilteredName} />
      <CardsContainer filteredName={setListOfMembers} />
    </div>
  );
};

export default BodyComp;
