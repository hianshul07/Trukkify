'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CustomerSteps = () => {
	// Hardcoded steps data — right inside the component
	const guideSteps = [
		{
			image: '/customer_steps/login.png',
			title: '1. Create Profile & Start Shipping',
			description:
				'Set up your business details, verify your identity, and unlock full access to trip posting, driver matching, and real-time tracking.',
		},
		{
			image: '/customer_steps/profile.png',
			title: '2. Your Profile, Your Control',
			description:
				'Manage your business details, contact info, and preferences in one place. Build trust with verified credentials and a complete profile.',
		},
		{
			image: '/customer_steps/negotiation.png',
			title: '3. Your Cargo, Your Price',
			description:
				'Set your rate, receive driver counters, and finalize deals that work for you. Transparent, flexible, and in your control.',
		},
		{
			image: '/customer_steps/ongoing.png',
			title: '4. Keep Every Trip on Track',
			description:
				'Monitor live trips with real-time updates on location, status, and driver activity. Stay informed from pickup to delivery.',
		},
		{
			image: '/customer_steps/wallet.png',
			title: '5. Wallet & Rewards',
			description:
				'Track payments, earn rewards, and manage your spending - all in one place. Every trip adds value.',
		},
	];

	const [current, setCurrent] = useState(0);
	const total = guideSteps.length;

	const goPrev = () => current > 0 && setCurrent((c) => c - 1);
	const goNext = () => current < total - 1 && setCurrent((c) => c + 1);
	const goTo = (i) => setCurrent(i);

	return (
		<div className="w-1/2 mx-auto p-4 md:p-8">
			{/* Flex container – replaces grid */}
			<div className="flex flex-col md:flex-row gap-8 items-center">
				{/* LEFT: IMAGE STACK */}
				<div className="w-full lg:w-1/2 flex-1 relative h-[600px] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
					{guideSteps.slice(0, current + 1).map((step, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className="absolute inset-0"
						>
							<Image
								src={step.image}
								alt={`${step.title} (step ${i + 1})`}
								fill
								className="object-cover"
								priority={i === 0}
							/>
						</motion.div>
					))}
				</div>

				{/* RIGHT: TEXT CONTENT – wrapped in a div and vertically centered */}
				<div className="w-full flex-1 lg:w-1/2 flex flex-col justify-center min-h-80 space-y-5">
					<motion.h2
						key={`title-${current}`}
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.4 }}
						className="text-2xl md:text-3xl font-bold text-gray-800"
					>
						{guideSteps[current].title}
					</motion.h2>

					<motion.p
						key={`desc-${current}`}
						initial={{ x: 20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.45, delay: 0.1 }}
						className="text-base md:text-lg text-gray-600 leading-relaxed"
					>
						{guideSteps[current].description}
					</motion.p>

					{/* Navigation Buttons */}
					<div className="flex items-center justify-between mt-6">
						<button
							onClick={goPrev}
							disabled={current === 0}
							className="px-5 py-2 bg-white border-2 border-blue-600 font-semibold text-blue-600 rounded disabled:bg-gray-300 disabled:border-gray-500 disabled:text-gray-500 disabled:cursor-not-allowed hover:bg-gray-100 transition"
						>
							Previous
						</button>

						{/* <span className="text-sm font-medium text-gray-500">
							Step {current + 1} / {total}
						</span> */}

						<button
							onClick={goNext}
							disabled={current === total - 1}
							className="px-5 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition"
						>
							Next
						</button>
					</div>

					{/* Dot Indicators */}
					<div className="flex justify-center space-x-2 mt-4">
						{guideSteps.map((_, i) => (
							<button
								key={i}
								onClick={() => goTo(i)}
								className={`w-3 h-3 rounded-full transition ${
									i <= current ? 'bg-blue-600' : 'bg-gray-300'
								}`}
								aria-label={`Go to step ${i + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerSteps;
