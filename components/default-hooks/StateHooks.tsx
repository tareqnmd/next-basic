import { useState } from 'react';

export default function StateHooks() {
	const [type, setType] = useState('state');
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);

	const increment = () => {
		setCount((prev) => prev + step);
	};
	const decrement = () => {
		setCount((prev) => prev - step);
	};

	return (
		<>
			<div className="flex items-center w-100 gap-2 btn-area">
				<button
					className={type === 'state' ? 'btn-active' : ''}
					onClick={() => {
						setType('state');
					}}
				>
					useState
				</button>
				<button
					className={type === 'reducer' ? 'btn-active' : ''}
					onClick={() => {
						setType('reducer');
					}}
				>
					useReducer
				</button>
			</div>
			<>
				{type === 'state' ? (
					<div className="flex flex-col items-center justify-center">
						<div className="count-badge my-4">{count}</div>
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
				) : (
					<></>
				)}
			</>
		</>
	);
}
