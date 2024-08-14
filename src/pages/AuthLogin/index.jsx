import React from "react";
import { Navbar } from "../../components/Navbar";
import Login from "../../components/Login/login";

export const AuthLogin = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center item-center mt-32">
        <Login />
      </main>
    </>
  );
};
