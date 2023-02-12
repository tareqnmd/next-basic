import { useState } from 'react';
import DefaultHooksNav from './DefaultHooksNav';
import UseEffectHook from './effect-hooks/UseEffectHook';
import UseInsertionEffect from './effect-hooks/UseInsertionEffect';
import UseLayoutEffect from './effect-hooks/UseLayoutEffect';

const buttons = [
	{ name: 'useEffect', type: 'effect' },
	{ name: 'useLayoutEffect', type: 'layoutEffect' },
	{ name: 'useInsertionEffect', type: 'insertionEffect' },
];

export default function EffectHooks() {
	const [type, setType] = useState('effect');
	return (
		<>
			<DefaultHooksNav type={type} setType={setType} buttons={buttons} />
			{type === 'effect' ? (
				<UseEffectHook />
			) : type === 'layoutEffect' ? (
				<UseLayoutEffect />
			) : type === 'insertionEffect' ? (
				<UseInsertionEffect />
			) : null}
		</>
	);
}
