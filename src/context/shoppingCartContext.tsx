import {createContext, useContext, ReactNode, useState} from "react";
type ShoppingCartProviderProp = {
	children: ReactNode;
}
type ShoppingCartContext = {
	getItemQuantity: (id: number) => number;
	increaseItemQuantity: (id: number) => void;
	decreaseItemQuantity: (id: number) => void;
	removeItem: (id: number) => void;
	
}
type CartItem = {
	id: number;
	quantity: number;
}

const shoppingCartContext = createContext({} as ShoppingCartContext );
export const useShopCart = () => {
	return useContext(shoppingCartContext);
}

export const ShoppingCartProvider = ({children}:ShoppingCartProviderProp ) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const getItemQuantity = (id: number) => {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	}
	const increaseItemQuantity = (id: number) => {
		setCartItems(currItems => {
			if (currItems.find((item) => item.id === id) == null) {
			return [...currItems, {id, quantity: 1}];
			} else {
					return currItems.map((item) => {
						if(item.id === id){
							return {...item, quantity: item.quantity + 1}
						}else {
							return item;
						}
					}
			)}
		})
	}

	const decreaseItemQuantity = (id: number) => {
		setCartItems(currItems => {
			if (currItems.find((item) => item.id === id)?.quantity == 1) {
			return currItems.filter((item) => item.id !== id);
			}else {
					return currItems.map((item) => {
						if(item.id === id){
							return {...item, quantity: item.quantity - 1}
						}else {
							return item;
						}
					}
			)}
		}
	)}

	const removeItem = (id: number) => {
		setCartItems(currItems => {
			return currItems.filter((item) => item.id !== id);
		})
	}
	return(
		<shoppingCartContext.Provider value= {{getItemQuantity , increaseItemQuantity, decreaseItemQuantity, removeItem}}>{children}</shoppingCartContext.Provider>
	)
}