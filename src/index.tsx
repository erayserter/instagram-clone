import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import { Home, Login, Signup } from "./Pages";

import "./index.css";
// import PrivateRoutes from "./components/General/PrivateRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PrivateRoutes redirectPath="login/" />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="login/" element={<Login />}></Route>
        <Route path="signup/" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
