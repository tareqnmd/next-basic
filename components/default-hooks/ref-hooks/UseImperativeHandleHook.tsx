import { useRef } from 'react';
import ImperativeHandleHook from './ImperativeHandleHook';
export default function UseImperativeHandleHook() {
	const ref: any = useRef(null);
	function handleClick() {
		ref.current.focus();
	}
	return (
		<>
			<ImperativeHandleHook label="Enter your name:" type="text" ref={ref} />
			<button type="button" onClick={handleClick}>
				Edit
			</button>
		</>
	);
}
