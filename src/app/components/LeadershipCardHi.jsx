'use client';

import { useState } from 'react';

const profiles = [
	{
		id: 1,
		image: '/pp.png',
		name: 'श्री पुरुषोत्तम पी. सिंघल',
		title: 'Chief Executive Officer',
		details:
			'कंपनी के CEO के पास वह अनुभव है जो उन्हें उनके पिता, स्वर्गीय श्री पी. सी. सिंघल से मिला। उन्होंने अपनी पढ़ाई B.Com (Hons) और MBA (Logistics) में पूरी की है और 1990 से संगठन में कार्यरत हैं। पिछले 26 वर्षों में उन्होंने कई महत्वपूर्ण उपलब्धियाँ हासिल की हैं और देशभर में विभिन्न प्रोजेक्ट्स को सफलतापूर्वक पूरा किया है। उनके नेतृत्व में काम हमेशा उच्च मानकों के साथ पूरा होता है। वे सामाजिक गतिविधियों से भी जुड़े हुए हैं और समाज में अच्छी पहचान रखते हैं। वे “श्री अग्रसेन इंटरनेशनल हॉस्पिटल” के ट्रस्टी हैं और समाज से जुड़े कई अन्य कार्यों में भी सक्रिय हैं। साथ ही, उन्हें क्रिटिकल और सुपर-क्रिटिकल जॉब्स को संभालने और मैनेज करने का अच्छा अनुभव है।',
	},
	{
		id: 2,
		image: '/us.png',
		name: 'डॉ. उत्तम सिंघल',
		title: 'Managing Director',
		details:
			'कंपनी के मैनेजिंग डायरेक्टर, जिन्होंने B.Com (H) और MBA (Finance) किया है, 2004 से कंपनी से जुड़े हुए हैं। वे सभी गतिविधियों का नेतृत्व सक्रिय रूप से करते हैं और अपने ज्ञान, अनुभव और आधुनिक सोच के साथ काम को प्रभावी तरीके से आगे बढ़ाते हैं। उनके नेतृत्व में कंपनी ने कई महत्वपूर्ण माइलस्टोन हासिल किए हैं और बेहतरीन सेवा प्रदाता के रूप में पहचान बनाई है। वे राजनीतिक स्तर पर भी अच्छी पकड़ रखते हैं और पूरे भारत में मज़बूत वेंडर नेटवर्क से जुड़े हुए हैं। वे दूरदर्शी सोच और सकारात्मक ऊर्जा के साथ काम करते हैं और अपनी प्रतिबद्धताओं को पूरा करना उनकी सबसे बड़ी ताकत है।',
	},
];

const LeadershipCardHi = () => {
	const [openIds, setOpenIds] = useState([]);

	const toggleCard = (id) => {
		setOpenIds((prev) =>
			prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
		);
	};

	return (
		<div className="flex flex-col w-full items-center lg:w-3/5 px-4 gap-8 lg:gap-4">
			{profiles.map((profile) => (
				<div
					key={profile.id}
					className="border rounded-lg p-6 shadow-md w-full lg:w-1/2 flex flex-col items-center transition-all duration-300"
				>
					<div className="flex flex-col justify-center items-center">
						<div className="border-4 border-blue-600 rounded-full overflow-hidden">
							<img
								src={profile.image}
								alt=""
								className="w-24 h-24 object-cover"
							/>
						</div>
						<div className="text-center mt-4">
							<h3 className="text-2xl font-bold">{profile.name}</h3>
							<p className="text-gray-600 text-xl">{profile.title}</p>
						</div>
					</div>

					<button
						onClick={() => toggleCard(profile.id)}
						className="bg-blue-600 text-white w-full px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 mt-4"
					>
						{openIds.includes(profile.id) ? 'छिपाएँ' : 'देखें'}
					</button>

					<div
						className={`overflow-hidden transition-all duration-300 ease-in-out ${
							openIds.includes(profile.id) ? 'max-h-96 mt-4' : 'max-h-0'
						}`}
					>
						<div className="text-lg text-gray-700 leading-relaxed text-center">
							{profile.details}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default LeadershipCardHi;
