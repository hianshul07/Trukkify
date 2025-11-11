'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DriverSteps = () => {
	// Hardcoded steps data — right inside the component
	const guideSteps = [
		{
			image: '/images/step1.jpg',
			title: '1. Prepare the base',
			description:
				'Start with a clean surface. Lay down the foundation layer that will hold everything else.',
		},
		{
			image: '/images/step2.png',
			title: '2. Add the overlay',
			description:
				'Place the transparent overlay on top. It will highlight the key areas without hiding the base.',
		},
		{
			image: '/images/step3.png',
			title: '3. Final touches',
			description:
				'Add annotations, arrows, or any final elements. The result is a clear visual guide.',
		},
	];

	const [current, setCurrent] = useState(0);
	const total = guideSteps.length;

	const goPrev = () => current > 0 && setCurrent((c) => c - 1);
	const goNext = () => current < total - 1 && setCurrent((c) => c + 1);
	const goTo = (i) => setCurrent(i);

	return (
		<div className="max-w-5xl mx-auto p-4 md:p-8">
			<div className="grid md:grid-cols-2 gap-8 items-start">
				{/* LEFT: IMAGE STACK */}
				<div className="relative w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
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

				{/* RIGHT: TEXT */}
				<div className="flex flex-col justify-center space-y-4">
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

					{/* Navigation */}
					<div className="flex items-center justify-between mt-6">
						<button
							onClick={goPrev}
							disabled={current === 0}
							className="px-5 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition"
						>
							Previous
						</button>

						<span className="text-sm font-medium text-gray-500">
							Step {current + 1} / {total}
						</span>

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

export default DriverSteps;
