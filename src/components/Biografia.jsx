import React from "react";
import candidatoImage from "../assets/candidato.png";

const Biografia = () => {
  return (
    <section id="biografia" className="biografia">
      <img
        src={candidatoImage}
        alt="Marco Madureira, candidato a prefeito"
        className="biografia-candidatoImage"
      />

      <div className="biografia-text">
        <h2>Biografia</h2>
        <p>
          Marco Madureira é um dedicado servidor público com mais de 15 anos de
          experiência no desenvolvimento de políticas públicas para o Rio de
          Janeiro. Formado em Administração Pública pela Universidade Federal do
          Rio de Janeiro, Marco sempre buscou soluções inovadoras para os
          desafios enfrentados pela cidade. Sua determinação em transformar a
          vida dos cidadãos é admirável, e ele é conhecido por sua habilidade de
          articular parcerias que potencializam o impacto das iniciativas
          públicas. Além de seu trabalho na administração, Marco é uma figura
          enigmática em sua comunidade, frequentemente chamado de "Vampiro de
          Madureira" por sua abordagem noturna e discreta ao ativismo social,
          sempre buscando atender aqueles que mais precisam em momentos de
          crise. Com uma visão futurista e uma paixão por servir, Marco
          Madureira continua a ser uma força positiva e transformadora em sua
          cidade.
        </p>
      </div>
    </section>
  );
};

export default Biografia;
