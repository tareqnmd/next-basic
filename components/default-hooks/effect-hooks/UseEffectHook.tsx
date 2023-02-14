import { useEffect, useState } from 'react';

export default function UseEffectHook() {
	const [count, setCount] = useState(0);
	const [changedValue, setChangedValue] = useState(10);
	const [step, setStep] = useState(1);

	const increment = () => {
		setCount((prev) => prev + step);
	};
	const decrement = () => {
		setCount((prev) => prev - step);
	};

	useEffect(() => {
		setChangedValue((prev) => prev + count);
	}, [count]);

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-4">useEffect Example</h1>
			<div className="count-badge my-4">{count}</div>
			<h1 className="mt-4">Change By useEffect</h1>
			<div className="count-badge my-4">{changedValue}</div>
			<input
				className="input-field"
				type="number"
				value={step}
				onChange={(e) => {
					setStep(Number(e.target.value));
				}}
				placeholder="Step Size"
			/>
			<div className="flex mt-4">
				<button className="btn-basic" onClick={increment}>
					Increment
				</button>
				<button className="btn-danger" onClick={decrement}>
					Decrement
				</button>
			</div>
		</div>
	);
}
