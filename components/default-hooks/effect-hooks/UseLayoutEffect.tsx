import Image from 'next/image';
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

	// useEffect(() => {
	// 	if (toggle.current && button.current) {
	// 		const { height } = button.current?.getBoundingClientRect();
	// 		toggle.current.style.marginTop = height + 'px';
	// 	}
	// }, [show]);

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-4">useLayoutEffect Example</h1>
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
				<div className="border-4 flex items-center justify-center" ref={toggle}>
					<Image
						width={100}
						height={100}
						src="https://images.unsplash.com/photo-1676817664855-424c3ce66635"
						alt=""
					/>
				</div>
			)}
		</div>
	);
}
