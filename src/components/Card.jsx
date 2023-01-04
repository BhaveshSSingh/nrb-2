import { Link } from "react-router-dom";

const Card = ({ member }) => {
  console.log(member);
  return (
    <div className=" bg-blue-300 p-2 m-2 w-[200px] rounded-xl items-center">
      {/* <div className="m-2">
        <img className="rounded-xl" src={member.avatar_url} alt="member img" />
        <div className="px-2 py-1 font-bold break-words">
          <h2 className="">
            Name: {member.name} Github-ID: {member.userName}
          </h2>
          <h3>
            <Link to={member.blog}>Website</Link>{" "}
          </h3>
          <p>About: {member.bio}</p>
          <h4 className=""> Location: {member.location}</h4>
        </div>
        <Link to={`member/${member.id}`}>
          <button className="bg-white rounded-xl p-2">Show Profile</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Card;
