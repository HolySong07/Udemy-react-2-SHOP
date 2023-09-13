import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Card/Cart";
import { useState } from "react";
import CartProvider from "./components/store/CartProvider";

function App() {
	const [openPop, setOpenPop] = useState(false);

	const ShowPopUp = () => {
		setOpenPop(true);
	}

	const HidePopUp = () => {
		setOpenPop(false);
	}

  return (
    <CartProvider>
		{openPop && <Cart onClose={HidePopUp}/>}
		
		<Header onOpen={ShowPopUp} />
		<main>
			<Meals />
		</main>
    </CartProvider>
  );
}

export default App;
