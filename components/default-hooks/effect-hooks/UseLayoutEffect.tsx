import { useLayoutEffect, useRef, useState } from 'react';

export default function UseLayoutEffect() {
	const [show, setShow] = useState(false);
	const button: { current: HTMLButtonElement | null } = useRef(null);
	const toggle: { current: HTMLDivElement | null } = useRef(null);
	useLayoutEffect(() => {
		if (toggle.current && button.current) {
			const { height } = button.current?.getBoundingClientRect();
			toggle.current.style.marginTop = height + 'px';
		}
	}, [show]);
	return (
		<>
			<button
				className="border-4"
				ref={button}
				onClick={() => {
					setShow((prev) => !prev);
				}}
			>
				Toggle
			</button>
			{show && (
				<div className="border-4" ref={toggle}>
					Section Opened
				</div>
			)}
		</>
	);
}
