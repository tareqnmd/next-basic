import MemoHookTasks from './MemoHookTasks';

export type TaskType = { name: string; type: string }[];

const tasks: TaskType = [
	{ name: 'Task 1', type: 'completed' },
	{ name: 'Task 2', type: 'pending' },
	{ name: 'Task 3', type: 'rejected' },
];

export default function UseMemoHook() {
	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<h1 className="mt-4">useMemo Example</h1>
				<MemoHookTasks tasks={tasks} />
			</div>
		</>
	);
}
