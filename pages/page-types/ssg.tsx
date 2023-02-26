import PageNavbar from '@/components/page-types/PageNavbar';

const ssg = ({ data }: { data: [] }) => {
	console.log('ssg page', data);
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
	console.log('ssg response', data);
	return {
		props: { data },
	};
}
