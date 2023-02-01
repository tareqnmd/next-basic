import Link from 'next/link';
import { useRouter } from 'next/router';

export default function StateNavbar() {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<nav className="flex justify-center items-center w-100 p-3 gap-4 link-area">
			<Link
				className={currentRoute === '/default-hooks/state-hooks' ? 'link-active' : ''}
				href="/default-hooks/state-hooks"
			>
				Sate Hooks
			</Link>
			<Link
				className={currentRoute === '/default-hooks/context-hooks' ? 'link-active' : ''}
				href="/default-hooks/context-hooks"
			>
				Context Hooks
			</Link>
			<Link
				className={currentRoute === '/default-hooks/ref-hooks' ? 'link-active' : ''}
				href="/default-hooks/ref-hooks"
			>
				Ref Hooks
			</Link>
			<Link
				className={currentRoute === '/default-hooks/effect-hooks' ? 'link-active' : ''}
				href="/default-hooks/effect-hooks"
			>
				Effect Hooks
			</Link>
			<Link
				className={currentRoute === '/default-hooks/performance-hooks' ? 'link-active' : ''}
				href="/default-hooks/performance-hooks"
			>
				Performance Hooks
			</Link>
			<Link
				className={currentRoute === '/default-hooks/other-hooks' ? 'link-active' : ''}
				href="/default-hooks/other-hooks"
			>
				Other Hooks
			</Link>
		</nav>
	);
}
