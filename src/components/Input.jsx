import styled from "styled-components";
import { theme } from "../theme";

const Input = ({ value, onChange, Icon, ...othersProps }) => {
	// text, name, placeholder, required
	//! ...othersProps/restProps/any/extra = déstructuring de props

	return (
		<InputStyled>
			{Icon}
			<input value={value} onChange={onChange} type="text" {...othersProps} />
		</InputStyled>

		//? anciennement sans le ...othersProps
		/**
		 * 	value={value}
		 * onChange={onChange}
		 * type={text && "text"}
		 * id={name}
		 * placeholder={placeholder}
		 * required={required ? true : false}
		 * autoComplete={text ? "on" : "off"}
		 */
	);
};
export default Input;

const InputStyled = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: space-around;
	height: 53px;
	width: 35vw;
	margin-bottom: 20px;
	color: ${theme.colors.greyBlue};
	background-color: ${theme.colors.background_white};
	border-radius: ${theme.borderRadius.round};

	.icon {
		font-size: ${theme.fonts.P1};
		color: ${theme.colors.greyBlue};
	}

	input {
		font-size: ${theme.fonts.P1};
		border: none;
		background: transparent;
	}

	::placeholder {
		color: ${theme.colors.greyBlue};
		font-size: ${theme.fonts.P1};
	}
`;
