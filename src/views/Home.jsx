// import { useState } from "react";
// import burgerBackground from "../assets/img/burgerBackground.jpg";
import styled from "styled-components"; // imsc snippet   /macro

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
		<HomePageStyled>
			<Logo />
			<Form />
			{/* <img src={burgerBackground} alt="background" /> */}
		</HomePageStyled>
	);
};

const HomePageStyled = styled.div`
	/* font-family: 'Amatic SC', cursive; */
	background-color: ${theme.colors.background_dark};
	/* background-image: url("../../src/assets/img/burgerBackground.jpg"); */

	/* background-image: url(https://res.cloudinary.com/dp28uacxh/image/upload/v1676826844/Stocks%20pour%20sites/Avengers_logo_gihfpp.png); */
	background-size: 100vw;
	background-position-x: center;
	background-position-y: center;

	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default Home;
