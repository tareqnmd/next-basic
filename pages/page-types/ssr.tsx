import PageNavbar from '@/components/page-types/PageNavbar';

const ssr = ({ data }: { data: [] }) => {
	console.log('ssr page', data);
	return (
		<>
			<PageNavbar />
			SSR
		</>
	);
};

export default ssr;

export async function getServerSideProps() {
	const res = await fetch('http://localhost:9000/todos');
	const data = await res.json();
	console.log('ssr response', data);
	return {
		props: { data },
	};
}
