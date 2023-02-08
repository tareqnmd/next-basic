import { useState } from 'react';
import DefaultHooksNav from './DefaultHooksNav';
import UseCallBackHook from './performance-hooks/UseCallBackHook';
import UseDeferredValueHook from './performance-hooks/UseDeferredValueHook';
import UseMemoHook from './performance-hooks/UseMemoHook';
import UseTransitionHook from './performance-hooks/UseTransitionHook';

const buttons = [
	{ name: 'useMemo', type: 'memo' },
	{ name: 'useCallBack', type: 'callBack' },
	{ name: 'useTransition', type: 'transition' },
	{ name: 'useDeferredValue', type: 'deferredValue' },
];

export default function PerformanceHooks() {
	const [type, setType] = useState('memo');
	return (
		<>
			<DefaultHooksNav type={type} setType={setType} buttons={buttons} />
			{type === 'memo' ? (
				<UseMemoHook />
			) : type === 'callBack' ? (
				<UseCallBackHook />
			) : type === 'transition' ? (
				<UseTransitionHook />
			) : type === 'deferredValue' ? (
				<UseDeferredValueHook />
			) : null}
		</>
	);
}
