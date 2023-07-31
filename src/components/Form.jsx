import { useState } from "react";

// import des composants
import Input from "../components/Input";

const Form = () => {
	//! state
	const [username, setUsername] = useState("");

	//! comportements
	const handleSubmit = (e) => {
		// e.prevent.default();
		setUsername("");
		alert("Bonjour " + `${username}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Bienvenue chez nous !</h1>
			<br />
			{/* <h2>Connectez-vous</h2> */}

			<Input
				text={true}
				name={"Connectez-vous"}
				placeholder={"entrez votre prénom"}
				state={username}
				setState={setUsername}
			/>

			<button>Accédez à votre espace</button>
		</form>
	);
};

export default Form;
