import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./components/Header";
import BodyComp from "./components/BodyComp";
import ErrorComp from "./components/ErrorComp";
import AboutComp from "./components/AboutComp";
import MemberPage from "./components/MemberPage";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <Header />
      <Outlet />
      {/* <Footer/> */}
      {/* </Provider> */}
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
