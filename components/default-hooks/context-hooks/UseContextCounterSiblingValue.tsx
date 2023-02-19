import CounterContext from '@/store/context/counter-context';
import { useContext } from 'react';

const UseContextCounterSiblingValue = () => {
	const contCtx = useContext(CounterContext);
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-4">Context Sibling Counter</h1>
			<div className="count-badge my-4">{contCtx.count}</div>
			<div className="flex mt-4">
				<button className="btn-basic" onClick={contCtx.increment}>
					Increment
				</button>
				<button className="btn-danger" onClick={contCtx.decrement}>
					Decrement
				</button>
			</div>
		</div>
	);
};

export default UseContextCounterSiblingValue;
