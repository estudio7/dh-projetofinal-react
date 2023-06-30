import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch as useReduxDispatch } from 'react-redux';
import { fetchPersonagens } from '../redux/actions';
import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { IPersonagem } from "../redux/types";
import { RootState, AppDispatch } from "../redux/store";

const PaginaInicio: React.FC = () => {
  const [filtro, setFiltro] = useState("");
  const [ultimaPagina, setUltimaPagina] = useState(1);

  const dispatch = useReduxDispatch<AppDispatch>();
  const personagens = useSelector((state: RootState) => state.personagens.lista); 
  const paginaAtual = useSelector((state: RootState) => state.personagens.paginaAtual);

  useEffect(() => {
    dispatch(fetchPersonagens(paginaAtual));
  }, [dispatch, paginaAtual]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(response => response.json())
      .then(data => {
        setUltimaPagina(data.info.pages);
      })
      .catch(error => console.error('Erro na requisição:', error));
  }, []);

  const personagensFiltrados = personagens.slice(0, 9).filter((personagem: IPersonagem) =>
    personagem.name.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleFilterClear = () => {
    setFiltro("");
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
      </div>
      <Filtros 
        filtroAtual={filtro}
        onFilterChange={setFiltro} 
        onFilterClear={handleFilterClear}
      />
      <Paginacao ultimaPagina={ultimaPagina} />
      <GradePersonagens personagens={personagensFiltrados} />
      <Paginacao ultimaPagina={ultimaPagina} />
    </div>
  );
};

export default PaginaInicio;
