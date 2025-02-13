'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../img/webcrafters-logo.png';
import { motion, MotionConfig } from 'framer-motion';
import { useState } from 'react';
const AnimatedHamburgerButton = ({ active, setActive }) => {
	return (
		<div className="burger md:hidden flex min-w-[3rem] max-w-[4rem] md:min-w-[4rem] md:max-w-[5rem] w-full h-full">
			<MotionConfig
				transition={{
					duration: 0.5,
					ease: 'easeInOut',
				}}
			>
				<motion.button
					initial={false}
					onClick={() => setActive((x) => !x)}
					className="relative h-full w-full "
					animate={active ? 'open' : 'closed'}
				>
					<motion.span
						style={{
							left: '50%',
							top: '35%',
							x: '-50%',
							y: '-50%',
						}}
						className="absolute h-1 w-10 bg-white "
						variants={{
							open: {
								rotate: ['0deg', '0deg', '45deg'],
								top: ['35%', '50%', '50%'],
							},
							closed: {
								rotate: ['45deg', '0deg', '0deg'],
								top: ['50%', '50%', '35%'],
							},
						}}
					></motion.span>
					<motion.span
						style={{
							left: '50%',
							top: '50%',
							x: '-50%',
							y: '-50%',
						}}
						className="absolute h-1 w-10 bg-white "
						variants={{
							open: {
								rotate: ['0deg', '0deg', '-45deg'],
							},
							closed: {
								rotate: ['-45deg', '0deg', '0deg'],
							},
						}}
					></motion.span>
					<motion.span
						style={{
							left: 'calc(50% + 10px)',
							bottom: '35%',
							x: '-50%',
							y: '50%',
						}}
						className="absolute h-1 w-5 bg-white "
						variants={{
							open: {
								rotate: ['0deg', '0deg', '45deg'],
								left: '50%',
								bottom: ['35%', '50%', '50%'],
							},
							closed: {
								rotate: ['45deg', '0deg', '0deg'],
								left: 'calc(50% + 10px)',
							},
						}}
					></motion.span>
				</motion.button>
			</MotionConfig>
		</div>
	);
};

export const Navbar = () => {
	const [active, setActive] = useState(false);
	return (
		<nav className="nav container p-5 flex w-full h-160px p-10px text-white z-10">
			{active ? (
				<div className="menu-container  md:hidden absolute flex flex-wrap top-[80px] p-8 left-0 w-full justify-center bg-primary">
					<Link
						href={'/about'}
						className="mx-2 p-5 w-full font-semibold hover:text-secondary duration-150 text-center"
					>
						<p>About</p>
					</Link>

					<Link
						href={'/contact'}
						className="mx-2 p-5 w-full font-semibold hover:text-secondary duration-150 text-center"
					>
						<p>Contact</p>
					</Link>
				</div>
			) : null}
			<div className="nav-container relative w-full flex justify-between">
				<div className="brand flex h-full justify-between">
					<Link href="/" className="brand-logo">
						<Image
							src={logo}
							alt="WebCrafters logo"
							className="p-2 min-w-[2rem] max-w-[3rem] md:min-w-[3rem] md:max-w-[4rem]"
						/>
					</Link>
					<Link
						href={'/'}
						className="brand-name p-2 flex items-center text-2xl md:text-3xl font-bold"
					>
						<h1>WebCrafters</h1>
					</Link>
				</div>
				<MotionConfig
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
					}}
				>
					<div className="buttons hidden md:flex items-center">
						<div className="buttons-container md:flex text-xl uppercase h-full items-center gap-8">
							<Link
								href={'/about'}
								className="mx-2 font-semibold hover:text-secondary duration-150 just-center"
							>
								<p>About</p>
							</Link>
							<Link
								href={'/contact'}
								className="mx-2 font-semibold hover:text-secondary duration-150 "
							>
								<p>Contact</p>
							</Link>
						</div>
					</div>
				</MotionConfig>
				<AnimatedHamburgerButton active={active} setActive={setActive} />
			</div>
		</nav>
	);
};
