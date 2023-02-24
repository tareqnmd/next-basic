import { useId } from 'react';

export default function UseIdHook() {
	const id = useId();
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-4">useId Example</h1>
			{id}
			<input className="input-field" id={id} type="text" />
		</div>
	);
}
