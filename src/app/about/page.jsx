import LeadershipCard from '../components/LeadershipCard';

const About = () => {
	return (
		<div className="">
			<div className="mt-20 w-full flex-col flex items-center py-6 gap-4 px-4 bg-orange-100">
				<h1 className="font-semibold row-span-1 text-yellow-950 text-2xl text-center md:text-4xl">
					About Transport Wings (Cal) <br className="lg:hidden" /> Pvt. Ltd
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
			{/* why us */}
		</div>
	);
};
export default About;
