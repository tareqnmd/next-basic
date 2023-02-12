import { forwardRef, useImperativeHandle, useRef } from 'react';

const ImperativeHandleHook = forwardRef(function ImperativeHandleHook(props, ref) {
	const inputRef: any = useRef(null);
	useImperativeHandle(
		ref,
		() => {
			return {
				focus() {
					inputRef.current.focus();
				},
				scrollIntoView() {
					inputRef.current.scrollIntoView();
				},
			};
		},
		[]
	);
	return <input {...props} ref={inputRef} />;
});

export default ImperativeHandleHook;
