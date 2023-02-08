import { useState } from 'react';
import DefaultHooksNav from './DefaultHooksNav';
import UseRefHooks from './ref-hooks/UseRefHook';

const buttons = [{ name: 'useRef', type: 'ref' }];

export default function RefHooks() {
	const [type, setType] = useState('ref');
	return (
		<>
			<DefaultHooksNav type={type} setType={setType} buttons={buttons} />
			<>{type === 'ref' && <UseRefHooks />}</>
		</>
	);
}
