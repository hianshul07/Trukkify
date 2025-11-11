import Image from 'next/image';
import { Trispace, Noto_Sans_Devanagari } from 'next/font/google';
import LeadershipCardHi from '@/app/components/LeadershipCardHi';

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const notoHindi = Noto_Sans_Devanagari({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const About = () => {
	return (
		<div className={`${notoHindi.className}`}>
			<div className="relative w-full h-[400px] lg:h-[1000px] overflow-hidden mt-20">
				<Image
					src="/team.JPG"
					alt="TWI Team"
					fill
					className="object-cover"
					priority
				/>
			</div>
			<div className="w-full flex-col flex items-center py-6 gap-4 px-4 bg-orange-100">
				<h1
					className={`${trispace.className} font-semibold row-span-1 tracking-tight text-yellow-950 text-2xl text-center md:text-4xl`}
				>
					Transport Wings (Cal) <br className="lg:hidden" /> Pvt. Ltd के बारे
					में
				</h1>
				<p className="text-center text-lg md:text-2xl md:max-w-2/4 leading-9">
					Transport Wings (Cal) Pvt. Ltd. भारत की लॉजिस्टिक्स इंडस्ट्री में एक
					भरोसेमंद और स्थापित नाम है। कंपनी पिछले कई दशकों से देशभर में कार्गो
					मूवमेंट संभाल रही है, जहाँ अलग-अलग राज्यों की अपनी चुनौतियाँ होती हैं।
					66+ वर्षों के अनुभव, बेहतर प्रक्रियाओं और लगातार सुधरते ऑपरेशन्स ने
					TWI को भारत के इनलैंड ट्रांसपोर्टेशन सेक्टर में एक मजबूत पहचान दी है।
					हमारा विस्तृत नेटवर्क पूरे देश में 100 से ज़्यादा लोकेशन्स को कवर करता
					है, जिससे हम ग्राहकों तक बिना बाधा के सेवाएँ पहुँचा पाते हैं।
				</p>
			</div>

			<div className="flex flex-col items-center mb-16">
				<h3
					className={`${trispace.className} mt-8 mb-2 tracking-tight font-semibold text-2xl lg:text-4xl text-blue-800`}
				>
					हमारी लीडरशिप{' '}
				</h3>
				<h4
					className={`${trispace.className} mb-4 tracking-tight font-semibold textx lg:text-2xl text-gray-800`}
				>
					एक सोच, एक टीम
				</h4>
				<p className="text-gray-800 ml-8 mb-8 lg:max-w-2/4 lg:text-center text-2xl leading-9">
					हम दुनिया भर में 46,000+ लोगों की टीम हैं, जो एक ही लक्ष्य पर काम करती
					है। हमारे चेयरमैन कंपनी का मार्गदर्शन करते हैं और उनका साथ एक अनुभवी
					मैनेजमेंट टीम देती है।
				</p>
				<LeadershipCardHi />
			</div>
			{/* Core Values */}

			<div className="w-full flex flex-col items-center px-4">
				<div className="rounded-xl bg-white lg:w-3/5 border-2 border-gray-200 shadow-lg w-full flex flex-col lg:flex-row items-center p-4 mb-8 gap-8">
					<div className=" relative w-full h-full flex-1">
						<img
							src="/industry.png"
							alt="core values image "
							className="rounded-md w-full h-fit"
						/>
					</div>
					<div className="flex-1 font-normal">
						<h4
							className={`${trispace.className} text-2xl mb-2 lg:text-left text-center`}
						>
							वे उद्योग जिनको हम सेवाएँ देते हैं
						</h4>
						<ul className="list-disc px-5 pb-2">
							<li>
								<span className="text-2xl lg:text-2xl font-normal">
									कृषि और एग्री-सप्लाई:
								</span>{' '}
								<p className="text-xl lg:text-xl text-gray-800">
									एग्री-इनपुट कंपनियाँ और कमोडिटी ट्रेडर्स इस प्लेटफ़ॉर्म का
									उपयोग करके मौसमी लोड समय पर भेजते हैं, जिससे मंडियों, गोदामों
									और प्रोसेसिंग यूनिट्स तक डिलीवरी सुचारू रहती है।
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
								<span className="text-2xl lg:text-2xl font-normal">
									कोल्ड चेन और जल्दी खराब होने वाला सामान:
								</span>{' '}
								<p className="text-xl lg:text-xl text-gray-800">
									{' '}
									फूड प्रोसेसर्स, फ़ार्मा डिस्ट्रीब्यूटर्स और डेयरी कंपनियाँ
									तापमान-सुरक्षित ट्रांसपोर्ट और लाइव ट्रैकिंग पर भरोसा करती
									हैं, ताकि लंबी दूरी में कार्गो की गुणवत्ता बनी रहे।
								</p>
							</li>
							<li>
								<span className="text-2xl lg:text-2xl font-normal">
									मैन्युफैक्चरिंग और इंडस्ट्रियल:
								</span>{' '}
								<p className="text-xl lg:text-xl text-gray-800">
									{' '}
									फ़ैक्ट्रियाँ और इंडस्ट्रियल सप्लायर्स इनबाउंड और आउटबाउंड लोड
									पोस्ट करते हैं, सही कैरियर्स से मैच होते हैं और डॉक्यूमेंटेशन
									को ऑटोमेट कर देरी और मैनुअल काम कम करते हैं।
								</p>
							</li>
							<li>
								<span className="text-2xl lg:text-2xl font-normal">
									केमिकल्स और रेगुलेटेड सामान:
								</span>{' '}
								<p className="text-xl lg:text-xl text-gray-800">
									{' '}
									केमिकल निर्माता और फ़्यूल सप्लायर्स इस प्लेटफ़ॉर्म का उपयोग कर
									सुरक्षित और कंप्लायंट ट्रांसपोर्ट सुनिश्चित करते हैं, जहाँ रूट
									विज़िबिलिटी और सुरक्षित डॉक्यूमेंटेशन उपलब्ध रहता है।
								</p>
							</li>
						</ul>
					</div>
				</div>

				<div className="rounded-xl bg-white lg:w-3/5 border-2 border-gray-200 shadow-lg w-full flex flex-col lg:flex-row items-center p-4 mb-8 gap-4 lg:gap-8">
					<div className=" relative w-full h-full flex-1">
						<img
							src="/values-2.jpeg"
							alt="core values image "
							className="rounded-md w-full h-full"
						/>
					</div>
					<div className="flex-1 font-normal">
						<h4
							className={`${trispace.className} text-2xl text-center mb-2 lg:text-left`}
						>
							हमारे सिद्धांत
						</h4>
						<ul className="list-disc px-5">
							<li>
								<span className="text-2xl lg:text-2xl font-normal">
									ईमानदारी:
								</span>{' '}
								<p className="text-xl lg:text-xl text-gray-700">
									हम अपने सभी कामों में उच्च स्तर की ईमानदारी और पारदर्शिता रखते
									हैं, जिससे क्लाइंट और पार्टनर्स का भरोसा मजबूत होता है।
								</p>
							</li>
							<li>
								<span className="text-2xl lg:text-2xl font-normal">
									गुणवत्ता:
								</span>{' '}
								<p className="text-xl lg:text-xl text-gray-700">
									{' '}
									हम अपनी सेवाओं को लगातार बेहतर बनाते हैं ताकि हर बार ग्राहक की
									उम्मीदों से बढ़कर परिणाम दे सकें।
								</p>
							</li>
							<li>
								<span className="text-2xl lg:text-xl font-normal">
									नए उपाय:
								</span>
								<p className="text-xl lg:text-xl text-gray-700">
									हम नई तकनीकों और इनोवेटिव समाधानों को अपनाकर अपने लॉजिस्टिक्स
									प्रोसेस को और प्रभावी बनाते हैं।
								</p>
							</li>
							<li>
								<span className="text-2xl lg:text-xl font-normal">
									ग्राहक केंद्रित:{' '}
								</span>{' '}
								<p className="text-xl lg:text-xl text-gray-700">
									{' '}
									हमारे क्लाइंट हमारे हर काम का केंद्र हैं और उनकी ज़रूरतों को
									सही तरीके से पूरा करना हमारी प्राथमिकता है।{' '}
								</p>
							</li>
							<li>
								<span className="text-2xl lg:text-xl font-normal">सहयोग:</span>{' '}
								<p className="text-xl lg:text-xl text-gray-700">
									{' '}
									हम टीमवर्क और मजबूत साझेदारी में विश्वास रखते हैं और क्लाइंट्स
									व स्टेकहोल्डर्स के साथ मिलकर साझा सफलता की ओर बढ़ते हैं।
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
