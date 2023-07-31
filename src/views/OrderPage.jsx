import { useNavigate, useParams } from "react-router-dom";

const OrderPage = () => {
	const params = useParams();
	console.log("params", params);

	const navigate = useNavigate();

	const handleDisconnect = () => {
		navigate("/");
	};

	//nfn snippet

	return (
		<div>
			Bonjour {params.inputValue}
			{/* alert("Bonjour " + `${inputValue}`); */}
			<button onClick={handleDisconnect}>se déconnecter</button>
		</div>
	);
};

export default OrderPage;
