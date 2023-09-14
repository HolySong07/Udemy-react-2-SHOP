import CartContext from "./CartContext"
import { useReducer } from "react"

// for reducer
const defaultCartState  = {
	items: [],
	totalAmount: 0
};

// for reducer
// state - последнее состояние
// обновляет состояние карты в зависимости от того какая функция сработала addItemToCard или removeItemToCard
const cartReducer = (state, action) => {
	if (action.type === "Add_Cart_Item") {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

		//const existingCartItemIndex = state.items.findIndex();
		// .concat(); встроенный метод в js, добавляет в массив элемент и дает новый массив, а не ссылку
		const updatedItems = state.items.concat(action.item);
		

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		}
	}

	return defaultCartState
};

const CartProvider = (props) => {
	// for reducer
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	// for reducer
	// добавляем айтемы в редюсер при добавлении товаров, нужно вызывать
	const addItemToCard = (item) => {
		dispatchCartAction({
			type: "Add_Cart_Item",
			item: item
		})
	}

	// for reducer
	const removeItemToCard = (id) => {
		dispatchCartAction({
			type: "Remove_Cart_Item",
			id: id
		});
	}


	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCard,
		removeItem: removeItemToCard
	}

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider >
	)
} 

export default CartProvider