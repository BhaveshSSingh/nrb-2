import data from "./data.json";
import { useState } from "react";
import CardsContainer from "./components/CardsContainer";
import Header from "./components/Header";
import SearchComp from "./components/SearchComp";

function App() {
  const [filteredName, setFilteredName] = useState(data);
  return (
    <>
      <Header />
      <div className=" bg-blue-50 flex justify-center">
        <SearchComp filteredName={setFilteredName} />
      </div>
      <CardsContainer filteredName={filteredName} />
    </>
  );
}

export default App;
