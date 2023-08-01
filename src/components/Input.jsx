import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../theme";

const Input = ({ value, onChange, ...restProps }) => {
	// text, name, placeholder, required
	//! ...restProps = déstructuring de props

	console.log("restProps", restProps);

	return (
		//<LabelStyled htmlFor={name}>{

		<div className="input-with-icon">
			<BsPersonCircle className="icon" />
			<input
				value={value}
				onChange={onChange}
				type="text"
				{...restProps}

				//? value={value}
				//? onChange={onChange}
				//? type={text && "text"}
				//? autoComplete={text ? "on" : "off"}
				//? id={name}
				//? placeholder={placeholder}
				//? required={required ? true : false}
			/>
		</div>
		//</LabelStyled>
	);
};

// const LabelStyled = styled.label`
// 	display: flex;
// 	flex-direction: column;
// 	width: 30vw;

// 	.input-with-icon {
// 		display: inline-flex;
// 		align-items: center;
// 		height: 53px;
// 		text-decoration: none;
// 		padding: 0 20px;
// 		margin-bottom: 20px;
// 		color: ${theme.colors.greyBlue};
// 		background-color: ${theme.colors.background_white};
// 		border-radius: ${theme.borderRadius.round};

// 		.icon {
// 			font-size: ${theme.fonts.P1};
// 			margin-right: 15px;
// 			color: ${theme.colors.greyBlue};
// 		}

// 		input {
// 			font-size: ${theme.fonts.P1};
// 			border: none;
// 			width: 100%;
// 			background: transparent;
// 		}

// 		::placeholder {
// 			color: ${theme.colors.greyBlue};
// 			font-size: ${theme.fonts.P1};
// 		}
// 	}
// `;

export default Input;
