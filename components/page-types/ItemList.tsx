import Link from 'next/link';

const ItemList = ({ itemData }: { itemData: [] }) => {
	return (
		<div className="link-area flex items-center justify-center">
			{itemData.map((item: { id: number; title: string }) => (
				<Link key={item.id} href={`/page-types/ssg-ad/${item.id}`}>
					{item.title}
				</Link>
			))}
		</div>
	);
};

export default ItemList;
