import Link from 'next/link';
import { useRouter } from 'next/router';

export default function StateNavbar() {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<nav className="justify-center link-area">
			<Link
				className={currentRoute.includes('/default-hooks/state-hooks') ? 'link-active' : ''}
				href="/default-hooks/state-hooks"
			>
				Sate Hooks
			</Link>
			<Link
				className={
					currentRoute.includes('/default-hooks/context-hooks') ? 'link-active' : ''
				}
				href="/default-hooks/context-hooks"
			>
				Context Hooks
			</Link>
			<Link
				className={currentRoute.includes('/default-hooks/ref-hooks') ? 'link-active' : ''}
				href="/default-hooks/ref-hooks"
			>
				Ref Hooks
			</Link>
			<Link
				className={
					currentRoute.includes('/default-hooks/effect-hooks') ? 'link-active' : ''
				}
				href="/default-hooks/effect-hooks"
			>
				Effect Hooks
			</Link>
			<Link
				className={
					currentRoute.includes('/default-hooks/performance-hooks') ? 'link-active' : ''
				}
				href="/default-hooks/performance-hooks"
			>
				Performance Hooks
			</Link>
			<Link
				className={currentRoute.includes('/default-hooks/other-hooks') ? 'link-active' : ''}
				href="/default-hooks/other-hooks"
			>
				Other Hooks
			</Link>
			<Link
				className={
					currentRoute.includes('/default-hooks/custom-hooks') ? 'link-active' : ''
				}
				href="/default-hooks/custom-hooks"
			>
				Custom Hooks
			</Link>
		</nav>
	);
}
