import React, { useEffect, useReducer } from "react";
import "./reducer.css";
import { toDoReducer } from "./toDoReducer";
import { ToDoList } from "./ToDoList";
import { ToDoAdd } from "./ToDoAdd";

const init = () => {
	return JSON.parse(localStorage.getItem("toDos")) || [];
};

export const ToDoApp = () => {
	const [toDos, dispatch] = useReducer(toDoReducer, [], init);

	useEffect(() => {
		localStorage.setItem("toDos", JSON.stringify(toDos));
	}, [toDos]);

	const handleDelete = (id) => {
		dispatch({
			type: "delete",
			payload: id,
		});
	};

	const handleToggle = (id) => {
		dispatch({
			type: "toggle",
			payload: id,
		});
	};

	const handleAddToDo = (newToDo) => {
		dispatch({
			type: "add",
			payload: newToDo,
		});
	};

	return (
		<div>
			<h1>To Do App ({toDos.length}) </h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<h4>To Do's</h4>
					<ToDoList
						toDos={toDos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				</div>

				<div className="col-5">
					<ToDoAdd handleAdd={handleAddToDo} />
				</div>
			</div>
		</div>
	);
};
