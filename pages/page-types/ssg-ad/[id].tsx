import PageNavbar from '@/components/page-types/PageNavbar';

const Single = ({ task }: { task: { title: string; completed: boolean } }) => {
	return (
		<>
			<PageNavbar />
			<div className="flex justify-center items-center">
				<div>
					{task?.title}-{task?.completed ? 'Completed' : 'Pending'}
				</div>
			</div>
		</>
	);
};

export default Single;

export async function getStaticPaths() {
	const res = await fetch('http://localhost:9000/tasks');
	const tasks = await res.json();

	return {
		fallback: 'blocking',
		paths: tasks.map((task: { id: number }) => ({
			params: { id: task.id.toString() },
		})),
	};
}

export async function getStaticProps(context: { params: { id: number } }) {
	const id = context.params.id;
	const res = await fetch(`http://localhost:9000/tasks/${id}`);
	const task = await res.json();
	return {
		props: { task },
	};
}
