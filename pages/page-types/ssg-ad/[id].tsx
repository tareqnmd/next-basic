import PageNavbar from '@/components/page-types/PageNavbar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Single = () => {
	const { query } = useRouter();
	const [data, setData]: any = useState({});
	const getData = async (id: string) => {
		const res = await fetch(`http://localhost:9000/tasks/${id}`);
		const data = await res.json();
		setData(data);
	};
	useEffect(() => {
		query.id && getData(String(query.id));
	}, [query.id]);
	return (
		<>
			<PageNavbar />
			<div className="flex justify-center items-center">
				<div>{data.title}</div>
				<div>{data.completed ? 'Completed' : 'Pending'}</div>
			</div>
		</>
	);
};

export default Single;
