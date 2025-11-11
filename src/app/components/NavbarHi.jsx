'use client';

import Image from 'next/image';
import { TextAlignJustify, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Languages } from 'lucide-react';
import { Trispace } from 'next/font/google';

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const NavbarHi = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed z-50 top-0 w-full font-hindi">
			{/* Top Navbar */}
			<div className="flex items-center justify-between px-6 py-4 bg-white shadow-md xl:px-72">
				{/* Logo */}
				<Link href="/hi">
					<Image
						src="/TWILogo.png"
						alt="TWI logo"
						width={48}
						height={48}
						className=""
					/>
				</Link>
				{/* <Link href="/"> */}
				<div
					className={`${trispace.className} text-2xl absolute left-1/2 transform -translate-x-1/2 md:text-3xl font-bold tracking-widest text-blue-800`}
				>
					<Link href="/hi">Trukkify</Link>
				</div>
				{/* </Link> */}
				{/* Hamburger Icon */}
				<TextAlignJustify
					color="black"
					size={24}
					onClick={() => setIsOpen(true)}
					className="xl:hidden"
				/>
				<div className="hidden xl:block">
					<div className="flex items-center gap-8">
						<Link href="/" className="flex gap-2 items-center">
							{/* <div className='flex gap-2 items-center'> */}
							<Languages size={24} className="mt-1" />
							<div className="text-xl mt-2">English</div>
						</Link>
						<Link href="/hi/about">
							<div className="text-xl mt-2">हमारे बारे में</div>
						</Link>
						<Link href="/hi/contact">
							<button className="bg-blue-600 pb-2 pt-3 tracking-wide text-xl font-semibold text-white px-4 rounded-md cursor-pointer">
								संपर्क करें
							</button>
						</Link>
					</div>
				</div>
			</div>

			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-opacity-50 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Slide-In Menu */}
			<div
				className={`fixed top-0 right-0 h-full w-64  bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				{/* Close Button */}
				<X
					className="absolute top-8 right-8 text-2xl"
					onClick={() => setIsOpen(false)}
					size={24}
					color="black"
				/>

				{/* Menu Items */}
				<nav className="mt-20 flex flex-col px-6 space-y-4">
					<Link
						href="/hi"
						className="block text-lg font-medium text-gray-900 hover:text-blue-600"
						onClick={() => setIsOpen(false)}
					>
						मुख्य पेज
					</Link>
					<Link
						href="/"
						className="block text-lg font-medium text-gray-900 hover:text-blue-600"
						onClick={() => setIsOpen(false)}
					>
						Language: English
					</Link>
					<Link
						href="/hi/about"
						className="block text-lg font-medium text-gray-900 hover:text-blue-600"
						onClick={() => setIsOpen(false)}
					>
						हमारे बारे में
					</Link>
					<Link href="/hi/contact">
						<button
							href="#"
							className="block text-lg tracking-wide text-white bg-blue-700 w-full py-1 mt-2 rounded-md"
							onClick={() => setIsOpen(false)}
						>
							संपर्क करें
						</button>
					</Link>
				</nav>
			</div>
		</div>
	);
};
export default NavbarHi;
