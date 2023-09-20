import { useContext, useEffect, useState } from "react";

import CartIcon from "./CartIcon"
import style from "./HeaderCartButton.module.css"
import CartContext from "../store/CartContext";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);

	// Деструктуризация
	const {items} = cartCtx;

	// 1 аргумент массив, 2 аргумент начальное значение
	// в первом аргументу есть тоже аргументы
	// currentNumber -  текущая цифра
	// item - элемент на который смотрит сейчас

	const numberOfCartItems = items.reduce((currentNumber, item) => {// превращаем данные в 1 массив
		return (
			currentNumber + item.amount
		)
	}, 0 );

	const [btnNew, setBtnNew] = useState(false);

	const btnClass = `${style.button} ${btnNew ? style.bump  : ''}`;

	

	useEffect(() => {
		if (items.length === 0) {
			return;
		} 

		setBtnNew(true);

		const timers = setTimeout(() => {
			setBtnNew(false);
		}, 400 )
		

		return () => {
			clearTimeout(timers);
		};
		
	}, [items]) // если колл товаров меняется, выполняется эта функция заново

	return (
		<button className={btnClass} onClick={props.onClick}>
			<span className={style.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span  className={style.badge}>{numberOfCartItems}</span>
		</button>
	)
}

export default HeaderCartButton