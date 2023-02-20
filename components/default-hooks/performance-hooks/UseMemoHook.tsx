import { useMemo, useState } from 'react';
import MemoHookTasks from './MemoHookTasks';

export type TaskType = { name: string; type: string }[];

const tasks: TaskType = [
	{ name: 'Task 1', type: 'completed' },
	{ name: 'Task 2', type: 'pending' },
	{ name: 'Task 3', type: 'rejected' },
	{ name: 'Task 4', type: 'active' },
];

export default function UseMemoHook() {
	const [type, setType] = useState('active');
	const [count, setCount] = useState(0);

	const filterTasks = (tasks: { name: string; type: string }[], type: string) => {
		return type ? tasks.filter((item: { type: string }) => item.type === type) : tasks;
	};

	const reviewedTasks = useMemo(() => {
		return filterTasks(tasks, type);
	}, [type]);

	// const reviewedTasks = filterTasks(tasks, type);

	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<h1 className="mt-4">useMemo Example</h1>
				<MemoHookTasks tasks={reviewedTasks} />
				<div className="btn-group mt-4">
					<button className="bg-blue-500" onClick={() => setType('active')}>
						Active
					</button>
					<button className="bg-yellow-500" onClick={() => setType('completed')}>
						Pending
					</button>
					<button className="bg-red-900" onClick={() => setType('rejected')}>
						Rejected
					</button>
					<button className="bg-green-900" onClick={() => setType('pending')}>
						Completed
					</button>
				</div>
				<button
					className="btn-basic my-4"
					onClick={() => {
						setCount((prev) => prev + 1);
					}}
				>
					Render {count}
				</button>
			</div>
		</>
	);
}
