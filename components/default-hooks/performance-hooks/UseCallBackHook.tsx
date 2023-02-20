import { useCallback, useState } from 'react';
import CallbackHookItems from './CallbackHookItems';

export default function UseCallBackHook() {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState(1);

	const handleClick = () => {
		setCount((prev) => prev + 1);
	};

	const getNumbers = useCallback(() => {
		return [input - 1, input, input + 1];
	}, [input]);

	// const getNumbers = () => {
	// 	return [input - 1, input, input + 1];
	// };

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-4">useCallback Example</h1>
			<div className="count-badge my-4">{count}</div>
			<input
				className="input-field"
				type="number"
				value={input}
				onChange={(e) => {
					setInput(Number(e.target.value));
				}}
				placeholder="Step Size"
			/>
			<CallbackHookItems getItems={getNumbers} />
			<button className="btn-basic" onClick={handleClick}>
				Increment
			</button>
		</div>
	);
}
