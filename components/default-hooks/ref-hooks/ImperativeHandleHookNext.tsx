import { forwardRef, useImperativeHandle, useRef } from 'react';

type propsType = {
	label: string;
	type: string;
};

const ImperativeHandleHookNext = forwardRef(function ImperativeHandleHookNext(
	props: propsType,
	ref
) {
	const inputRef: { current: HTMLInputElement | null } = useRef(null);
	useImperativeHandle(
		ref,
		() => {
			return {
				increaseValue() {
					if (inputRef.current) {
						inputRef.current.value = String(Number(inputRef.current.value) + 5);
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

export default ImperativeHandleHookNext;
