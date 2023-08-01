import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components"; // imsc snippet   /macro
import { MdKeyboardArrowRight, MdNfc } from "react-icons/md";

// import des composants
import Input from "../Input";
import { theme } from "../../theme";

const Form = () => {
	//! state
	const [inputValue, setInputValue] = useState("");
	const navigate = useNavigate();

	//! comportements
	const handleSubmit = (e) => {
		//e.prevent.default();
		alert("Bonjour " + `${inputValue}`);
		navigate(`/Orderpage/${inputValue}`);
		setInputValue("");
	};
	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<LoginFormStyled onSubmit={handleSubmit}>
			<div>
				<h1>Bienvenue chez nous !</h1>
			</div>
			<div>
				<Input
					value={inputValue}
					onChange={handleChange}
					text={true}
					name={"Connectez-vous"}
					placeholder={"Entrez votre prénom..."}
					required={true}
				/>
			</div>

			<button className="button-with-icon">
				Accéder à mon espace
				<MdKeyboardArrowRight className="arrow-icon" />
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

	h1 {
		border-bottom: 2px solid ${theme.colors.primary};
		padding-bottom: 32px;
		font-family: "Amatic SC", cursive;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P5};
	}

	.button-with-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 30vw;
		height: 53px;
		font-size: ${theme.fonts.P0};
		font-weight: ${theme.weights.bold};
		color: ${theme.colors.white};
		border-radius: ${theme.borderRadius.round};
		background-color: ${theme.colors.primary_burger};
	}

	.arrow-icon {
		font-size: ${theme.fonts.P1};
		display: flex;
		margin-left: 10px;
	}

	button:hover {
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary_burger};
		cursor: pointer;
	}
`;

export default Form;
