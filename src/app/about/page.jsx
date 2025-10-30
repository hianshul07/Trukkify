import Image from 'next/image';
import LeadershipCard from '../components/LeadershipCard';

const About = () => {
	return (
		<div className="">
			<div className="relative w-full h-[400px] lg:h-[1000px] overflow-hidden mt-20">
							<Image
								src="@/team.jpg"
								alt="TWI Team"
								fill
								className="object-cover"
								priority
							/>
						</div>
			<div className="w-full flex-col flex items-center py-6 gap-4 px-4 bg-orange-100">
				<h1 className="font-semibold row-span-1 text-yellow-950 text-2xl text-center md:text-4xl">
					About Transport Wings (Cal) <br className="lg:hidden"/> Pvt. Ltd
				</h1>
				<p className="text-center text-lg md:text-2xl md:max-w-2/4">
					Transport Wings (Cal) Pvt. Ltd. has been a market leader in logistics.
					Moving cargo across India within various states has its own unforeseen
					challenges. Over 66 years of intensive, accurate, efficient,
					innovative, and dedicated operations have earned TWI a prestigious
					reputation in the domestic inland transportation industry. Our
					extensive network covers not only over 100 locations spread all over
					India
				</p>
			</div>

			<div className="flex flex-col items-center mb-16">
				<h3 className="mt-8 mb-2 font-semibold text-2xl lg:text-4xl text-blue-800">
					Our Leadership
				</h3>
				<h4 className="mb-4 font-semibold textx lg:text-2xl text-gray-800">
					One Vision One Team
				</h4>
				<p className="text-gray-800 ml-8 mb-8 lg:max-w-2/4 lg:text-center text-2xl">
					We are a team of more than 46,000+ people across the globe working for
					a common purpose. We are led by one of India's most visionary Chairman
					who is supported by a talented and experienced management team.
				</p>
				<LeadershipCard />
			</div>
			{/* Core Values */}

			<div className="w-full flex flex-col items-center px-4">
				<div className="rounded-xl bg-white lg:w-3/5 border-2 border-gray-200 shadow-lg w-full flex flex-col lg:flex-row items-center p-4 mb-8 gap-4">
					<div className=" relative w-full h-full flex-1">
						<img
							src="/industry.png"
							alt="core values image "
							className="rounded-md  w-full h-fit"
						/>
					</div>
					<div className="flex-1 font-semibold">
						<h4 className="text-2xl mb-2 lg:text-left text-center">
							Industires We Serve
						</h4>
						<ul className="list-disc px-5 pb-2">
							<li>
								<span className="text-2xl font-normal">
									Agriculture & Agri-Supply:
								</span>{' '}
								<p className="text-xl text-gray-700">
									Agri-input companies and bulk commodity traders use the
									platform to dispatch seasonal loads efficiently, ensuring
									timely delivery to mandis, warehouses, and processing units.
								</p>
							</li>
							{/* <li>
								<span className="text-2xl font-normal">Construction & Infrastructure:</span>{' '}
								<p className="text-xl text-gray-700">
									{' '}
									Infrastructure firms and material suppliers coordinate bulk
									shipments of cement, steel, and equipment to project sites,
									leveraging verified carriers and digital contracts for
									smoother execution.
								</p>
							</li> */}
							{/* <li>
								<span className="text-2xl font-normal">Retail & Distribution:</span>
								<p className="text-xl text-gray-700">
									Retail chains and FMCG distributors manage high-frequency
									shipments across regions, using real-time tracking and
									centralized load management to maintain supply chain
									continuity.
								</p>
							</li> */}
							<li>
								<span className="text-2xl font-normal">
									Cold Chain & Perishables:
								</span>{' '}
								<p className="text-xl text-gray-700">
									{' '}
									Food processors, pharma distributors, and dairy cooperatives
									rely on temperature-aware transport and live tracking to
									maintain cargo integrity across long hauls.
								</p>
							</li>
							<li>
								<span className="text-2xl font-normal">
									Manufacturing & Industrial:
								</span>{' '}
								<p className="text-xl text-gray-700">
									{' '}
									Factories and industrial suppliers post inbound and outbound
									loads, match with compliant carriers, and automate
									documentation to reduce delays and manual overhead.
								</p>
							</li>
							<li>
								<span className="text-2xl font-normal">
									Chemicals & Regulated Goods:
								</span>{' '}
								<p className="text-xl text-gray-700">
									{' '}
									Chemical manufacturers and fuel suppliers use the platform to
									ensure safe, compliant transport of regulated materials with
									route visibility and secure documentation.
								</p>
							</li>
						</ul>
					</div>
				</div>

				<div className="rounded-xl bg-white lg:w-3/5 border-2 border-gray-200 shadow-lg w-full flex flex-col lg:flex-row items-center p-4 mb-8 gap-4">
					<div className=" relative w-full h-full flex-1">
						<img
							src="/values-2.jpeg"
							alt="core values image "
							className="rounded-md w-full h-full"
						/>
					</div>
					<div className="flex-1 font-semibold">
						<h4 className="text-2xl text-center lg:text-left">Core values</h4>
						<ul className="list-disc px-5 pb-2">
							<li>
								<span className="text-2xl font-normal">Integrity:</span>{' '}
								<p className="text-xl text-gray-700">
									We uphold the highest ethical standards in all our dealings,
									fostering trust and transparency with clients and partners.
								</p>
							</li>
							<li>
								<span className="text-2xl font-normal">Excellence:</span>{' '}
								<p className="text-xl text-gray-700">
									{' '}
									We strive for excellence in every aspect of our services,
									continually improving to meet and exceed customer
									expectations.
								</p>
							</li>
							<li>
								<span className="text-2xl font-normal">Innovation:</span>
								<p className="text-xl text-gray-700">
									We embrace innovative solutions and technologies to enhance
									our logistics processes and provide cutting-edge services.
								</p>
							</li>
							<li>
								<span className="text-2xl font-normal">Customer Focus:</span>{' '}
								<p className="text-xl text-gray-700">
									{' '}
									Our clients are at the heart of everything we do, and we are
									dedicated to understanding and fulfilling their unique
									logistics needs.
								</p>
							</li>
							<li>
								<span className="text-2xl font-normal">Collaboration:</span>{' '}
								<p className="text-xl text-gray-700">
									{' '}
									We believe in the power of teamwork and partnerships, working
									closely with clients and stakeholders to achieve shared
									success.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
