import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

// import des composants
import Input from "../Input";
import { theme } from "../../theme";

const Form = () => {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState("");

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
				<h2>Connectez-vous</h2>
			</div>
			<div>
				<Input
					value={inputValue}
					onChange={handleChange}
					placeholder={"Entrez votre prénom..."}
					required={true}
					Icon={<BsPersonCircle className="icon" />}
					//name={"Connectez-vous"}
					//text={true}
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
	width: 35vw;
	padding: 1rem 1rem;
	text-align: center;

	h1 {
		border-bottom: 2px solid ${theme.colors.primary};
		padding-bottom: 20px;
		font-family: "Amatic SC", cursive;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P5};
	}

	h2 {
		font-family: "Amatic SC", cursive;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P4};
		margin: 15px 0;
	}

	.button-with-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: 100%;
		height: 53px;
		font-size: ${theme.fonts.P0};
		font-weight: ${theme.weights.bold};
		color: ${theme.colors.white};
		border-radius: ${theme.borderRadius.round};
		border: 2px solid ${theme.colors.primary_burger};
		background-color: ${theme.colors.primary_burger};
	}

	.arrow-icon {
		font-size: ${theme.fonts.P1};
		margin-left: 13px;
	}

	button:hover {
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary_burger};
		cursor: pointer;
	}
`;

export default Form;
