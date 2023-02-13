import { useRef } from 'react';
import ImperativeHandleHook from './ImperativeHandleHook';
import ImperativeHandleHookNext from './ImperativeHandleHookNext';
export default function UseImperativeHandleHook() {
	const nameRef: any = useRef(null);
	const emailRef: any = useRef(null);
	function editHandler() {
		nameRef.current.focus();
	}
	function increaseValue() {
		emailRef.current.increaseValue();
	}
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-4">Example By useImperativeHandler</h1>
			<ImperativeHandleHook label="Enter your name:" type="text" ref={nameRef} />
			<button className="btn-basic" onClick={editHandler}>
				Edit
			</button>
			<ImperativeHandleHookNext label="Enter your email:" type="email" ref={emailRef} />
			<button className="btn-basic" onClick={increaseValue}>
				Increase Value
			</button>
		</div>
	);
}
