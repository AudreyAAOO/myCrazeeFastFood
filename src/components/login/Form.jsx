import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components"; // imsc snippet   /macro
import { MdKeyboardArrowRight, MdNfc } from "react-icons/md";

// import des composants
import Input from "../Input";
import { theme } from "../../theme";

const Form = () => {
	//! state
	const [username, setUsername] = useState("");

	//! comportements
	const handleSubmit = (e) => {
		e.prevent.default();
		alert("Bonjour " + `${username}`);
		setUsername("");
		Navigate(`/Orderpage/${inputValue}`);
	};

	// const handleChange = (e) => {
	// 	setUsername(e.target.value);
	// };

	return (
		<LoginFormStyled onSubmit={handleSubmit}>
			<h1>Bienvenue chez nous !</h1>

			<div>
				<Input
					//mis ds le composant
					text={true}
					name={"Connectez-vous"}
					value={username}
					//onChange={handleChange}
					//type="text"
					placeholder={"Entrez votre prénom..."}
					//required
					inputValue={username}
					setInputValue={setUsername}
				/>
			</div>
			<button>
				Accéder à mon espace <MdKeyboardArrowRight />
			</button>
		</LoginFormStyled>
	);
};

const LoginFormStyled = styled.form`
	font-family: "Open Sans", sans-serif;
	color: ${theme.colors.white};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: blue;
	
	h1 {
		border-bottom: 2px solid ${theme.colors.primary};
		padding-bottom: 32px;
		font-family: "Amatic SC", cursive;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P5};
	}

	button {
		border-radius: ${theme.borderRadius.round};
		background-color: ${theme.colors.primary_burger};
		width: 400px;
		height: 53px;
		font-size: ${theme.fonts.P0};
		font-weight: ${theme.weights.bold};
		color: ${theme.colors.white};
	}

	button:hover {
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary_burger};
		cursor: pointer;
	}

	/* button:active {
		background-color: ${theme.colors.white};
		font-size: ${theme.fonts.P0};
		font-weight: ${theme.weights.bold};
		color: ${theme.colors.primary_burger};
		cursor: pointer; 
	} */
`;

export default Form;