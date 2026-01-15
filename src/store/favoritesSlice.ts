import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Produto = {
  id: number
  nome: string
  preco: number
}

type FavoritesState = {
  itens: Produto[]
}

const initialState: FavoritesState = {
  itens: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      const existe = state.itens.find((item) => item.id === action.payload.id)

      if (!existe) {
        state.itens.push(action.payload)
      }
    },
    removerFavorito: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionarFavorito, removerFavorito } = favoritesSlice.actions

export default favoritesSlice.reducer
