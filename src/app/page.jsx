import Image from 'next/image';
import Navbar from './components/Navbar';
import { Trispace } from 'next/font/google';
import FeatureCard from './components/FeatureCard';
import { ArrowUpRight } from 'lucide-react';
import HowWorks from './components/HowWorks';

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default function Home() {
	return (
		<div className="overflow-hidden">
			{/* <Navbar /> */}
			{/* Hero section */}
			<div className="relative w-full h-[400px] lg:h-[1000px] overflow-hidden mt-20">
				<Image
					src="/heroImage.png" // Replace with your actual image path
					alt="Freight Truck on Coastal Highway"
					fill
					className="object-cover"
					priority
				/>

				<div className="absolute top-8 lg:top-20 left-0 w-full px-6 py-4 bg-white/40 lg:bg-white/70 backdrop-blur-sm text-center">
					<h2 className="text-xl lg:text-3xl text-gray-800">
						Streamline Your Freight Operations with
					</h2>
					<h1
						className={`${trispace.className} text-3xl md:text-4xl font-semibold text-blue-700 mt-1`}
					>
						Truckky
					</h1>
				</div>
			</div>
			{/* section smart logistics */}
			<div className="w-full flex-col flex items-center text-center  py-6 lg:py-8 text-2xl gap-4 px-2 bg-orange-100">
				<h1
					className={`${trispace.className} font-semibold text-red-950 text-3xl lg:text-4xl`}
				>
					Smart logistics. <br className="lg:hidden" /> Seamless delivery.
				</h1>
				<p className="text-center text-xl lg:text-2xl lg:max-w-2/4">
					TWI Exchange connects customers who need to ship cargo with trusted
					truck drivers across India. Manage contracts, track deliveries, and
					communicate — all in one streamlined logistics app.
				</p>
			</div>

			{/* <div className="flex flex-col lg:flex-row w-full justify-center bg-white px-20 py-16 gap-12">
				
				<div className="lg:w-[1324px] flex gap-32">
					<div className="flex flex-col justify-center flex-1">
						<h1
							className={`${trispace.className} text-4xl font-bold text-blue-800 mb-2`}
						>
							Coordinate. Deliver. Grow.
						</h1>
						<p className="text-lg text-gray-700 mb-6">
							Join TWI Exchange to discover opportunities faster, improve
							communication quality, and get paid reliably. Stay connected with
							drivers, track your trips, and grow your logistics business all
							from your phone.
						</p>
						<button className="flex gap-2 items-center bg-blue-600 text-white px-6 py-3 rounded-md text-xl font-semibold w-fit hover:bg-blue-700">
							Join Now <ArrowUpRight size={28} />
						</button>
					</div>

					
					<div className="flex-1 flex items-center justify-center">
						<Image
							src="/rightPhoto.png" // Replace with your actual image path
							alt="Exchange Trip Management App"
							height={600}
							width={600}
							className="object-contain"
						/>
					</div>
				</div>
			</div> */}

			{/* new section */}
			<div className="flex flex-col w-full justify-center lg:items-center bg-white px-8 lg:px-20 mt-16 lg:mb-16 gap-12">
				{/* Left: Text Content */}
				<div className="lg:w-[1324px] h-auto flex flex-col lg:flex-row gap-8 lg:gap-32">
					{/* Right: App Mockup */}
					<div className="flex-1 relative lg:order-2 w-fit flex items-center justify-center">
						<img
							src="/rightImage.png" // Replace with your actual image path
							alt="Exchange Trip Management App"
							className="object-contain"
						/>
					</div>
					<div className="flex flex-col lg:order-1 justify-center lg:items-start items-center flex-1">
						<h1
							className={`${trispace.className} text-3xl text-center lg:text-left lg:text-4xl font-bold text-blue-800 mb-2`}
						>
							Coordinate. Deliver. Grow.
						</h1>
						<p className="text-center lg:text-left text-xl text-gray-700 mb-6">
							Join TWI Exchange to discover opportunities faster, improve
							communication quality, and get paid reliably. Stay connected with
							drivers, track your trips, and grow your logistics business all
							from your phone.
						</p>
						<button className="flex gap-2 items-center bg-blue-600 text-white px-6 py-3 rounded-md text-xl font-semibold w-fit hover:bg-blue-700">
							Join Now <ArrowUpRight size={28} />
						</button>
					</div>
				</div>
			</div>

			<div className="flex flex-col w-full justify-center lg:items-center bg-white px-8 lg:px-20 py-16 gap-12">
				{/* Left: Text Content */}
				<div className="lg:w-[1324px] h-auto flex flex-col lg:flex-row gap-8 lg:gap-32">
					{/* Right: App Mockup */}
					<div className="flex-1 relative w-fit flex items-center justify-center">
						<img
							src="/leftImage.png" // Replace with your actual image path
							alt="Exchange Trip Management App"
							className="object-contain"
						/>
					</div>
					<div className="flex flex-col justify-center lg:items-end items-center flex-1">
						<h1
							className={`${trispace.className} text-3xl text-center lg:text-left lg:text-4xl font-bold text-blue-800 mb-2`}
						>
							Post. Match. Monitor.
						</h1>
						<p className="text-center lg:text-right text-xl text-gray-700 mb-6">
							Use TWI Exchange to find verified truck drivers, create secure
							contracts, and monitor your cargo in real time. Whether you're
							shipping locally or across states, enjoy peace of mind with
							transparent communication and delivery updates.
						</p>
						<button className="flex gap-2 items-center bg-blue-600 text-white px-6 py-3 rounded-md text-xl font-semibold w-fit hover:bg-blue-700">
							Join Now <ArrowUpRight size={28} />
						</button>
					</div>
				</div>
			</div>

			{/* <div className="flex w-full justify-center bg-white px-20 py-16 gap-12">
				<div className="flex w-[1324px] gap-32">
					<div className="">
						<img
							src="/rightPhoto.png" // Replace with your actual image path
							alt="Exchange Trip Management App"
							className="object-contain"
						/>
					</div>
					<div className="flex-1 flex flex-col items-end justify-center text-wrap">
						<h1
							className={`${trispace.className} text-4xl text-right font-bold text-blue-800 mb-2`}
						>
							Post. Match. Monitor.
						</h1>
						<p className="text-lg text-gray-700 text-right mb-6 leading">
							Use TWI Exchange to find verified truck drivers, create secure
							contracts, and monitor your cargo in real time. Whether you're
							shipping locally or across states, enjoy peace of mind with
							transparent communication and delivery updates.
						</p>
						<button className="flex gap-2 items-center bg-blue-600 text-white px-6 py-3 rounded-md text-xl font-semibold w-fit hover:bg-blue-700">
							Join Now <ArrowUpRight size={28} />
						</button>
					</div>
				</div>
			</div> */}

			<div className="flex items-center justify-center my-8 ">
				<Image
					src="/bussiness.png"
					height={400}
					width={600}
					alt="business model"
				/>
			</div>

			<div className="flex flex-col items-center justify-center mb-8">
				<h3 className="lg:mt-8 mb-8 text-3xl lg:text-4xl font-semibold text-blue-800">
					Core Advantages{' '}
				</h3>

				<div className=" flex flex-col gap-8">
					<div className="flex justify-center gap-8 mx-auto flex-col lg:flex-row">
						<div className="flex-1">
							<FeatureCard
								title="1. Book Anytime, Anywhere"
								imgSrc={`/anywhere-2.png`}
								content="Post shipments on the go, from any device. Get matched with verified drivers - no delays, no limits."
							/>
						</div>
						<div className="flex-1">
							<FeatureCard
								title="2. Bidding & Price Negotiation"
								imgSrc={`/negotiatio-1.png`}
								content="Negotiate fair rates in real time — no middlemen, no delays."
							/>
						</div>
					</div>

					<div className="flex justify-center flex-col lg:flex-row gap-8">
						<div className="flex-1">
							<FeatureCard
								title="3. 24/7 Customer Support"
								imgSrc={`/support.png`}
								content="Get help whenever you need it. Our team is always online to resolve issues, fast and reliably."
							/>
						</div>
						<div className="flex-1">
							<FeatureCard
								title="4. Smart Analytics & Reports"
								imgSrc={`/analytics.png`}
								content="View delivery times, performance, and trends. Make better decisions with real-time insights."
							/>
						</div>
					</div>

					<div className="flex justify-center items-center flex-col lg:flex-row gap-8">
						<div className="flex-1">
							<FeatureCard
								title="5. Digital Contract Management"
								imgSrc={`/contract.png`}
								content="Create and manage contracts with ease. Keep all agreements secure, organized, and accessible."
							/>
						</div>

						<div className="flex-1">
							<FeatureCard
								title="6. Intuitive Interface"
								imgSrc={`/interface.png`}
								content="Navigate with ease using a clean interface. Access shipments, contracts, and tasks instantly."
							/>
						</div>
					</div>
				</div>
			</div>

			{/* how it works */}

			<div className="flex flex-col items-center">
				<h3 className="mt-8 mb-8 font-semibold text-4xl text-blue-800">
					How Truckyyy Works
				</h3>
				<div>
					<HowWorks
						number="1"
						content="Set up your profile and start managing shipments right away"
					/>
					<HowWorks
						number="2"
						content="Organize all your logistics data in a single dashboard"
					/>
					<HowWorks
						number="3"
						content="Track every movement and communicate directly within the app"
					/>
				</div>
			</div>

			{/* downlaod app */}

			<div className=" flex flex-col justify-center items-center px-8">
				<div className=" lg:w-2/5 flex flex-col justify-center items-center">
					<h3 className="mt-8 mb-2 font-semibold text-3xl text-nowrap lg:text-4xl text-blue-800">
						Download Truckyyy Now
					</h3>
					<p className="text-center text-xl lg:text-2xl ">
						Manage your shipments, contracts, and fleet operations on the go.
						Get the power of logistics in your pocket available on Android and
						iOS.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row my-8 gap-12">
					<div className="flex flex-col gap-4 items-center">
						<Image
							src="/android.png"
							alt="android app store logo"
							height={160}
							width={160}
						/>
						<button className="flex gap-2 items-center bg-blue-600 border-3 border-blue-600 text-white px-6 py-3 rounded-md text-xl tracking-wide font-semibold hover:bg-blue-700 cursor-pointer">
							Download Now
						</button>
					</div>

					<div className="flex flex-col gap-4 items-center">
						<Image
							src="/app-store.png"
							alt="android app store logo"
							height={160}
							width={160}
						/>
						<button className="flex gap-2 items-center border-3 box-border tracking-wide border-blue-600 text-blue-600 px-6 py-3 rounded-md text-xl font-semibold hover:bg-gray-100 cursor-pointer">
							Coming Soon
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
