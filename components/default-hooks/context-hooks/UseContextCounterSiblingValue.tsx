import CounterContext from '@/store/counter-context';
import { useContext } from 'react';

const UseContextCounterSiblingValue = () => {
	const contCtx = useContext(CounterContext);
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-4">Context Sibling Counter</h1>
			<div className="count-badge my-4">{contCtx.count}</div>
		</div>
	);
};

export default UseContextCounterSiblingValue;
