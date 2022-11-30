import React from "react";

const Card = ({ member }) => {
  const seed = Math.round(Math.random() * 100);
  return (
    <div
      className=" bg-purple-300 p-2 m-2 w-[200px] rounded-xl items-center 
    "
    >
      <div className="m-2">
        <img
          src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}
          alt="member img"
        />
        <div className="p-4">
          <h2 className="font-bold">Name : {member.name}</h2>
          <h3 className="underline text-cyan-900">Work : {member.work}</h3>
          <h4 className="font-bold">Location : {member.location}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
