export const filterTasks = (tasks: { name: string; type: string }[], type: string) => {
	return tasks.map((item: { type: string }) => item.type === type);
};
