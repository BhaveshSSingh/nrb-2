import Card from "./Card";
import data from "../data.json";

const CardsContainer = () => {
  return (
    <div className="flex flex-wrap w-fit bg-pink-200 p-4">
      {data.map((member) => (
        <Card member={member} key={member.name} />
      ))}
    </div>
  );
};

export default CardsContainer;
