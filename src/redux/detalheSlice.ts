import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPersonagemDetalhe = createAsyncThunk(
  'detalhe/fetchPersonagemDetalhe',
  async (idPersonagem) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`);
    return response.json();
  }
);

export const fetchEpisodiosPorPersonagem = createAsyncThunk(
  'detalhe/fetchEpisodiosPorPersonagem',
  async (urlsEpisodios: string[]) => {
    const promises = urlsEpisodios.map((url: string) => fetch(url).then(res => res.json()));
    const episodios = await Promise.all(promises);
    return episodios;
  }
);

export const detalheSlice = createSlice({
  name: 'detalhe',
  initialState: { personagemDetalhe: null, episodios: [], status: 'idle', error: null as string | null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPersonagemDetalhe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPersonagemDetalhe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.personagemDetalhe = action.payload;
      })
      .addCase(fetchPersonagemDetalhe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(fetchEpisodiosPorPersonagem.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEpisodiosPorPersonagem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.episodios = action.payload;
      })
      .addCase(fetchEpisodiosPorPersonagem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  }
});

export default detalheSlice.reducer;
