import CartContext from "./CartContext"

const CartProvider = (props) => {
	const addItemToCard = () => {

	}

	const removeItemToCard = () => {

	}


	const cartContext = {
		items: [],
		totalAmount: 0,
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