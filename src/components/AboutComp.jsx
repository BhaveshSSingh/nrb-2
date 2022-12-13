import React from "react";
import { Outlet } from "react-router-dom";

class AboutComp extends React.Component {
  constructor(props) {
    super(props);
    console.log("About -Constructor");
  }
  componentDidMount() {
    console.log("About - componentDidMount");
  }
  render() {
    console.log("About Render");
    return (
      <div>
        AboutComp
        <Outlet />
        <h2>Our Team App</h2>
      </div>
    );
  }
}
export default AboutComp;
