import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import { Home, Login } from "./Pages";

import "./index.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="login/" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
