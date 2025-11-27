import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Phone, Mail, MapPinHouse } from 'lucide-react';
import { Trispace } from 'next/font/google';
import { useTranslation } from '@/app/i18n';

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Contact = async ({params}) => {
	const {locale} = await params;
	const {t} = await useTranslation(locale, 'common')
	return (
		<div>
			{/* <Navbar /> */}
			<div className="mt-20 w-full flex-col flex items-center py-6 text-2xl gap-4 px-2 bg-orange-100">
				<h1 className={`${trispace.className} font-semibold text-yellow-950 tracking-tight md:text-4xl`}>
					{t('contact.header.title')}
				</h1>
				<p className="text-center text-lg md:text-2xl md:max-w-2/4">
					{t('contact.header.description')}</p>
			</div>
			<div className="block md:hidden">
				<form
					action=""
					className="mx-4 p-6 shadow-lg border border-gray-400 flex flex-col gap-6 mt-6 rounded-md"
				>
					<div id="inputs" className="flex flex-col gap-2">
						<div>
							<label htmlFor="name">{t('contact.form.name')}</label>
							<Input
								id="name"
								type="text"
								className="border rounded-sm border-black"
							/>
						</div>
						<div>
							<label htmlFor="company">{t('contact.form.company')}</label>
							<Input
								id="company"
								type="text"
								className="border rounded-sm border-black"
							/>
						</div>
						<div>
							<label htmlFor="name">Email*</label>
							<Input
								id="email"
								type="email"
								className="border rounded-sm border-black"
							/>
						</div>
						<div>
							<label htmlFor="name">Phone</label>
							<Input
								id="phone"
								type="number"
								className="border rounded-sm border-black"
							/>
						</div>
						<div>
							<label htmlFor="message">Message*</label>
							<Textarea
								id="message"
								type="number"
								className="border rounded-sm border-black"
							/>
						</div>
					</div>

					<button className="flex tracking-wide bg-blue-600 items-center justify-center py-2 text-white text-lg gap-2">
						Send
						<Send color="white" size={20} />
					</button>
				</form>
			</div>

			<div className="hidden md:block max-w-[1100px] mx-auto mt-6">
				<div className="mx-4 md:mx-0 p-6 shadow-lg border gap-3 border-gray-400 flex rounded-md">
					{/* Image */}
					<div className="relative w-[496px] h-[478px]">
						<Image src="/truckImage.png" fill alt="truck image" />
					</div>

					{/* Divider */}
					<div className="w-px bg-gray-900"></div>

					{/* Form */}
					<form action="" className="flex-1">
						<div className="space-y-4">
							<div id="inputs" className="flex flex-col gap-2">
								<div className="flex flex-col space-y-1">
									<label htmlFor="name" className="md:text-xl md:font-semibold">
										Name*
									</label>
									<Input
										id="name"
										type="text"
										className="border md:p-5 rounded-sm border-black"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label
										htmlFor="company"
										className="md:text-xl md:font-semibold"
									>
										Company Name
									</label>
									<Input
										id="company"
										type="text"
										className="border md:p-5 rounded-sm border-black"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label htmlFor="name" className="md:text-xl md:font-semibold">
										Email*
									</label>
									<Input
										id="email"
										type="email"
										className="border md:p-5 rounded-sm border-black"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label htmlFor="name" className="md:text-xl md:font-semibold">
										Phone
									</label>
									<Input
										id="phone"
										type="number"
										className="border md:p-5 rounded-sm border-black"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<label
										htmlFor="message"
										className="md:text-xl md:font-semibold"
									>
										Message*
									</label>
									<Textarea
										id="message"
										type="message"
										rows={4}
										className="border rounded-sm border-black"
									/>
								</div>
							</div>

							<button className="flex w-full tracking-wide rounded-md hover:cursor-pointer hover:scale-102 transition-all bg-blue-600 items-center justify-center py-2 text-white text-xl gap-2">
								Send
								<Send color="white" size={20} />
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* <div>
				<div>
					<div></div>
					<div></div>
				</div>
				<div>

				</div>
			</div> */}

			<section className="text-gray-900 max-w-[1100px] mx-4 md:flex justify-center items-start md:mx-auto py-10 md:py-16 px-6 rounded-md bg-blue-100 m-4 shadow-lg border border-blue-400">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Address */}
					<div>
						<h2 className="text-xl font-semibold mb-2 md:text-2xl">
							Corporate Office
						</h2>
						<div className="flex gap-2">
							<MapPinHouse className="mt-1" size={32} />
							<p className="leading-relaxed md:text-xl">
								609, Tower II, Pearls Omaxe, <br />
								Netaji Subash Place, Pitampura, <br />
								New Delhi - 110034, Delhi, INDIA.
							</p>
						</div>
					</div>

					{/* Contact Info */}
					<div>
						<h2 className="text-xl font-semibold mb-2 md:text-2xl">
							Contact Us
						</h2>
						<ul className="space-y-2">
							<li className="flex gap-2">
								<Mail className="mt-1" />
								<span className="md:text-xl">cse@ustl.in</span>
							</li>
							<li className="flex gap-2">
								<Phone className="mt-1" />
								<span className="md:text-xl">+91-9661829944</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Social Media */}
				<div className="mt-10 text-center">
					<p className="text-lg font-medium mb-4 md:text-2xl">Follow us on</p>
					<div className="flex justify-center gap-6 text-xl text-gray-600">
						<a href="#" aria-label="Instagram" className="hover:text-pink-500">
							<Image
								src="/icon-facebook.png"
								width={32}
								height={32}
								alt="icon for facebook"
							/>
						</a>
						<a href="#" aria-label="Facebook" className="hover:text-blue-600">
							<Image
								src="/icon-instagram.png"
								width={32}
								height={32}
								alt="icon for instagram"
							/>
						</a>
						<a href="#" aria-label="X (Twitter)" className="hover:text-black">
							<Image
								src="/icon-twitter.png"
								width={32}
								height={32}
								alt="icon for twitter"
							/>
						</a>
					</div>
				</div>
			</section>
			{/* <Footer /> */}
		</div>
	);
};
export default Contact;
