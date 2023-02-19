export const filterTasks = (tasks: { name: string; type: string }[], type: string) => {
	return type ? tasks.filter((item: { type: string }) => item.type === type) : tasks;
};
