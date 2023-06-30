import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { adicionarFavorito, removerFavorito } from '../../redux/favoritosSlice';
import { IPersonagem } from "../../redux/types";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface IBotaoFavoritoProps {
  personagem: IPersonagem;
}
/**
 * Componente Botão Favorito - adicionar ou remover personagens dos favoritos.
 *
 * @component
 * @param {IPersonagem} personagem - O personagem que o botão vai modificar o estado de favorito.
 */
const BotaoFavorito: FC<IBotaoFavoritoProps> = ({ personagem }) => {
  const dispatch = useDispatch();
  const favoritos = useSelector((state: RootState) => state.favoritos);
  const isFavorito = favoritos.find(favorito => favorito.id === personagem.id) !== undefined;

  const toggleFavorito = () => {
    if (isFavorito) {
      dispatch(removerFavorito(personagem));
    } else {
      dispatch(adicionarFavorito(personagem));
    }
  }

  return (
    <button className="botao-favorito" onClick={toggleFavorito}>
      {isFavorito ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </button>
  );
};

export default BotaoFavorito;
