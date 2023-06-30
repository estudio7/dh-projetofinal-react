/**
 * As interfaces neste arquivo definem os diferentes tipos de dados usados no estado e as ações.
 */

/**
 * Interface para a representação de um personagem.
 * Adicione mais campos conforme necessário.
 */
export interface IPersonagem {
    id: number;
    name: string;
    image: string;
    // adicione mais campos conforme necessário
  }
  /**
 * Interface para a representação de um favorito.
 * Cada favorito é representado por um ID e um objeto de personagem.
 */
  export interface IFavorito {
    id: number;
    personagem: IPersonagem;
  }
  /**
 * Interface para a representação do estado dos favoritos.
 * O estado dos favoritos é composto por uma lista de favoritos.
 */
  export interface IFavoritosState {
    favoritos: IFavorito[];
  }
  /**
 * Enumeração das diferentes ações que podem ser tomadas nos favoritos.
 */
  export enum FavoritoActionTypes {
    ADICIONAR_FAVORITO = 'ADICIONAR_FAVORITO',
    REMOVER_FAVORITO = 'REMOVER_FAVORITO',
  }
  /**
 * Interface para a representação da ação de adicionar um favorito.
 * A ação de adicionar um favorito inclui o tipo da ação e o payload, que é o personagem a ser adicionado.
 */
  interface IAdicionarFavoritoAction {
    type: FavoritoActionTypes.ADICIONAR_FAVORITO;
    payload: IPersonagem;
  }
  /**
 * Interface para a representação da ação de remover um favorito.
 * A ação de remover um favorito inclui o tipo da ação e o meta, que é o ID do personagem a ser removido.
 */
  interface IRemoverFavoritoAction {
    type: FavoritoActionTypes.REMOVER_FAVORITO;
    meta: {
      id: number;
    };
  }
  /**
 * Tipo que representa todas as possíveis ações de favorito.
 */
  export type FavoritoActions = IAdicionarFavoritoAction | IRemoverFavoritoAction;
  