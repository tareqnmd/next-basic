import { useRef } from 'react';
import ImperativeHandleHook from './ImperativeHandleHook';
import ImperativeHandleHookNext from './ImperativeHandleHookNext';
type EmailRefType = {
	current: { increaseValue: Function } | null;
};
type NameRefType = {
	current: { addBorder: Function; focusElement: Function } | null;
};
export default function UseImperativeHandleHook() {
	const nameRef: NameRefType = useRef(null);
	const emailRef: EmailRefType = useRef(null);
	function editHandler() {
		if (nameRef.current) {
			nameRef.current.focusElement();
			nameRef.current.addBorder();
		}
	}
	function increaseValue() {
		if (emailRef.current) {
			emailRef.current.increaseValue();
		}
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
