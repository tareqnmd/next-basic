import { useEffect, useState } from 'react';

const CallbackHookItems = ({ getItems }: { getItems: any }) => {
	const [items, setItems] = useState([]);
	useEffect(() => {
		setItems(getItems);
	}, [getItems]);

	return <>{items.map((item) => item)}</>;
};

export default CallbackHookItems;
