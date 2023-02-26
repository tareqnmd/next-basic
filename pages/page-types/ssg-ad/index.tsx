import ItemList from '@/components/page-types/ItemList';
import PageNavbar from '@/components/page-types/PageNavbar';

const ssg = ({ data }: { data: [] }) => {
	console.log('ssg-ad page', data);
	return (
		<>
			<PageNavbar />
			<ItemList itemData={data} />
		</>
	);
};

export default ssg;

export async function getStaticProps() {
	const res = await fetch(`${process.env.API_URL}tasks`);
	const data = await res.json();
	console.log('ssg-ad response', data);
	return {
		props: { data },
		revalidate: 8,
	};
}
