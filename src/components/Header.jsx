import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Marco Madureira</h1>
      <nav>
        <ul className="menu">
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
