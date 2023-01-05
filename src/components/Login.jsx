import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  }

  return (
    <div className="flex flex-col justify-center h-full items-center font-mono">
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="text-3xl mb-2 pb-2 tracking-tight pt-32">
          Login here 🚪🚶
        </h1>
        <div className="min-w-[380px] p-5 mb-3 outline-none border border-black rounded-sm text-xs flex flex-col">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="m-1 p-1"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="m-1 p-1"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="m-1 p-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white rounded-sm p-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
