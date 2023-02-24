import PageNavbar from '@/components/page-types/PageNavbar';

const ssg = (props: []) => {
	console.log('props', props);
	return (
		<>
			<PageNavbar />
		</>
	);
};

export default ssg;

export async function getStaticProps() {
	const res = await fetch('http://localhost:9000/tasks');
	const data = await res.json();
	return {
		props: { data },
	};
}
