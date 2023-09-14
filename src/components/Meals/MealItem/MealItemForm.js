import Input from "../../UI/Input";
import style from "./MealItemForm.module.css"
import { useRef, useState } from "react"

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true)
	const amountInputRef = useRef()

	const submitHandler = (e) => {
		e.preventDefault();

		// console.log(amountInputRef);
		// console.log(amountInputRef.current.value);

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		

		// валидация формы
		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCard(enteredAmountNumber); 
	} 

	return (
		<form className={style.form} onSubmit={submitHandler}>
			<Input label="Amount" input={{
				ref: amountInputRef,
				id: 'amount_' + props.id,
				type: "number",
				min: "1",
				max: "5",
				step: "1",
				defaultValue: "1"
			}} />
			<button>Add</button>
			{!amountIsValid && <p>error</p>}
			</form>
	)
}

export default MealItemForm;