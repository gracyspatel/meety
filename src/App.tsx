import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Auth/Login";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Auth/SignUp";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
      {/* <Modal component={<SignUp />} /> */}
    </div>
  );
};

export default App;
