import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import injectContext from "./store/appContext";
import Home from "./views/Home";
import Live from "./views/Live/";
import Upload from "./views/Upload";
import Archive from "./views/Archive";
import SignIn from "./views/Account/Signin/index.js";
import Register from "./views/Account/Register";
import VideoView from './views/VideoView'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/archive" element={<Archive />} />
        <Route exact path="/live" element={<Live />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/view/:video" element={<VideoView />} />
      </Routes>
    </>
  );
}

export default injectContext(App);
