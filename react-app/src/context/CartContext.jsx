import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext([]);

function cartReducer(state, action) {
	switch (action.type) {
		case 'ADD': {
			const found = state.find(i => i.id === action.item.id);
			if (found) return state.map(i =>
				i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i);
			return [...state, { ...action.item, qty: 1 }];
		}
		case 'INC':
			return state.map(i =>
				i.id === action.id ? { ...i, qty: i.qty + 1 } : i);
		case 'DEC':
			return state.map(i =>
				i.id === action.id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i);
		case 'REMOVE':
			return state.filter(i => i.id !== action.id);
		default:
			return state;
	}
}

export function CartProvider({ children }) {
	const [cart, dispatch] = useReducer(cartReducer, []);
	return (
		<CartContext.Provider value={{ cart, dispatch }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	return useContext(CartContext);
}