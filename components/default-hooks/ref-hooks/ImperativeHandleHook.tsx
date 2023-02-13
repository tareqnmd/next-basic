import { forwardRef, useImperativeHandle, useRef } from 'react';

type propsType = {
	label: string;
	type: string;
};

const ImperativeHandleHook = forwardRef(function ImperativeHandleHook(props: propsType, ref) {
	const inputRef: any = useRef(null);
	useImperativeHandle(
		ref,
		() => {
			return {
				focus() {
					inputRef.current.focus();
				},
			};
		},
		[]
	);
	return (
		<>
			<h1 className="mt-4">Other Component</h1>
			<input className="input-field my-4" {...props} ref={inputRef} />
		</>
	);
});

export default ImperativeHandleHook;
