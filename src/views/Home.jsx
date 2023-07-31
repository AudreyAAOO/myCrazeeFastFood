// import { useState } from "react";
// import burgerBackground from "../assets/img/burgerBackground.jpg";
import styled from "styled-components"; // imsc snippet   /macro

// import des composants
import Form from "../components/login/Form";
import Logo from "../components/reusable-ui/Logo";
import { theme } from "../theme";
import OrderPage from "./OrderPage";

const Home = () => {
	return (
		<HomePageStyled>
			<Logo />
			<Form />
		</HomePageStyled>
	);
};

const HomePageStyled = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: "Amatic SC", cursive;

	::before {
		content: "";
		/* background-color: pink; */
		background: url("../../src/assets/img/burgerBackground.jpg")
			rgba(0, 0, 0, 0.7);
		background-size: cover;
		background-position: center;
		background-blend-mode: darken;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
	}
`;

export default Home;
