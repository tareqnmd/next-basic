import { useRef, useState } from 'react';

export default function UseRefHooks() {
	const inputRef: { current: any } = useRef('');
	const [value, setValue] = useState(0);
	const [playing, setPlaying] = useState(false);

	function handleClick() {
		setValue(inputRef.current.value ?? '');
		inputRef?.current?.focus();
	}

	function handleStart() {
		setPlaying(true);
	}

	function handleStop() {
		setPlaying(false);
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-4">Counter By useRef</h1>
			<input className="input-field my-4" ref={inputRef} />
			<div className="mb-4">Input Value : {value}</div>
			<button className="btn-basic" onClick={handleClick}>
				Focus & Value
			</button>
			<button
				className={playing ? 'btn-danger my-4' : 'btn-basic my-4'}
				onClick={playing ? handleStop : handleStart}
			>
				{playing ? 'Stop' : 'Start'}
			</button>
		</div>
	);
}
