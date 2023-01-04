import { useRouteError } from "react-router-dom";
import Header from "./Header";

const ErrorComp = () => {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div>
        Something !very Kool happened
        <h1>Details: {error.statusText || error.message} </h1>
      </div>
    </>
  );
};

export default ErrorComp;
