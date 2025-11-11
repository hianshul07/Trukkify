import Image from 'next/image';
// import Navbar from '../components/Navbar';
import { Trispace, Noto_Sans_Devanagari } from 'next/font/google';
import FeatureCard from '../components/FeatureCard';
import { ArrowUpRight } from 'lucide-react';
import HowWorks from '../components/HowWorks';
import '../globals.css';
import NavbarHi from '../components/NavbarHi';
import DriverSteps from '../components/DriverAppSteps';
import { motion } from 'motion/react';

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const notoHindi = Noto_Sans_Devanagari({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const HindiHome = () => {
	return (
		<div className={` overflow-hidden`}>
			{/* <NavbarHi /> */}
			{/* Hero section */}
			<div className="relative w-full h-[400px] lg:h-[1000px] overflow-hidden mt-20">
				<Image
					src="/heroImage.png" // Replace with your actual image path
					alt="Freight Truck on Coastal Highway"
					fill
					className="object-cover"
					priority
				/>

				<div
					className={`${notoHindi.className} absolute top-8 lg:top-20 left-0 w-full px-6 py-4 bg-white/40 lg:bg-white/70 backdrop-blur-sm text-center`}
				>
					<h2
						className={`font-hindi font-hindi text-xl lg:text-3xl text-gray-800`}
					>
						अपने कार्गो ऑपरेशन्स को आसान और व्यवस्थित बनाएं
					</h2>
					<div className="flex gap-2 justify-center items-end">
						<h1
							className={`tracking-tight text-3xl md:text-4xl font-semibold text-blue-700 mt-1`}
						>
							{' '}
							Trukkify
						</h1>
						<h2 className="text-xl font-hindi lg:text-3xl text-gray-800">
							के साथ।
						</h2>
						{/* <span className="text-xl lg:text-3xl text-gray-800">के साथ।</span> */}
					</div>
				</div>
			</div>
			{/* section smart logistics */}
			<div
				className={`${notoHindi.className} w-full flex-col flex items-center text-center py-6 lg:py-8 text-2xl gap-4 px-4 bg-orange-100`}
			>
				<h1
					className={`tracking-tight font-semibold text-red-950 text-3xl lg:text-4xl`}
				>
					स्मार्ट लॉजिस्टिक्स,
					<br className="lg:hidden" /> भरोसेमंद डिलीवरी।
				</h1>
				<p
					className={`font-hindi text-center text-xl lg:text-2xl lg:max-w-2/4`}
				>
					Trukkify पूरे भारत में ग्राहकों को भरोसेमंद ट्रक ड्राइवरों से जोड़ता
					है, ताकि सामान भेजना आसान और झंझट-मुक्त हो जाए। अब कॉन्ट्रैक्ट मैनेज
					करें, डिलीवरी ट्रैक करें और बात-चीत करें — सब कुछ एक ही आसान ऐप में।
				</p>
			</div>

			{/* new section */}
			<div className="flex flex-col w-full justify-center lg:items-center bg-white px-8 lg:px-20 mt-16 lg:mb-16 gap-12">
				<div className="lg:w-[1324px] h-auto flex flex-col lg:flex-row gap-8 lg:gap-32">
					<div className="flex-1 relative lg:order-2 w-fit flex items-center justify-center">
						<img
							src="/rightImage.png" // Replace with your actual image path
							alt="Exchange Trip Management App"
							className="object-contain"
						/>
					</div>
					<div className="flex flex-col lg:order-1 justify-center lg:items-start items-center flex-1 relative">
						<div>
							<p
								className={` ${trispace.className} text-gray-500 font-semibold mb-1 text-center lg:text-left text-lg`}
							>
								ट्रांसपोर्टर्स के लिए
							</p>
							<h1
								className={`${trispace.className} tracking-tight text-3xl text-center lg:text-left lg:text-4xl font-bold text-blue-800 mb-2`}
							>
								अब काम करना हुआ आसान।
							</h1>
						</div>
						<p className="text-center lg:text-left text-xl text-gray-700 mb-6 leading-8">
							Trukkify से जुड़ो और जल्दी नए काम पाओ, बात-चीत और अपडेट्स आसान
							बनाओ, और पेमेंट टाइम पर लो। ड्राइवरों से जुड़े रहो, अपनी ट्रिप्स
							ट्रैक करो, और अपने लॉजिस्टिक्स का काम फ़ोन से ही संभालो।
						</p>
						<button className="flex gap-2 items-center bg-blue-600 text-white px-6 py-3 rounded-md text-xl font-semibold w-fit hover:bg-blue-700">
							अभी जुड़ें <ArrowUpRight size={28} />
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
						<div>
							<p
								className={` ${trispace.className} text-gray-500 font-semibold text-center lg:text-right mr-2 mb-1 text-lg`}
							>
								कस्टमर्स के लिए
							</p>
							<h1
								className={`${trispace.className} tracking-tight text-3xl text-center lg:text-left lg:text-4xl font-bold text-blue-800 mb-2`}
							>
								अब शिपमेंट संभालना हुआ आसान।
							</h1>
						</div>
						<p className="text-center lg:text-right text-xl text-gray-700 mb-6 leading-8">
							Trukkify का उपयोग करके वेरीफ़ाइड ट्रक ड्राइवर्स खोजें, सुरक्षित
							कॉन्ट्रैक्ट बनाएं, और अपने कार्गो को रियल-टाइम में मॉनिटर करें।
							चाहे आप लोकल भेज रहे हों या राज्यों के बीच, पारदर्शी कम्युनिकेशन
							और डिलीवरी अपडेट्स के साथ पूरी सुविधा और भरोसा पाएं।
						</p>
						<button
							className={`flex gap-2 items-center bg-blue-600 text-white px-6 py-3 rounded-md text-xl font-semibold w-fit hover:bg-blue-700`}
						>
							अभी जुड़ें <ArrowUpRight size={28} />
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
				<h3
					className={`${trispace.className} tracking-tight lg:mt-8 mb-8 text-3xl lg:text-4xl font-semibold text-blue-800`}
				>
					प्रमुख फ़ायदे{' '}
				</h3>

				<div className=" flex flex-col gap-8">
					<div className="flex justify-center gap-8 mx-auto flex-col lg:flex-row">
						<div className="flex-1">
							<FeatureCard
								title="1. कहीं भी, कभी भी बुक करो"
								imgSrc={`/anywhere-2.png`}
								content="Post shipments on the go, from any device. Get matched with verified drivers - no delays, no limits."
							/>
						</div>
						<div className="flex-1">
							<FeatureCard
								title="2. बोली लगाओ और सही रेट पाओ"
								imgSrc={`/negotiatio-1.png`}
								content="रियल-टाइम में उचित रेट सुनिश्चित करें। कोई बीच का व्यक्ति नहीं, हर कदम पारदर्शी और बिना देरी।"
							/>
						</div>
					</div>

					<div className={`flex justify-center flex-col lg:flex-row gap-8`}>
						<div className="flex-1">
							<FeatureCard
								title="3. 24/7 कस्टमर सपोर्ट"
								imgSrc={`/support.png`}
								content="जब भी ज़रूरत हो, मदद पाओ। हमारी टीम हमेशा ऑनलाइन रहती है आपकी समस्याएँ जल्दी और भरोसे से सुलझाने के लिए।"
							/>
						</div>
						<div className="flex-1">
							<FeatureCard
								title="4. स्मार्ट एनालिटिक्स और रिपोर्ट्स"
								imgSrc={`/analytics.png`}
								content="डिलीवरी टाइम, परफ़ॉर्मेंस और ट्रेंड्स देखो। रियल-टाइम इनसाइट्स से बेहतर फैसले लो।"
							/>
						</div>
					</div>

					<div className="flex justify-center items-center flex-col lg:flex-row gap-8">
						<div className="flex-1">
							<FeatureCard
								title="5. डिजिटल कॉन्ट्रैक्ट मैनेजमेंट"
								imgSrc={`/contract.png`}
								content="कॉन्ट्रैक्ट आसानी से बनाएं और मैनेज करें। सारे एग्रीमेंट सुरक्षित, व्यवस्थित और हमेशा उपलब्ध रखें।"
							/>
						</div>

						<div className="flex-1">
							<FeatureCard
								title="6. आसान इंटरफ़ेस"
								imgSrc={`/interface.png`}
								content="क्लीन इंटरफ़ेस के साथ आसानी से नेविगेट करें। शिपमेंट, कॉन्ट्रैक्ट और टास्क तुरंत एक्सेस करें।"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* how it works */}

			<div className="flex flex-col items-center">
				<h3
					className={`${trispace.className} tracking-tight mt-8 mb-8 mx-4 text-center font-semibold text-4xl text-blue-800`}
				>
					Trukkify कैसे काम करता है?
				</h3>
				<div>
					<HowWorks
						number="1"
						content="अपनी प्रोफ़ाइल सेट करें और तुरंत शिपमेंट मैनेज करना शुरू करें।"
					/>
					<HowWorks
						number="2"
						content="अपना सारा लॉजिस्टिक्स डेटा एक ही डैशबोर्ड में देखें।"
					/>
					<HowWorks
						number="3"
						content="हर मूवमेंट ट्रैक करें और ऐप से सीधे कम्युनिकेशन करें।"
					/>
				</div>
			</div>

			{/* downlaod app */}

			<div className=" flex flex-col justify-center items-center px-8">
				<div className=" lg:w-2/5 flex flex-col justify-center items-center">
					<h3
						className={`${trispace.className} tracking-tight mt-8 mb-2 font-semibold text-3xl text-nowrap lg:text-4xl text-blue-800`}
					>
						अभी डाउनलोड करें
					</h3>
					<p className="text-center text-xl lg:text-2xl leading-8">
						अपने शिपमेंट, कॉन्ट्रैक्ट और फ्लीट को आसानी से मोबाइल से संभालें।
						पूरा लॉजिस्टिक्स अब आपके फोन पर - Android और iOS के लिए उपलब्ध।
					</p>
				</div>
				<div className="flex flex-col lg:flex-row my-12 gap-12">
					<div className="flex flex-col gap-4 items-center">
						<Image
							src="/android.png"
							alt="android app store logo"
							height={160}
							width={160}
						/>
						<a
							href="https://play.google.com/store/apps/details?id=com.tsilteam.Exchangev2&hl=en_IN"
							target="_blank"
							className="flex gap-2 items-center bg-blue-600 border-3 border-blue-600 text-white px-6 py-3 rounded-md text-xl tracking-wide font-semibold hover:bg-blue-700 cursor-pointer"
						>
							अभी डाउनलोड करें
						</a>
					</div>

					<div className="flex flex-col gap-4 items-center">
						<Image
							src="/app-store.png"
							alt="android app store logo"
							height={160}
							width={160}
						/>
						<button className="flex gap-2 items-center border-3 box-border tracking-wide border-blue-600 text-blue-600 px-6 py-3 rounded-md text-xl font-semibold hover:bg-gray-100 cursor-pointer">
							जल्द आ रहा है
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HindiHome;
