// PaginaFavoritos.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { carregarFavoritos, limparFavoritos } from '../redux/favoritosSlice';
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { RootState } from '../redux/store'; 
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const PaginaFavoritos = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  const favoritos = useSelector((state: RootState) => state.favoritos);

  useEffect(() => {
    dispatch(carregarFavoritos());
  }, [dispatch]);

  const handleLimparFavoritos = () => {
    dispatch(limparFavoritos());
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger" onClick={handleLimparFavoritos}>Remover tudo</button>
      </div>
      <GradePersonagens personagens={favoritos} />
    </div>
  );
};

export default PaginaFavoritos;
