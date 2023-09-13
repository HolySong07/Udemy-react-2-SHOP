import style from "./Card.module.css"

const Cart = (props) => {
	
	return (
		<div className={style.card}>{props.children}</div>
	)
}

export default Cart