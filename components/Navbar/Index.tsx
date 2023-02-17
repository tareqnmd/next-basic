import Link from 'next/link';
import styled from 'styled-components';

const NavStyle = styled.header`
	color: #333333;
`;

export default function Index() {
	return (
		<NavStyle className="justify-between shadow link-area">
			<Link href="/">Home</Link>
			<nav>
				<Link href="/page-types">Pages</Link>
				<Link href="/default-hooks">Hooks</Link>
			</nav>
		</NavStyle>
	);
}
