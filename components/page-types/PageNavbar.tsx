import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PageNavbar() {
	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<nav className="justify-center link-area">
			<Link
				className={currentRoute.includes('/page-types/csr') ? 'link-active' : ''}
				href="/page-types/csr"
			>
				CSR
			</Link>
			<Link
				className={currentRoute.includes('/page-types/ssr') ? 'link-active' : ''}
				href="/page-types/ssr"
			>
				SSR
			</Link>
			<Link
				className={currentRoute.includes('/page-types/ssg') ? 'link-active' : ''}
				href="/page-types/ssg"
			>
				SSG
			</Link>
			<Link
				className={currentRoute.includes('/page-types/ssg-ad') ? 'link-active' : ''}
				href="/page-types/ssg-ad"
			>
				SSG ADVANCE
			</Link>
		</nav>
	);
}
