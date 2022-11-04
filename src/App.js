import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Live from "./views/Live/";
import Upload from './views/Upload'
import Archive from './views/Archive'
import SignIn from './views/Account/Signin/index.js'
import Register from './views/Account/Register'

const theme = createTheme({
  palette: {
    primary: {
      main: "#dddfe8",
    },
    secondary: {
      main: "#E33E7F",
    },
  },
});

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/live" element={<Live />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </MuiThemeProvider>
    </>
  );
}

export default App;
