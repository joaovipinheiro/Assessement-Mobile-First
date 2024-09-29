import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Marco Madureira</h1>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="#biografia">Biografia</a>
          </li>
          <li>
            <a href="#propostas">Propostas</a>
          </li>
          <li>
            <a href="#agenda">Agenda</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
