import { AppThunk } from './store';
import { fetchPersonagensSuccess, setPage } from './personagensSlice';
/**
 * Esta função é uma ação assíncrona (thunk) que busca a lista de personagens
 * da API de Rick and Morty. Ela usa o número da página como argumento para
 * buscar personagens de páginas diferentes.
 * @param {number} pagina - O número da página para buscar.
 */
export const fetchPersonagens = (pagina: number): AppThunk => async (dispatch) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    const data = await response.json();
    dispatch(fetchPersonagensSuccess(data.results));
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};

export const setPagina = (pagina: number): AppThunk => dispatch => {
  dispatch(setPage(pagina)); 
};
