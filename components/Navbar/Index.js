import Link from 'next/link';

export default function Index() {
	return (
		<nav className="flex justify-between items-center w-100 shadow p-3 gap-4 link-area">
			<Link href="/">Home</Link>
			<>
				<Link href="hooks">Hooks</Link>
			</>
		</nav>
	);
}
