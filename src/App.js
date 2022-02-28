import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Currencies from "./pages/currencies";
import Main from "./pages/main";
import Price from "./pages/price";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/price" element={<Price />} />
          <Route path="/price/:symbol"
          render={(routerProps) => <Price {...routerProps} />}
          />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>
    </div>
  );
}

export default App;
