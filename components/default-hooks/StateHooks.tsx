import { useState } from 'react';

export default function StateHooks() {
	const [type, setType] = useState('state');
	return (
		<>
			<div className="flex items-center w-100 gap-2 btn-area">
				<button
					className={type === 'state' ? 'btn-active' : ''}
					onClick={() => {
						setType('state');
					}}
				>
					useState
				</button>
				<button
					className={type === 'reducer' ? 'btn-active' : ''}
					onClick={() => {
						setType('reducer');
					}}
				>
					useReducer
				</button>
			</div>
		</>
	);
}
