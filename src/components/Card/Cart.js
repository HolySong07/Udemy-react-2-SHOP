/* import { useContext } from "react/cjs/react.development"; */

/* import CartContext from "../store/CartContext"; */
import Modal from "../UI/Modal";
import style from "./Cart.module.css";


const Cart = (props) => {
//	useContext(CartContext) // вызываем хук и указываем что нам нужны эти данные

const cartItems = <ul className={style["cart-items"]}>{[
	{
		id: "c1", name: "sushi", amount: 2, price: 12}].map(item => (
			<li>{item.name}</li>
		)
	)}</ul>;

	return (
		<Modal onClick={props.onClose}>
			{cartItems}
			<div className={style.total}> 	
				<span>Total Amount</span>
				<span>24</span>
			</div>
			<div className={style.actions}>
				<button  className={style["button--alt"]} onClick={props.onClose}>Close</button>
				<button onClick={props.onClose} className={style.button}>Order</button>
			</div>
		</Modal>
	)
}

export default Cart