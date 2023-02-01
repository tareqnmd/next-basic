import Link from 'next/link';

export default function StateNavbar() {
	return (
		<nav className="flex justify-center items-center w-100 p-3 gap-4 link-area">
			<Link href="/default-hooks/state-hooks">Sate Hooks</Link>
			<Link href="/default-hooks/context-hooks">Context Hooks</Link>
			<Link href="/default-hooks/ref-hooks">Ref Hooks</Link>
			<Link href="/default-hooks/effect-hooks">Effect Hooks</Link>
			<Link href="/default-hooks/performance-hooks">Performance Hooks</Link>
			<Link href="/default-hooks/other-hooks">Other Hooks</Link>
		</nav>
	);
}
