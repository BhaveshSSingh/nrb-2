import { useRouteError } from "react-router-dom";

const ErrorComp = () => {
  const errorData = useRouteError();
  return (
    <div>
      Something !very Kool happened
      <h1>Details: {errorData.statusText || errorData.message} </h1>
    </div>
  );
};

export default ErrorComp;
