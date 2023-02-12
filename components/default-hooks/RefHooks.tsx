import { useState } from 'react';
import DefaultHooksNav from './DefaultHooksNav';
import UseImperativeHandleHook from './ref-hooks/UseImperativeHandleHook';
import UseRefHooks from './ref-hooks/UseRefHook';

const buttons = [
	{ name: 'useRef', type: 'ref' },
	{ name: 'useImperativeHandle', type: 'imperativeHandle' },
];

export default function RefHooks() {
	const [type, setType] = useState('ref');
	return (
		<>
			<DefaultHooksNav type={type} setType={setType} buttons={buttons} />
			{type === 'ref' ? <UseRefHooks /> : type === 'ref' ? <UseImperativeHandleHook /> : null}
		</>
	);
}
