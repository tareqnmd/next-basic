import { CounterContextProvider } from '@/store/counter-context';
import UseContextCounter from './UseContextCounter';

export default function UseContextHook() {
	return (
		<CounterContextProvider>
			<UseContextCounter />
		</CounterContextProvider>
	);
}
