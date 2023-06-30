
import React, { FC } from 'react';
import CardPersonagem from "./card-personagem.componente";
import { IPersonagem } from "../../redux/types";
import "./grade-personagem.css";

interface IGradePersonagensProps {
  personagens?: IPersonagem[];
}

const GradePersonagens: FC<IGradePersonagensProps> = ({ personagens }) => {
  if (!personagens || personagens.length === 0) {
    return <div>Nenhum personagem encontrado.</div>;
  }

  return (
    <div className="grade-personagens">
      {personagens.map((personagem) => {
        return (
          <CardPersonagem 
            key={personagem.id}
            personagem={personagem} 
          />
        );
      })}
    </div>
  );
};

export default GradePersonagens;
