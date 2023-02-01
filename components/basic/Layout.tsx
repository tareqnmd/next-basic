import Footer from '../Footer/Index';
import Navbar from '../Navbar/Index';

export default function Layout({ children }: { children: any }) {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<main className="grow p-3">{children}</main>
			<Footer />
		</div>
	);
}
