import { useContext } from "react";

import CartIcon from "./CartIcon"
import style from "./HeaderCartButton.module.css"
import CartContext from "../store/CartContext";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);

	// 1 аргумент массив, 2 аргумент начальное значение
	// в первом аргументу есть тоже аргументы
	// currentNumber -  текущая цифра
	// item - элемент на который смотрит сейчас

	const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {// превращаем данные в 1 массив
		return (
			currentNumber + item.amount
		)
	}, 1 );

	

	return (
		<button className={style.button} onClick={props.onClick}>
			<span className={style.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span  className={style.badge}>{numberOfCartItems}</span>
		</button>
	)
}

export default HeaderCartButton