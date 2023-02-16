import { filterTasks } from '@/utils/helper';
import { useMemo } from 'react';
import { TaskType } from './UseMemoHook';

const MemoHookTasks = ({ tasks }: { tasks: TaskType }) => {
	const reviewedTasks = useMemo(() => filterTasks(tasks, 'active'), [tasks]);
	console.log('reviewedTasks', reviewedTasks);
	return <></>;
};

export default MemoHookTasks;
