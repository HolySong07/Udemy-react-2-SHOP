import style from "./Header.module.css"
import img from "../img/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {


	return (
		<>
			<header className={style.header}>
				<h1>React meals</h1>
				<HeaderCartButton onClick={props.onOpen}/>
			</header>
			<div className={style["main-image"]}>
				<img src={img} alt="food"/>
			</div>
		</>
	)
}

export default Header