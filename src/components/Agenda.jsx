import React from "react";

const eventos = [
  { id: 1, data: "10/11/2024", descricao: "Comício na Praça Central" },
  { id: 2, data: "15/11/2024", descricao: "Reunião com Líderes Comunitários" },
  { id: 3, data: "20/11/2024", descricao: "Debate Televisivo" },
  { id: 4, data: "25/11/2024", descricao: "Visita a Escolas Públicas" },
  { id: 5, data: "30/11/2024", descricao: "Encontro com Empresários" },
];

const Agenda = () => {
  return (
    <section id="agenda" className="agenda">
      <h2>Agenda da Campanha</h2>
      <div className="eventos-container">
        {eventos.map((evento) => (
          <div key={evento.id} className="eventos-card">
            <p className="data">{evento.data}</p>
            <p className="descricao">{evento.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agenda;
