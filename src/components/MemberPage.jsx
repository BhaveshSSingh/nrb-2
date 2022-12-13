import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MemberPage = ({ member }) => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    fetchMemberProfile();
  }, []);

  const fetchMemberProfile = async () => {
    const data = await fetch(`https://api.github.com/users/${id}`);
    const json = await data.json();
    console.log(json);
    setProfileData(json);
  };

  return (
    <div>
      <div className="m-2">
        <img src={profileData.avatar_url} alt="profileData img" />
        <div className="px-2 py-1 font-bold">
          <h2 className="">
            Name: {profileData.name} Github-id: {profileData.userName}
          </h2>
          <h3 className="">
            <Link to={profileData.blog}>Website</Link>
          </h3>
          <p>About: {profileData.bio}</p>
          <h4 className=""> Location: {profileData.location}</h4>
        </div>
      </div>{" "}
    </div>
  );
};

export default MemberPage;
