import React from "react";

import proposta1 from "../assets/proposta1.png";
import proposta2 from "../assets/proposta2.png";
import proposta3 from "../assets/proposta3.png";
import proposta4 from "../assets/proposta4.png";

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
  "Habitação Popular",
  "Sustentabilidade Ambiental",
  "Cultura e Lazer",
  "Desenvolvimento Econômico",
  "Inclusão Social",
];

const Propostas = () => {
  return (
    <section id="propostas" className="propostas">
      <h2>Propostas</h2>
      <div className="propostas-container">
        {propostas.map((proposta) => (
          <div key={proposta.id} className="propostas-card">
            <img
              src={proposta.imagem}
              alt={proposta.titulo}
              className="propostas-card-image"
            />
            <h3>{proposta.titulo}</h3>
            <p>{proposta.descricao}</p>
          </div>
        ))}
      </div>
      <div className="outras-propostas">
        {" "}
        {/* Material Icons não funfa por algum motivo */}
        <h2>Outras Propostas</h2>
        <ul className="outras-propostas-list">
          <li>
            <span className="icon">🌱</span>
            <span className="text">Proposta sobre meio ambiente</span>
          </li>
          <li>
            <span className="icon">🏫</span>
            <span className="text">Proposta de educação para todos</span>
          </li>
          <li>
            <span className="icon">🚧</span>
            <span className="text">
              Proposta de melhorias em infraestrutura
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Propostas;

// tem que terminar
