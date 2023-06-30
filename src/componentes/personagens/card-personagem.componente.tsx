import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";

import { IPersonagem } from "../../redux/types";

interface ICardPersonagemProps {
  personagem: IPersonagem;
}
/**
 * Componente CardPersonagem - exibe detalhes do personagem e um botão favorito.
 *
 * @component
 * @param {IPersonagem} personagem - O personagem a ser exibido.
 */
const CardPersonagem: FC<ICardPersonagemProps> = ({ personagem }) => {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate(`/personagem/${personagem.id}`); 
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
