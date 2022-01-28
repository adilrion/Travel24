import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Admin from "../Admin/Admin";

const AdminDashboard = () => {
  return (
    <div>
      <Admin></Admin>
      <Footer></Footer>
    </div>
  );
};

export default AdminDashboard;
