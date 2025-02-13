import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={roboto.className}>
			<body className={`w-full h-full bg-secondary`}>{children}</body>
		</html>
	);
}
