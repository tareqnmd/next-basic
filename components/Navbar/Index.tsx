import Link from 'next/link';
import styled from 'styled-components';

const NavStyle = styled.header`
	color: #333333;
`;

export default function Index() {
	return (
		<NavStyle className="flex justify-between items-center w-100 shadow p-3 gap-4 link-area">
			<Link href="/">Home</Link>
			<nav>
				<Link href="/hooks">Hooks</Link>
			</nav>
		</NavStyle>
	);
}
