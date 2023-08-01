import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../theme";

const Input = ({ value, onChange, text, name, placeholder, required }) => {
	return (
		<LabelStyled htmlFor={name}>
			<h3>{name}</h3>
			<div className="input-with-icon">
				<BsPersonCircle className="icon" />
				<input
					value={value}
					onChange={onChange}
					type={text && "text"}
					id={name}
					placeholder={placeholder}
					required={required ? true : false}
					autoComplete={text ? "on" : "off"}
				></input>
			</div>
		</LabelStyled>
	);
};

const LabelStyled = styled.label`
	display: flex;
	flex-direction: column;
	width: 30vw;

	h3 {
		position: relative;
		width: 100%;
		font-family: "Amatic SC", cursive;
		font-weight: ${theme.weights.bold};
		font-size: ${theme.fonts.P4};
		margin: 20px 0;
		line-height: ${theme.fonts.P4};
		display: flex;
		justify-content: center;
	}

	.input-with-icon {
		display: inline-flex;
		align-items: center;
		height: 53px;
		text-decoration: none;
		padding: 0 20px;
		margin-bottom: 20px;
		color: ${theme.colors.greyBlue};
		background-color: ${theme.colors.background_white};
		border-radius: ${theme.borderRadius.round};

		.icon {
			font-size: ${theme.fonts.P1};
			margin-right: 15px;
			color: ${theme.colors.greyBlue};
		}

		input {
			font-size: ${theme.fonts.P1};
			border: none;
			width: 100%;
			background: transparent;
		}

		::placeholder {
			color: ${theme.colors.greyBlue};
			font-size: ${theme.fonts.P1};
		}
	}
`;

export default Input;
