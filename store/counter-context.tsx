import { createContext } from 'react';

type CounterValueTypes = {
	counter: number;
	step: number;
};

const CounterContext = createContext({
	counter: 1,
	step: 0,
});

export const AuthContextProvider = ({ children }: { children: any }) => {
	return (
		<CounterContext.Provider value={{ counter: 0, step: 0 }}>{children}</CounterContext.Provider>
	);
};

export default CounterContext;
