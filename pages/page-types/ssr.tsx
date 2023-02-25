import PageNavbar from '@/components/page-types/PageNavbar';

const ssr = ({ data }: { data: [] }) => {
	console.log('ssr', data);
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
	return {
		props: { data },
	};
}
