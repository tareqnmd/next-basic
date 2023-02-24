import PageNavbar from '@/components/page-types/PageNavbar';

const ssr = (props: []) => {
	console.log('props', props);
	return (
		<>
			<PageNavbar />
			SSR
		</>
	);
};

export default ssr;

export async function getServerSideProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await res.json();
	return {
		props: { data },
	};
}
