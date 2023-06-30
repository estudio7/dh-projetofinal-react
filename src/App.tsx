import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PaginaInicio from './paginas/Inicio.pagina';
import PaginaFavoritos from './paginas/Favoritos.pagina';
import DetalhePersonagem from './paginas/Detalhe.pagina';
import Cabecalho from './componentes/layout/cabecalho.componente';

function App() {
  return (
    <Router>
      <div className="App">
        <Cabecalho />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
          <Route path="personagem/:id" element={<DetalhePersonagem />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
