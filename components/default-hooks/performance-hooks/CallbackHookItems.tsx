import { useEffect, useState } from 'react';

type ItemFunc = () => [];

const CallbackHookItems = ({ getItems }: { getItems: ItemFunc }) => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		setItems(getItems);
	}, [getItems]);

	return <>{items.map((item) => item)}</>;
};

export default CallbackHookItems;
