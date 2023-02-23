import { useState } from 'react';
import DeferredValueHook from './DeferredValueHook';
export default function UseDeferredValueHook() {
	const [step, setStep] = useState('');

	const getEvent = (e: { target: HTMLInputElement }) => {
		const { value } = e.target;
		setStep(value);
	};

	return (
		<>
			<input
				className="input-field"
				type="text"
				value={step}
				onChange={getEvent}
				placeholder="Write Here"
			/>
			{step && <DeferredValueHook input={step} />}
		</>
	);
}
