import React from "react";
import "./counter.css";
import { useCounter } from "./../../Hooks/useCounter";

export const CounterWithCustomHook = () => {
	const { state, increment, decrement, reset } = useCounter();
	const factor = 2;
	return (
		<>
			<h1>Conter With Hook {state}</h1>
			<hr />
			<button onClick={() => increment(factor)} className="btn btn-success m-1">
				+ {factor}
			</button>

			<button onClick={reset} className="btn btn-default m-1 border">
				reset
			</button>

			<button onClick={() => decrement(factor)} className="btn btn-danger m-1">
				- {factor}
			</button>
		</>
	);
};
