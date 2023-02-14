import { useEffect, useState } from 'react';

export default function UseEffectHook() {
	const [count, setCount] = useState(0);
	const [everyChangeValue, setEveryChangeValue] = useState(0);
	const [changedValue, setChangedValue] = useState(5);
	const [initialValue, setInitialValue] = useState(0);
	const [step, setStep] = useState(1);

	const increment = () => {
		setCount((prev) => prev + step);
	};
	const decrement = () => {
		setCount((prev) => prev - step);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		setEveryChangeValue(Date.now());
		return () => {
			setEveryChangeValue(0);
		};
	});

	useEffect(() => {
		setInitialValue(50);
	}, []);

	useEffect(() => {
		setChangedValue(5 + count);
	}, [count]);

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-4">useEffect Example</h1>
			<div className="count-badge my-4">{count}</div>
			<h1 className="mt-4">Change By useEffect for Every Change</h1>
			<div className="count-badge my-4">{everyChangeValue}</div>
			<h1 className="mt-4">Change By useEffect for One Time</h1>
			<div className="count-badge my-4">{initialValue}</div>
			<h1 className="mt-4">Change By useEffect When Count Change</h1>
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
