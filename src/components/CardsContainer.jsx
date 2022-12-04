import Card from "./Card";

const CardsContainer = ({ filteredName }) => {
  return (
    <div className="flex flex-wrap w-fit bg-blue-50 justify-center p-4 m-2">
      {filteredName.map((member) => (
        <Card member={member} key={member.name} />
      ))}
    </div>
  );
};

export default CardsContainer;
