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
	const res = await fetch(`${process.env.API_URL}tasks`);
	const data = await res.json();
	console.log('ssg response', data);
	return {
		props: { data },
	};
}
