import Link from 'next/link';

export default function index() {
	return (
		<nav className="flex justify-center items-center w-100 p-3 gap-4 link-area">
			<Link href="state-hooks">Sate Hooks</Link>
			<Link href="context-hooks">Context Hooks</Link>
			<Link href="ref-hooks">Ref Hooks</Link>
			<Link href="effect-hooks">Effect Hooks</Link>
			<Link href="performance-hooks">Performance Hooks</Link>
			<Link href="other-hooks">Other Hooks</Link>
		</nav>
	);
}
