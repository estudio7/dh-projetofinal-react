import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/personagensSlice';
import "./paginacao.css";

const Paginacao = ({ ultimaPagina }) => {
  const dispatch = useDispatch();
  const paginaAtual = useSelector(state => state.personagens.paginaAtual);


  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      dispatch(setPage(paginaAtual - 1));
    }
  }

  const proximaPagina = () => {
    if (paginaAtual < ultimaPagina) {
      dispatch(setPage(paginaAtual + 1));
    }
  }

  return (
    <div className="paginacao">
      <button onClick={paginaAnterior} disabled={paginaAtual === 1} className={"primary"}>
        Anterior
      </button>
      <button onClick={proximaPagina} disabled={paginaAtual === ultimaPagina} className={"primary"}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
