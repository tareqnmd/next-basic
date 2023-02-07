import { useState } from 'react';
import UseContextHook from './context-hooks/UseContextHook';
import DefaultHooksNav from './DefaultHooksNav';

const buttons = [{ name: 'useContext', type: 'context' }];

export default function ContextHooks() {
	const [type, setType] = useState('context');
	return (
		<>
			<DefaultHooksNav type={type} setType={setType} buttons={buttons} />
			{type === 'context' && <UseContextHook />}
		</>
	);
}
