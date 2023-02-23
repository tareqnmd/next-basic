import { useDeferredValue, useEffect, useMemo } from 'react';
const LIST_SIZE = 30000;

const DeferredValueHook = ({ input }: { input: string }) => {
	const deferredInput = useDeferredValue(input);

	const lists = useMemo(() => {
		const listItems: string[] = [];
		for (let i = 0; i < LIST_SIZE; i++) {
			listItems.push(deferredInput);
		}
		return listItems;
	}, [deferredInput]);

	useEffect(() => {
		console.log('input,deferredInput', input, deferredInput);
	}, [input, deferredInput]);

	return (
		<>
			{lists.map((list, i) => (
				<div key={i}>{list}</div>
			))}
		</>
	);
};

export default DeferredValueHook;
