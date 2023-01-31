import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Layout({ children }) {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<main className="grow">{children}</main>
			<Footer />
		</div>
	);
}
