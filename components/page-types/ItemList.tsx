import Link from 'next/link';

const ItemList = ({ itemData }: { itemData: [] }) => {
	return (
		<>
			{itemData.map((item: { id: number; title: string }) => (
				<Link key={item.id} href={`/page-types/ssg-ad/${item.id}`}>
					{item.title}
				</Link>
			))}
		</>
	);
};

export default ItemList;
