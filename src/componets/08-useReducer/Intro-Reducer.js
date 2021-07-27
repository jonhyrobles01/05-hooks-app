const initialState = [
	{
		id: 1,
		todo: "Comprar pan",
		done: false,
	},
];

const ACTIONS = {
	agregar: (state, action) => {
		return [...state, action.payload];
	},
};

const toDoReducer = (state = initialState, action) => {
	return action.type ? ACTIONS[action.type](state, action) : state;
};

let toDos = toDoReducer();

const newToDo = {
	id: 2,
	todo: "Comprar leche",
	done: false,
};

const action = {
	type: "agregar",
	payload: newToDo,
};

toDos = toDoReducer(toDos, action);

console.log(toDos);
