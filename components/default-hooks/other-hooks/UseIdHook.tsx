import { useId } from 'react';

export default function UseIdHook() {
	const id = useId();
	return (
		<>
			{id}
			<input className="input-field" id={id} type="text" />
		</>
	);
}
