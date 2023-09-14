import style from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
import {useContext} from "react"
import CartContext from "../../store/CartContext"

const MealItem = (props) => {
	const cartCtx =useContext(CartContext);

	const addToCardHandler = amount => {
		console.log(amount);
		console.log(props.id);

		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price
		})
	}

	return (
		
		<li key={props.id}  className={style.meal}>
			<div >
				<h3>{props.name}</h3>
				<div className={style.description}>{props.description}</div>
				<div className={style.price}>{`$${props.price.toFixed(2)}`}</div>
			</div>
			<div>
				<MealItemForm onAddToCard={addToCardHandler} id={props.id}/>
			</div>
			
		</li>
		
	)
}

export default MealItem