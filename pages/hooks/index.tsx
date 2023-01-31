import Link from 'next/link';

export default function index() {
	return (
		<nav className="flex justify-center items-center w-100 p-3 gap-4 link-area">
			<Link href="hooks/state-hooks">Sate Hooks</Link>
			<Link href="hooks/context-hooks">Context Hooks</Link>
			<Link href="hooks/ref-hooks">Ref Hooks</Link>
			<Link href="hooks/effect-hooks">Effect Hooks</Link>
			<Link href="hooks/performance-hooks">Performance Hooks</Link>
			<Link href="hooks/other-hooks">Other Hooks</Link>
		</nav>
	);
}
