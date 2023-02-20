import { useEffect } from 'react';
import { TaskType } from './UseMemoHook';

const MemoHookTasks = ({ tasks }: { tasks: TaskType }) => {
	useEffect(() => {
		console.log('component rendered');
	}, [tasks]);
	return (
		<>
			{tasks.map((task, index) => (
				<div key={index}>
					{task.name} - {task.type}
				</div>
			))}
		</>
	);
};

export default MemoHookTasks;
