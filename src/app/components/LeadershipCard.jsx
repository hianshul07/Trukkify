'use client';

import { useState } from 'react';

const profiles = [
	{
		id: 1,
		image: '/pp.png',
		name: 'Mr. Purushottam P Singhal',
		title: 'Chief Executive Officer',
		details:
			'CEO of the Company is well equipped with Experience shared by his Father Late Shri P.C.Singhal blog with high Qualified ( B.Com Hons, MBA - Logistics ) and working Since 1990 in the Organisation and has achieved several milestones in the last 26 years and completed various Job in PAN India in a most satisfactory manner under his Leadership. He is also Social Activist and has a good social reputation. He is a Trustee of “Sri Agarsen International Hospital “and part of various other Social Services to Society & possesses good expertise in handling & movement of critical & supercritical Jobs too.',
	},
	{
		id: 2,
		image: '/us.png',
		name: 'Dr. Uttam Singhal',
		title: 'Managing Director',
		details:
			'Managing Director of the Company, B.Com (H) & MBA (Fin) had been actively leading all the Activities & managing well through his screwed knowledge, well experienced, high qualified & joined Organisation in 2004 and had achieved various Landmarked Achievement in recognized as best service providers with new Outlook & Modern approach & solutions. He is well connected through Political links & has a great span of vendor base all over India. He is a Person of Vision & enthusiasm & promised to deliver what he commits always & this is his best quality.',
	},
];

const LeadershipCard = () => {
	const [openIds, setOpenIds] = useState([]);

	const toggleCard = (id) => {
		setOpenIds((prev) =>
			prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
		);
	};

	return (
		// <div className="flex flex-col w-full lg:w-3/5 px-4 lg:flex-row gap-8 lg:gap-4">
		// 	{profiles.map((profile) => (
		// 		<div
		// 			key={profile.id}

		// 			className="border flex flex-col items-center rounded-lg p-6 shadow-md lg:w-1/2"
		// 		>
		// 			<div className="flex flex-col justify-center items-center">
		// 				<div className="border-4 border-blue-600 rounded-full">
		// 					<img src={profile.image} alt="" className="m-1" />
		// 				</div>
		// 				<div className="text-center">
		// 					<h3 className="text-2xl font-bold mb-1">{profile.name}</h3>
		// 					<p className="text-gray-600 mb-4 text-xl">{profile.title}</p>
		// 				</div>
		// 			</div>

		// 			<button
		// 				onClick={() => toggleCard(profile.id)}
		// 				className="bg-blue-600 text-white w-[136px] px-6 py-3 rounded-md text-lg font-semibold w-fill hover:bg-blue-700"
		// 			>
		// 				{openId === profile.id ? 'Collapse' : 'View More'}
		// 			</button>

		// 			{openId === profile.id && (
		// 				<div className="mt-4 text-sm text-gray-700 leading-relaxed">
		// 					{profile.details}
		// 				</div>
		// 			)}
		// 		</div>
		// 	))}
		// </div>

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
						{openIds.includes(profile.id) ? 'Collapse' : 'View More'}
					</button>

					<div
						className={`overflow-hidden transition-all duration-300 ease-in-out ${
							openIds.includes(profile.id) ? 'max-h-96 mt-4' : 'max-h-0'
						}`}
					>
						<div className="text-sm text-gray-700 leading-relaxed text-center">
							{profile.details}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default LeadershipCard;
