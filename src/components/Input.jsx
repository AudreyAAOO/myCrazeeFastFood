import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../theme";

const Input = ({ text, name, placeholder, inputValue, setInputValue }) => {
	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<LabelStyled htmlFor={name}>
			<h3>{name}</h3>
			<InputWrapper>
				<div>
					<BsPersonCircle />
					<input
						required
						autoComplete={text ? "on" : "off"}
						id={name}
						type={text && "text"}
						placeholder={placeholder}
						value={inputValue}
						onChange={handleChange}
					></input>
				</div>
			</InputWrapper>
		</LabelStyled>
	);
};

const LabelStyled = styled.label`
	//color: ${theme.colors.white};
	margin: 5px;
	/* display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center; */
	h3 {
		//border: 2px solid blue;
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
	display: flex;
	width: 400px;
	height: 53px;
	color: ${theme.colors.greyBlue};
	background-color: ${theme.colors.background_white};
	border-radius: ${theme.borderRadius.round};
	div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 20px;
		padding-left: 20px;
	}

	input {
		border: 0;
		background: transparent;
	}
`;

export default Input;
