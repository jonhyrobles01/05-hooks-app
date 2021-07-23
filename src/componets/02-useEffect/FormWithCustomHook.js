import React from "react";
import { useForm } from "../../Hooks/useForm";
import "./effect.css";

export const FormWithCustomHook = () => {
	const [formValues, handleInputChange] = useForm({
		name: "",
		email: "",
		password: "",
	});

	const { name, email, password } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValues);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Form With Custom Hook</h1>
			<hr />

			<div className="form-group">
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Tu nombre"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
			</div>

			<br />

			<div className="form-group">
				<input
					type="email"
					name="email"
					className="form-control"
					placeholder="email@gmail.com"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
			</div>

			<br />

			<div className="form-group">
				<input
					type="password"
					name="password"
					className="form-control"
					placeholder="*******"
					autoComplete="off"
					value={password}
					onChange={handleInputChange}
				/>
			</div>

			<br />

			<button type="submit" className="btn btn-primary">
				Guardar
			</button>
		</form>
	);
};
