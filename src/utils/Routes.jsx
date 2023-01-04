import App from "../App";
import ErrorComp from "../components/ErrorComp";
import BodyComp from "../components/BodyComp";
import AboutComp from "../components/AboutComp";
import Profile from "../components/AboutComp";
import MemberPage from "../components/MemberPage";

export const router = [
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
