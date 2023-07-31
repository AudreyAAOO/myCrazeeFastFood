import styled from "styled-components";
import logoOrange from "../assets/img/logoOrange.png";
import { theme } from "../theme";

const Logo = () => {
	return (
		<LogoStyled>
			<h1>
				CRAZEE
				<img src={logoOrange} alt="burger" />
				BURGER
			</h1>
		</LogoStyled>
	);
};

const LogoStyled = styled.div`
	/* background-color: ${theme.colors.green}; */
	width: 850px;
	height: 200px;
	color: ${theme.colors.primary};
	font-family: "Amatic SC", cursive;
	font-weight: ${theme.weights.bold};
	font-size: 110px;
	line-height: 115px;
	/* background-color: ${theme.colors.white}; */
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 25px;
	margin: 40px 20px;

	img {
		/* background-color: ${theme.colors.blue}; */
		width: 200px;
		height: 150px;
		/* padding: 50px 20px; */
	}
`;

export default Logo;
