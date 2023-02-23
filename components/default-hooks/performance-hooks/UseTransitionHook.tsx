import { useState, useTransition } from 'react';
const LIST_SIZE = 30000;
export default function UseTransitionHook() {
	const [lists, setLists] = useState([]);
	const [step, setStep] = useState('');

	const [loading, startTransition] = useTransition();

	const getEvent = (e: { target: HTMLInputElement }) => {
		const { value } = e.target;
		setStep(value);

		// const listItems = [];
		// for (let i = 0; i < LIST_SIZE; i++) {
		// 	listItems.push(value);
		// }
		// setLists(listItems);

		startTransition(() => {
			const listItems: any = [];
			for (let i = 0; i < LIST_SIZE; i++) {
				listItems.push(value);
			}
			setLists(listItems);
		});
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
			{loading ? (
				<div>Loading....</div>
			) : (
				<>
					{lists.map((list, i) => (
						<div key={i}>{list}</div>
					))}
				</>
			)}
		</>
	);
}
