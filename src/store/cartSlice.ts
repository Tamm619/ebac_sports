import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Produto = {
    id: number;
    nome: string;
    preco: number;
};

type CartState = {
    itens: Produto[];
};

const initialState: CartState = {
    itens: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
        state.itens.push(action.payload);
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
        state.itens = state.itens.filter(item => item.id !== action.payload);
    },
    },
});

export const { adicionarAoCarrinho, removerDoCarrinho } = cartSlice.actions;
export default cartSlice.reducer;
