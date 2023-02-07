import { useReducer } from 'react';

const actions = { INCREMENT: 'increment', DECREMENT: 'decrement', STEP: 'step' };

export default function UseReducerHooks({}) {
	const initialState = { count: 0, step: 1 };
	const [state, dispatch] = useReducer(reducer, initialState);

	function reducer(state = initialState, action) {
		switch (action.type) {
			case actions.INCREMENT:
				return {
					...state,
					count: state.count + state.step,
				};
			case actions.DECREMENT:
				return {
					...state,
					count: state.count - state.step,
				};
			case actions.STEP:
				return {
					...state,
					step: action.payload,
				};
			default:
				return state;
		}
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-4">Counter By useReducer</h1>
			<div className="count-badge my-4">{state.count}</div>
			<input
				className="input-field"
				type="number"
				value={state.step}
				onChange={(e) => dispatch({ type: actions.STEP, payload: Number(e.target.value) })}
				placeholder="Step Size"
			/>
			<div className="flex mt-4">
				<button className="btn-basic" onClick={() => dispatch({ type: actions.INCREMENT })}>
					Increment
				</button>
				<button
					className="btn-danger"
					onClick={() => dispatch({ type: actions.DECREMENT })}
				>
					Decrement
				</button>
			</div>
		</div>
	);
}
