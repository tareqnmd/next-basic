import { useReducer } from 'react';
const actionType = { INCREMENT: 'increment', DECREMENT: 'decrement', STEP: 'decrement' };

export default function UseReducerHooks({}) {
	const initialState = { count: 0, step: 1 };
	const [state, dispatch] = useReducer(reducer, initialState);
	function reducer(state = initialState, action: { type: string; payload: Number }) {
		switch (action.type) {
			case actionType.INCREMENT:
				return {
					...state,
					count: state.count + state.step,
				};
			case actionType.DECREMENT:
				return {
					...state,
					count: state.count - state.step,
				};
			case actionType.STEP:
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
			<div className="count-badge my-4">{state.count}</div>
			<input
				className="input-field"
				type="number"
				value={state.step}
				onChange={(e) =>
					dispatch({ type: actionType.STEP, payload: Number(e.target.value) })
				}
				placeholder="Step Size"
			/>
			<div className="flex mt-4">
				<button
					className="btn-basic"
					onClick={() => dispatch({ type: actionType.INCREMENT })}
				>
					Increment
				</button>
				<button
					className="btn-danger"
					onClick={() => dispatch({ type: actionType.DECREMENT })}
				>
					Decrement
				</button>
			</div>
		</div>
	);
}
