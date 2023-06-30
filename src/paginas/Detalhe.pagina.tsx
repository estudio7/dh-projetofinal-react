import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux'; 
import { useParams } from 'react-router-dom';
import { fetchPersonagemDetalhe, fetchEpisodiosPorPersonagem } from '../redux/detalheSlice';
import { RootState } from '../redux/store'; 
import { ThunkDispatch } from 'redux-thunk';
import BotaoFavorito from "../componentes/botoes/botao-favorito.componente";
import CardEpisodio from "../componentes/episodios/card-episodio.componente"; // Importado
import "./Detalhe.css";

type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
/**
 * Componente DetalhePersonagem - exibe detalhes do personagem e episódios associados.
 *
 * @component
 */
const DetalhePersonagem = () => {
  const dispatch = useDispatch<AppDispatch>(); 
  const { id } = useParams<{ id: string }>();
  const { personagemDetalhe, episodios, status } = useSelector((state: RootState) => state.detalhe);

  useEffect(() => {
    if (id) {
      dispatch(fetchPersonagemDetalhe(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (personagemDetalhe) {
      dispatch(fetchEpisodiosPorPersonagem(personagemDetalhe.episode));
    }
  }, [dispatch, personagemDetalhe]);

  if (status === 'loading' || !personagemDetalhe) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="detalhe-personagem">
      <img src={personagemDetalhe.image} alt={personagemDetalhe.name} />
      <div>
        <span>{personagemDetalhe.name}</span>
        <BotaoFavorito personagem={personagemDetalhe} />
        <h2>Episódios:</h2>
        <div className="episodios">
          {episodios.map(episodio => <CardEpisodio episodio={episodio} key={episodio.id} />)}
        </div>
      </div>
    </div>
  );
};

export default DetalhePersonagem;
