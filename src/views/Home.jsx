// import { useState } from "react";

// import des composants
import Form from "../components/Form";
import Logo from "../components/Logo";
import { theme } from "../theme";
import OrderPage from "./OrderPage";

const Home = () => {
	//! state

	//! comportements

	//! render
	return (
		<>
			<HomePageStyled>
				<Logo />
				<Form />
				<OrderPage />
			</HomePageStyled>
		</>
	);
};

export default Home;
