import styled from "styled-components";
import logoOrange from "../../assets/img/logoOrange.png";
import { theme } from "../../theme";

const Logo = () => {
	return (
		<LogoStyled>
			{/* <div> */}
			<h1>CRAZEE</h1>
			<img src={logoOrange} alt="burger" />
			<h1>BURGER</h1>
			{/* </div> */}
		</LogoStyled>
	);
};

const LogoStyled = styled.div`
	// transform: scale(0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 70vw;
	gap: 10px;
	padding: 20px;

	h1 {
		// display: inline;
		text-align: center;
		font-family: "Amatic SC", cursive;
		font-weight: ${theme.weights.bold};
		// font-size: ${theme.fonts.P6};
		font-size: 120px;
		letter-spacing: 1.5px;
		color: ${theme.colors.primary};
	}

	img {
		//width: 150px;
		width: 20vw;
		//height: 150px;
		object-fit: contain;
		object-position: center;
		margin: 0 5px;
	}
`;

export default Logo;
