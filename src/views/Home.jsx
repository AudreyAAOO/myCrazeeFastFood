// import { useState } from "react";
// import burgerBackground from "../assets/img/burgerBackground.jpg";
import styled from "styled-components"; // imsc snippet   /macro

// import des composants
import Form from "../components/login/Form";
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
	font-family: "Amatic SC", cursive;
	/* background-image: url(https://res.cloudinary.com/dp28uacxh/image/upload/v1676826844/Stocks%20pour%20sites/Avengers_logo_gihfpp.png); */
	//background-color: ${theme.colors.background_dark};

	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	::before {
		content: "azerty";
		background-color: pink;
		background-image: url("../../src/assets/img/burgerBackground.jpg");
		// rgba(0, 0, 0, 0.7)
		background-size: cover;
		background-position: center;
		background-blend-mode: darken;
		z-index: -1;
	}
`;

export default Home;
