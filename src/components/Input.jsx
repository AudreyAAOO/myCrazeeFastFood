import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../theme";

const Input = ({ text, name, placeholder, state, setState }) => {
	const handleChange = (e) => {
		setState(e.target.value);
	};

	return (
		<LabelStyled htmlFor={name}>
			<h3>{name}</h3>
			<InputWrapper>
				<BsPersonCircle />
				<input
					required
					autoComplete={text ? "on" : "off"}
					id={name}
					type={text && "text"}
					placeholder={placeholder}
					value={state}
					onChange={handleChange}
				></input>
			</InputWrapper>
		</LabelStyled>
	);
};

const LabelStyled = styled.label`
	color: ${theme.colors.white};
	border: 2px solid red;

	/* display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center; */
	h3 {
		border: 2px solid blue;
		font-family: "Amatic SC", cursive;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P4};
		margin-bottom: 20px;
		line-height: ${theme.fonts.P4};
		display: flex;
		justify-content: center;
	}
`;

const InputWrapper = styled.div`
	/* background-color: ${theme.colors.white}; */
	border: 2px solid red;
	width: 400px;
	height: 53px;
	display: flex;
	align-items: center;
	padding-left: 25px;
	/* justify-content: center; */
	gap: 20px;
	color: ${theme.colors.greyBlue};
`;

export default Input;
