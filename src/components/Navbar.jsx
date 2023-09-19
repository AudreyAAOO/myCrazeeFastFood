import styled from "styled-components";
import { theme } from "../theme";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "./reusable-ui/Logo";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
	const params = useParams();
	console.log("params", params);
	const navigate = useNavigate();

	const handleDisconnect = () => {
		navigate("/");
	};

	return (
		<NavbarStyled>
			<div className="logo">
				<Logo />
			</div>
			<div className="right">
				<div className="logged">
					<span>Hey, {params.username}</span>
					<br />
					<button onClick={handleDisconnect}>se déconnecter</button>
				</div>
			</div>
			<div className="avatar_icon">
				<BsPersonCircle className="icon" />
			</div>
		</NavbarStyled>
	);
};

const NavbarStyled = styled.div`
	border: 2px solid blue;
	width: 100vw;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: ${theme.colors.primary};
	background-color: gray;

	.logo {
		position: relative;
		width: 100%;
		transform: scale(0.5);
		border: 2px solid red;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.right {
		background-color: grey;

		border: 2px solid green;
		//display: flex;
		//align-items: center;
		//justify-content: center;
		flex-direction: column;
	}

	.logged {
		width: 300px;
	}

	.avatar_icon {
		transform: scale(2.5);
	}
`;
export default Navbar;
