const Input = ({ text, name, placeholder, state, setState }) => {
	const handleChange = (e) => {
		setState(e.target.value);
	};

	return (
		<label htmlFor={name}>
			<h2>{name}</h2>
						
			<input
				required
				autoComplete={text ? "on" : "off"}
				id={name}
				type={text && "text"}
				placeholder={placeholder}
				value={state}
				onChange={handleChange}
			></input>
		</label>
	);
};

export default Input;
