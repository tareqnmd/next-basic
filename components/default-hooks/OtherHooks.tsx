import { useState } from 'react';
import DefaultHooksNav from './DefaultHooksNav';
import UseDebugValueHook from './other-hooks/UseDebugValueHook';
import UseIdHook from './other-hooks/UseIdHook';
import UseSyncExternalStoreHook from './other-hooks/UseSyncExternalStoreHook';

const buttons = [
	{ name: 'useDebugValue', type: 'debugValue' },
	{ name: 'useId', type: 'id' },
	{ name: 'useSyncExternalStore', type: 'syncExternalStore' },
];

export default function OtherHooks() {
	const [type, setType] = useState('debugValue');
	return (
		<>
			<DefaultHooksNav type={type} setType={setType} buttons={buttons} />
			{type === 'debugValue' ? (
				<UseDebugValueHook />
			) : type === 'id' ? (
				<UseIdHook />
			) : type === 'syncExternalStore' ? (
				<UseSyncExternalStoreHook />
			) : null}
		</>
	);
}
