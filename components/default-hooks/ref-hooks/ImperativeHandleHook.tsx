import { forwardRef, useImperativeHandle, useRef } from 'react';

type propsType = {
	label: string;
	type: string;
};

const ImperativeHandleHook = forwardRef(function ImperativeHandleHook(props: propsType, ref) {
	const inputRef: { current: HTMLInputElement | null } = useRef(null);
	useImperativeHandle(
		ref,
		() => {
			return {
				focusElement() {
					inputRef?.current?.focus();
				},
				addBorder() {
					if (inputRef.current) {
						inputRef.current.style.border = '1px solid red';
					}
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
