import Link from 'next/link';

const ItemList = (data: any) => {
	return (
		<>
			{data.map((item: { id: number; title: string }) => (
				<Link key={item.id} href={`/page-types/ssg-ad/${item.id}`}>
					{item.title}
				</Link>
			))}
		</>
	);
};

export default ItemList;
