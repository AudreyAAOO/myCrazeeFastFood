import { useNavigate, useParams } from "react-router-dom";

const OrderPage = () => {
	const params = useParams();
	console.log(params);

	const navigate = useNavigate();

	const handleDisconnect = () => {
		navigate("/");
	};

	return (
		<div>
			Bonjour {params.username}
			{/* alert("Bonjour " + `${username}`); */}
			<button onClick={handleDisconnect}>se déconnecter</button>
		</div>
	);
};

export default OrderPage;
