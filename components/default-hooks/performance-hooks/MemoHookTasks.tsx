import { filterTasks } from '@/utils/helper';
import { useMemo, useState } from 'react';
import { TaskType } from './UseMemoHook';

const MemoHookTasks = ({ tasks }: { tasks: TaskType }) => {
	const [type, setType] = useState('active');
	const [render, setRender] = useState(0);

	const reviewedTasks = useMemo(() => {
		console.log('called memo');
		return filterTasks(tasks, type);
	}, [tasks, type]);

	const renderHandler = () => {
		console.log('called fnc');
		setRender((prev) => prev + 1);
	};

	return (
		<>
			<div className="btn-group py-4">
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
			<button className="btn-basic" onClick={renderHandler}>
				Render {render}
			</button>
			{reviewedTasks.map((task) => (
				<>
					{task.name} - {task.type}
				</>
			))}
		</>
	);
};

export default MemoHookTasks;
