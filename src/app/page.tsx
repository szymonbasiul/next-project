import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'WebCrafters',
};

export default function Home() {
	return (
		<body className=" bg-white">
			<div className="container">
				<nav className="nav">
					<div className="brand-box">
						<div className="icon">Icon</div>
						<div className="logo">Brand name</div>
					</div>
					<div className="nav-items">about us</div>
					<div className="nav-items">contact</div>
				</nav>
			</div>
		</body>
	);
}
