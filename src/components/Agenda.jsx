import React from "react";
import styles from "./Agenda.module.css";

const eventos = [
  { id: 1, data: "10/11/2024", descricao: "Comício na Praça Central" },
  { id: 2, data: "15/11/2024", descricao: "Reunião com Líderes Comunitários" },
  { id: 3, data: "20/11/2024", descricao: "Debate Televisivo" },
  { id: 4, data: "25/11/2024", descricao: "Visita a Escolas Públicas" },
  { id: 5, data: "30/11/2024", descricao: "Encontro com Empresários" },
];

const Agenda = () => {
  return (
    <section id="agenda" className={styles.agenda}>
      <h2>Agenda da Campanha</h2>
      <div className={styles.eventosContainer}>
        {eventos.map((evento) => (
          <div key={evento.id} className={styles.eventosCard}>
            <p className={styles.data}>{evento.data}</p>
            <p className={styles.descricao}>{evento.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agenda;
