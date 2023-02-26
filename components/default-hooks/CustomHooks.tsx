import { useState } from 'react';
import DefaultHooksNav from './DefaultHooksNav';

const buttons = [{ name: 'customHook', type: 'custom' }];

export default function CustomHooks() {
	const [type, setType] = useState('debugValue');
	return (
		<>
			<DefaultHooksNav type={type} setType={setType} buttons={buttons} />
		</>
	);
}
