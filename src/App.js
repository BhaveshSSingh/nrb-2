import data from "./utils/data.json";
import { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
import SearchComp from "./components/SearchComp";
import { useEffect } from "react";
import { getMemberInfo } from "./api/GithubApi";

function App() {
  const [filteredName, setFilteredName] = useState(data);

  useEffect(() => {
    getApiInfo();
  }, []);

  const getApiInfo = async () => {
    const users = await getMemberInfo();
    setFilteredName(users);
  };
  return (
    <>
      <Header />
      <SearchComp filteredName={setFilteredName} />
      <CardsContainer filteredName={filteredName} />
    </>
  );
}

export default App;
