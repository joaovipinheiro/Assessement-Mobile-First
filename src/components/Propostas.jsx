import React from "react";
import proposta1 from "../assets/proposta1.png";
import proposta2 from "../assets/proposta2.png";
import proposta3 from "../assets/proposta3.png";
import proposta4 from "../assets/proposta4.png";
import styles from "./Propostas.module.css";

const propostas = [
  {
    id: 1,
    imagem: proposta1,
    titulo: "Educação de Qualidade",
    descricao:
      "Investir na melhoria das escolas públicas e capacitação de professores.",
  },
  {
    id: 2,
    imagem: proposta2,
    titulo: "Saúde para Todos",
    descricao: "Expandir e modernizar as unidades de saúde em toda a cidade.",
  },
  {
    id: 3,
    imagem: proposta3,
    titulo: "Segurança Pública",
    descricao:
      "Implementar programas de prevenção e fortalecer as forças policiais.",
  },
  {
    id: 4,
    imagem: proposta4,
    titulo: "Transporte Eficiente",
    descricao:
      "Melhorar a infraestrutura de transporte público e incentivar alternativas sustentáveis.",
  },
];

const outrasPropostas = [
  { icon: "🏠", text: "Habitação Popular" },
  { icon: "🌱", text: "Sustentabilidade Ambiental" },
  { icon: "🎭", text: "Cultura e Lazer" },
  { icon: "💼", text: "Desenvolvimento Econômico" },
  { icon: "🤝", text: "Inclusão Social" },
];

const Propostas = () => {
  return (
    <section id="propostas" className={styles.propostas}>
      <h2>Propostas</h2>
      <div className={styles.propostasContainer}>
        {propostas.map((proposta) => (
          <div key={proposta.id} className={styles.propostasCard}>
            <img
              src={proposta.imagem}
              alt={proposta.titulo}
              className={styles.propostasCardImage}
            />
            <h3>{proposta.titulo}</h3>
            <p>{proposta.descricao}</p>
          </div>
        ))}
      </div>
      <div className={styles.outrasPropostas}>
        <h2>Outras Propostas</h2>
        <ul className={styles.outrasPropostasList}>
          {outrasPropostas.map((proposta, index) => (
            <li key={index}>
              <span className={styles.icon}>{proposta.icon}</span>
              <span className={styles.text}>{proposta.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Propostas;
