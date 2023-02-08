import CounterContext from '@/store/counter-context';
import { useContext } from 'react';
import UseContextCounterChildValue from './UseContextCounterChildValue';

const UseContextCounter = () => {
	const contCtx = useContext(CounterContext);
	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<h1 className="mt-4">Context Counter</h1>
				<div className="count-badge my-4">{contCtx.count}</div>
				<input
					className="input-field"
					type="number"
					value={contCtx.step}
					onChange={(e) => {
						contCtx.stepper(Number(e.target.value));
					}}
					placeholder="Step Size"
				/>
				<div className="flex mt-4">
					<button className="btn-basic" onClick={contCtx.increment}>
						Increment
					</button>
					<button className="btn-danger" onClick={contCtx.decrement}>
						Decrement
					</button>
				</div>
			</div>
			<UseContextCounterChildValue />
		</>
	);
};

export default UseContextCounter;
