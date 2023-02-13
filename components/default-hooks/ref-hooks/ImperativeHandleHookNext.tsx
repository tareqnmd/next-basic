import { forwardRef, useImperativeHandle, useRef } from 'react';

type propsType = {
	label: string;
	type: string;
};

const ImperativeHandleHookNext = forwardRef(function ImperativeHandleHookNext(
	props: propsType,
	ref
) {
	const inputRef: any = useRef(null);
	useImperativeHandle(
		ref,
		() => {
			return {
				increaseValue() {
					inputRef.current.value = Number(inputRef.current.value) + 5;
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
