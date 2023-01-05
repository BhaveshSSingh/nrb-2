import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../app/userSlice";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <button
        type="submit"
        className="bg-black p-2 text-green-500"
        onClick={(e) => handleLogout(e)}
      >
        Logout 🔙
      </button>
    </div>
  );
};

export default Logout;
