import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./components/Header";
import BodyComp from "./components/BodyComp";
import ErrorComp from "./components/ErrorComp";
import AboutComp from "./components/AboutComp";
import MemberPage from "./components/MemberPage";
import Profile from "./components/Profile";

import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./app/userSlice";
import Logout from "./components/Logout";

function App() {
  const user = useSelector(selectUser);

  return (
    <>
      {user ? <Logout /> : <Login />}
      {/* <Header />
      <Outlet /> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;

//
const router = [
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
];

const routesConfig = router;

export const appRouter = createBrowserRouter(routesConfig);
