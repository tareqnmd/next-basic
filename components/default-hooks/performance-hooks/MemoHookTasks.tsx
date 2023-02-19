import { filterTasks } from '@/utils/helper';
import { useMemo, useState } from 'react';
import { TaskType } from './UseMemoHook';

const MemoHookTasks = ({ tasks }: { tasks: TaskType }) => {
	const [type, setType] = useState('active');
	const reviewedTasks = useMemo(() => {
		return filterTasks(tasks, type);
	}, [tasks, type]);
	return (
		<>
			<>
				<button onClick={() => setType('active')}>Active</button>
				<button onClick={() => setType('completed')}>Pending</button>
				<button onClick={() => setType('rejected')}>Rejected</button>
				<button onClick={() => setType('pending')}>Completed</button>
			</>
			{reviewedTasks.map((task) => (
				<>{task ? 1 : 2}</>
			))}
		</>
	);
};

export default MemoHookTasks;
