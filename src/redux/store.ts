import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favoritosReducer from './favoritosSlice';
import detalheReducer from './detalheSlice';
import personagensReducer from './personagensSlice';

const store = configureStore({
  reducer: {
    favoritos: favoritosReducer,
    detalhe: detalheReducer,
    personagens: personagensReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export default store;

