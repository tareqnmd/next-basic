import { useRef } from 'react';
import ImperativeHandleHook from './ImperativeHandleHook';
export default function UseImperativeHandleHook() {
	const ref: any = useRef(null);
	function handleClick() {
		ref.current.focus();
	}
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-4">Example By useImperativeHandler</h1>
			<ImperativeHandleHook label="Enter your name:" type="text" ref={ref} />
			<button className="btn-basic" onClick={handleClick}>
				Edit
			</button>
		</div>
	);
}
