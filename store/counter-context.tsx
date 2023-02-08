import { createContext, useState } from 'react';

const CounterContext = createContext({
	counter: 1,
	step: 0,
	increment: () => {},
	decrement: () => {},
	stepper: (value: number) => {},
});

export const AuthContextProvider = ({ children }: { children: any }) => {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);

	const incrementHandler = () => {
		setCount((prev) => prev + step);
	};
	const decrementHandler = () => {
		setCount((prev) => prev - step);
	};
	const stepHandler = (value: number) => {
		setStep(value);
	};

	return (
		<CounterContext.Provider
			value={{
				counter: count,
				step: step,
				increment: incrementHandler,
				decrement: decrementHandler,
				stepper: stepHandler,
			}}
		>
			{children}
		</CounterContext.Provider>
	);
};

export default CounterContext;
