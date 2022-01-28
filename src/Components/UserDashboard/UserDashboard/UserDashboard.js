import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import UserProfile from "../UserProfile/UserProfile";

const UserDashboard = () => {
  return (
    <div>
      <Navigation></Navigation>
      <UserProfile></UserProfile>
    </div>
  );
};

export default UserDashboard;
