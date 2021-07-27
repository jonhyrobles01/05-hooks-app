import React from "react";

export const ToDoListItem = ({ toDo, index, handleDelete, handleToggle }) => {
	return (
		<li className="list-group-item">
			<p
				onClick={() => handleToggle(toDo.id)}
				className={`${toDo.done && "complete"}`}
			>
				{index + 1}. {toDo.desc}
			</p>
			<button className="btn btn-danger" onClick={() => handleDelete(toDo.id)}>
				Borrar
			</button>
		</li>
	);
};
