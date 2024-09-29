import React from "react";
import candidatoImage from "../assets/candidato.png";
import InfoCard from "./InfoCard";
import styles from "./Biografia.module.css";

const Biografia = () => {
  return (
    <section id="biografia" className={styles.biografia}>
      <img
        src={candidatoImage}
        alt="Marco Madureira, candidato a prefeito"
        className={styles.candidatoImage}
      />

      <div className={styles.text}>
        <h2>Biografia</h2>
        <p>
          Marco Madureira é um dedicado servidor público com mais de 15 anos de
          experiência no desenvolvimento de políticas públicas para o Rio de
          Janeiro. Formado em Administração Pública pela Universidade Federal do
          Rio de Janeiro, Marco sempre buscou soluções inovadoras para os
          desafios enfrentados pela cidade. Sua determinação em transformar a
          vida dos cidadãos é admirável, e ele é conhecido por sua habilidade de
          articular parcerias que potencializam o impacto das iniciativas
          públicas. Além de seu trabalho na administração, Marco teve um papel
          crucial ao auxiliar Belford Roxo, enfrentando os desafios de uma das
          áreas mais vulneráveis da Baixada Fluminense. Com sua experiência e
          comprometimento, ajudou a implementar projetos voltados para a
          melhoria da infraestrutura e das condições de vida na cidade. Marco é
          também uma figura enigmática em sua comunidade, frequentemente chamado
          de "Vampiro de Madureira" por sua abordagem noturna e discreta ao
          ativismo social, sempre buscando atender aqueles que mais precisam em
          momentos de crise. Com uma visão futurista e uma paixão por servir,
          ele continua a ser uma força positiva e transformadora tanto no Rio de
          Janeiro.
        </p>
      </div>
      <InfoCard />
    </section>
  );
};

export default Biografia;
