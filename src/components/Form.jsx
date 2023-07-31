import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"; // imsc snippet   /macro
import { MdKeyboardArrowRight } from "react-icons/md";

// import des composants
import Input from "../components/Input";
import { theme } from "../theme";

const Form = () => {
	//! state
	const [username, setUsername] = useState("");

	//! comportements
	const handleSubmit = (e) => {
		//e.prevent.default();
		setUsername("");
		navigate(`/Orderpage/${username}`);
	};

	return (
		<LoginFormStyled onSubmit={handleSubmit}>
			<h2>Bienvenue chez nous !</h2>
			<br />
			{/* <h2>Connectez-vous</h2> */}
			<div>
				<Input
					text={true}
					name={"Connectez-vous"}
					placeholder={"entrez votre prénom"}
					state={username}
					setState={setUsername}
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

	h2 {
		border-bottom: 2px solid ${theme.colors.primary};
		padding-bottom: 32px;
		font-family: "Amatic SC", cursive;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P5};
	}

	button {
		background-color: ${theme.colors.primary_burger};
		width: 400px;
		height: 53px;
		/* display: flex;
		align-items: center;
		justify-content: center; */
		padding: 5px;
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
