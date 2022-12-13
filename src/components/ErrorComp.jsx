import { useRouteError } from "react-router-dom";
import Header from "./Header";

const ErrorComp = () => {
  const errorData = useRouteError();
  return (
    <>
      <Header />
      <div>
        Something !very Kool happened
        <h1>Details: {errorData.statusText || errorData.message} </h1>
      </div>
    </>
  );
};

export default ErrorComp;
