import { CounterContextProvider } from '@/store/context/counter-context';
import UseContextCounter from './UseContextCounter';
import UseContextCounterSiblingValue from './UseContextCounterSiblingValue';

export default function UseContextHook() {
	return (
		<CounterContextProvider>
			<UseContextCounterSiblingValue />
			<UseContextCounter />
		</CounterContextProvider>
	);
}
