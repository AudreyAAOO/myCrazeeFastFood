import styled from "styled-components";
import backgroundImg from "../../../assets/img/burgerBackground.jpg";
// imsc snippet

import Form from "./Form";
import Logo from "../../reusable-ui/Logo";

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
		background: url(${backgroundImg}) rgba(0, 0, 0, 0.7);
		/* background: url("../../src/assets/img/burgerBackground.jpg")
			rgba(0, 0, 0, 0.7); */
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
