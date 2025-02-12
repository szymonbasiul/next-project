import { Metadata } from 'next';
import './globals.css';
import { Navbar } from './components/Navbar';

export const metadata: Metadata = {
	title: 'WebCrafters',
};

export default function Home() {
	return (
		<body className="w-full h-full bg-secondary">
			<div className="flex bg-primary w-full">
				<Navbar />
			</div>
		</body>
	);
}
