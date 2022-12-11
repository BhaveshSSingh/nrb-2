const Card = ({ member }) => {
  return (
    <div className=" bg-blue-300 p-2 m-2 w-[200px] rounded-xl items-center">
      <div className="m-2">
        <img src={member.avatar_url} alt="member img" />
        <div className="px-2 py-1 font-bold">
          <h2 className="">
            Name : {member.name} Github-ID: {member.userName}
          </h2>
          <h3>
            <a href={member.blog} />
          </h3>
          <p>{member.bio}</p>
          <h4 className=""> Location :{member.location}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
