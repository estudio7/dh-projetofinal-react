import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPersonagem } from './types';

interface PersonagensState {
  lista: IPersonagem[];
  paginaAtual: number;
}

const initialState: PersonagensState = {
  lista: [], 
  paginaAtual: 1,
};

export const personagensSlice = createSlice({
  name: 'personagens',
  initialState,
  reducers: {
    fetchPersonagensSuccess: (state, action: PayloadAction<IPersonagem[]>) => {
      state.lista = action.payload; 
    setPage: (state, action: PayloadAction<number>) => {
      state.paginaAtual = action.payload;
    },
  },
});

export const { fetchPersonagensSuccess, setPage } = personagensSlice.actions;
export default personagensSlice.reducer;
