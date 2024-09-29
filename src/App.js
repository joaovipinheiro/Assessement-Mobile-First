import React from "react";
import Header from "./components/Header";
import Biografia from "./components/Biografia";
import Propostas from "./components/Propostas";
import Agenda from "./components/Agenda";
import Footer from "./components/Footer";
// import MenuMobile from "./components/MenuMobile"; lembrar!!

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Biografia />
      <Propostas />
      <Agenda />
      <Footer />
    </div>
  );
}

export default App;
