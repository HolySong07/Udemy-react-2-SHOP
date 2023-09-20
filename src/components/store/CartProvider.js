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

		// если есть этот элемент, вернет нам его
		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);

		const existingCartItem = state.items[existingCartItemIndex];
		
		let updatedItems;

		if (existingCartItem) {
			
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount
			}

			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			
			// .concat(); встроенный метод в js, добавляет в массив элемент и дает новый массив, а не ссылку
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount
		};
	}

	if (action.type === "Remove_Cart_Item") {

		




		const existingCartItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);

		const existingItem = state.items[existingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existingItem.price;
		let updatedItems;

		if (existingItem.amount === 1) {
			updatedItems = state.items.filter(item => item.id !== action.id);
		} else {
			const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}

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