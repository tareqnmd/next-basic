import { useState } from 'react';
import DefaultHooksNav from './DefaultHooksNav';
import UseReducerHooks from './state-hooks/UseReducerHooks';
import UseStateHooks from './state-hooks/UseStateHooks';

const buttons = [
	{ name: 'useState', type: 'state' },
	{ name: 'useReducer', type: 'reducer' },
];

export default function StateHooks() {
	const [type, setType] = useState('state');
	return (
		<>
			<DefaultHooksNav type={type} setType={setType} buttons={buttons} />
			<>{type === 'state' ? <UseStateHooks /> : <UseReducerHooks />}</>
		</>
	);
}
