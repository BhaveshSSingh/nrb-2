import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "bhaveshsingh@abc.com",
      phone: "9876543210",
    };
    // console.log("Profile -constructer");
  }

  componentDidMount() {
    // console.log("Profile - componentDidMount");
  }

  render() {
    // console.log("Profile - Render");
    return (
      <>
        <div>Name: {this.props.name}</div>
        <div>Email: {this.state.email}</div>
        <div>Phone: {this.state.phone}</div>
      </>
    );
  }
}

export default Profile;
