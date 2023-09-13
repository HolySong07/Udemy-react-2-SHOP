import style from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

const MealItem = (props) => {

	

	const mealsList = props.item.map(item => (
		<li key={item.id} className={style.meal}>
			<div >
				<h3>{item.name}</h3>
				<div className={style.description}>{item.description}</div>
				<div className={style.price}>{`$${item.price.toFixed(2)}`}</div>
			</div>
			<div>
				<MealItemForm id={item.id}/>
			</div>
			
		</li>
	));


	return (
		<>
		{mealsList}
		</>
		
	)
}

export default MealItem