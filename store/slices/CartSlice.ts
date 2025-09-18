"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    description: string;
    image: string;
}
interface CartState {
    items: CartItem[];
    value: number;
}
const initialState: CartState = {
    items: [],
    value: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            }
            else {
                state.items.push(action.payload);
            }
            state.value += action.payload.quantity;

        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const removedItem = state.items.find(item => item.id === action.payload);

            if (removedItem) {
                state.value -= removedItem.quantity;
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },

        increment(state, action: PayloadAction<string>) {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },

        decrement(state, action: PayloadAction<string>) {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
        clearCart: (state) => {
            state.items = [];
        }
    },
});
export const { addToCart, removeFromCart, clearCart, increment, decrement, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;