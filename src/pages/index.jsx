import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import MainLayout from "./layout";
import Posts from "./posts";
import Register from "./register";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRouter;
