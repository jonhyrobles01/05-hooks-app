import React from "react";
import { useForm } from "./../../Hooks/useForm";

export const ToDoAdd = ({ handleAdd }) => {
	const [{ description }, handleInputChange, reset] = useForm({
		description: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 1) {
			return;
		}

		handleAdd({
			id: new Date().getTime(),
			desc: description,
			done: false,
		});

		reset();
	};

	return (
		<>
			<h4>Agregar To Do</h4>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="description"
					placeholder="Aprender ..."
					autoComplete="off"
					className="form-control"
					value={description}
					onChange={handleInputChange}
				/>

				<button
					type="submit"
					className="btn btn-outline-primary mt-1 btn-block"
				>
					Agregar
				</button>
			</form>
		</>
	);
};
