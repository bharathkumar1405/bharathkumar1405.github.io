import React, { Component } from "react";
import "./App.css";

import { AppsJson } from "./data/util/homePageApps";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>    
      <Routes>
          {AppsJson.map(({id,path, component: Component}) => (
            <Route path={path} element={<Component/>} />
          ))}
        </Routes>
    </BrowserRouter>
  );
}
