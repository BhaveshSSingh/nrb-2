import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./components/Header";
import BodyComp from "./components/BodyComp";
import ErrorComp from "./components/ErrorComp";
import AboutComp from "./components/AboutComp";
import MemberPage from "./components/MemberPage";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer/> */}
    </>
  );
}

export default App;

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComp />,
    children: [
      {
        path: "home",
        element: <BodyComp />,
      },
      {
        path: "about-us",
        element: <AboutComp />,
        children: [
          {
            path: "profile",
            element: <Profile name={"Bhavesh Singh"} />,
          },
        ],
      },
      {
        path: "member/:id",
        element: <MemberPage />,
      },
    ],
  },
]);
