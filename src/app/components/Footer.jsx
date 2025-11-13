import Image from 'next/image';
import {
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Phone,
	Mail,
	Clock,
} from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-[#0c1c2c] text-white py-10 px-6 text-lg">
			<div className="max-w-4/5 mx-auto flex-col flex justify-center lg:flex-row items-center gap-10 lg:items-start">
				{/* Logo */}
				<div className="flex flex-1 flex-col items-center gap-4">
					<div className="">
						<Image src="/TWILogo.png" height={64} width={64} alt="TWI logo" />
					</div>
					<div className="font-medium text-lg">Transport Wings India</div>
				</div>

				{/* Navigation + Social */}
				<div className="text-center flex-1">
					<nav className="flex justify-center gap-6 mb-4 font-medium">
						<a href="#" className="hover:text-gray-300">
							About us
						</a>
						<span className="text-gray-500">|</span>
						<a href="#" className="hover:text-gray-300">
							Services
						</a>
						<span className="text-gray-500">|</span>
						<a href="#" className="hover:text-gray-300">
							Contact
						</a>
					</nav>
					<div className="flex justify-center gap-5 text-lg">
						<a href="#" className="hover:text-pink-500">
							{/* <Image src='' height={} width={} alt='icon for '/> */}
						</a>
						<a href="#" className="hover:text-blue-600">
							<Twitter />
						</a>
						<a href="#" className="hover:text-blue-600">
							<Facebook />
						</a>
						<a href="#" className="hover:text-black">
							<Instagram />
						</a>
						<a href="#" className="hover:text-gray-400">
							<Linkedin />
						</a>
					</div>
				</div>

				{/* Contact Info */}
				<div className="flex-1 w-full flex flex-col items-center text-base">
					<div className='space-y-3'>
						<p className="uppercase">
							609, 610, 1110 Pearls Omaxe Tower-2, <br />
							Netaji Subhash Place, Pitampura, <br />
							Delhi - 110034
						</p>
						<div className=""></div>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2 ">
								<Clock className="mt-1" /> <a>Mon - Sat: 9:30 - 18:30</a>
							</div>
							<div className="flex items-center gap-2">
								<Mail className="mt-1" />
								<a
									href="mailto:ces@usli.in"
									className="hover:underline text-xl"
								>
									ces@twcpl.in
								</a>
							</div>
							<div className="flex items-center gap-2">
								<Phone className="mt-1" />
								<a href="tel:+911127351631" className="hover:underline text-xl">
									+91 11 27351631
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
