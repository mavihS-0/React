import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Details";

const AppRouter = () => {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/details" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
