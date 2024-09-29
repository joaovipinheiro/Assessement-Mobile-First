import React from "react";
import Header from "./components/Header";
import Biografia from "./components/Biografia";
import Propostas from "./components/Propostas";
import Agenda from "./components/Agenda";
import Footer from "./components/Footer";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Biografia />
      <Propostas />
      <Agenda />
      <Footer />
    </div>
  );
}

export default App;
