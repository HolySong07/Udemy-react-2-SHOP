
import Modal from "../UI/Modal";
import style from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";


const Cart = (props) => {
const cartCtx =	useContext(CartContext); // вызываем хук и указываем что нам нужны эти данные

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	}

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({...item, amount: 1});
	}

	const cartItems = <ul className={style["cart-items"]}>{cartCtx.items.map(item => (
			<CartItem 
				key={item.id} 
				name={item.name} 
				amount={item.amount} 
				price={item.price}
				onRemove={cartItemRemoveHandler.bind(null, item.id)}
				onAdd={cartItemAddHandler.bind(null, item)}
			/>
		)
	)}</ul>;

	const ifHaveItems = cartCtx.items.length > 0;


	return (
		<Modal onClick={props.onClose}>
			{cartItems}
			<div className={style.total}> 	
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={style.actions}>
				<button  className={style["button--alt"]} onClick={props.onClose}>Close</button>
				{ifHaveItems && <button onClick={props.onClose} className={style.button}>Order</button>}
				
			</div>
		</Modal>
	)
}

export default Cart