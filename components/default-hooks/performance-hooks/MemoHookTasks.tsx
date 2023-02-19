import { useMemo, useState } from 'react';
import { TaskType } from './UseMemoHook';

const MemoHookTasks = ({ tasks }: { tasks: TaskType }) => {
	const [type, setType] = useState('active');

	const filterTasks = (tasks: { name: string; type: string }[], type: string) => {
		console.log('fnc called');
		return type ? tasks.filter((item: { type: string }) => item.type === type) : tasks;
	};

	const reviewedTasks = useMemo(() => {
		return filterTasks(tasks, type);
	}, [tasks, type]);

	const renderHandler = () => {
		filterTasks(tasks, type);
	};

	return (
		<>
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
			<button className="btn-basic my-4" onClick={renderHandler}>
				Render
			</button>
			{reviewedTasks.map((task, index) => (
				<div key={index}>
					{task.name} - {task.type}
				</div>
			))}
		</>
	);
};

export default MemoHookTasks;
