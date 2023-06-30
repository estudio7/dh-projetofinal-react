import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";

import { IPersonagem } from "../../redux/types";

interface ICardPersonagemProps {
  personagem: IPersonagem;
}

const CardPersonagem: FC<ICardPersonagemProps> = ({ personagem }) => {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate(`/detalhes/${personagem.id}`);
  }

  return (
    <div className="card-personagem">
      <img
        src={personagem.image}
        alt={personagem.name}
        onClick={redirectToDetails} 
      />
      <div className="card-personagem-body">
        <span>{personagem.name}</span>
        <BotaoFavorito personagem={personagem} />
      </div>
    </div>
  );
};

export default CardPersonagem;
