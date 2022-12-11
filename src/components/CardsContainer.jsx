import Card from "./Card";
import NoResultsComp from "./NoResultsComp";

const CardsContainer = ({ filteredName }) => {
  return (
    <div className="flex flex-wrap w-fit bg-blue-50 justify-center p-4 m-2">
      {filteredName.length ? (
        filteredName.map((member) => <Card member={member} key={member.id} />)
      ) : (
        <NoResultsComp />
      )}
    </div>
  );
};

export default CardsContainer;
