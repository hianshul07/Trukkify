import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import DriverSteps from '@/app/components/DriverAppSteps';
import { Trispace } from 'next/font/google';
import CustomerSteps from '@/app/components/CustomerAppSteps';

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const CustomerDemo = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<div className="w-full mt-20 flex-col flex items-center py-6 gap-4 px-4 bg-orange-100">
				<h1
					className={`${trispace.className} font-semibold row-span-1 tracking-tight text-yellow-950 text-2xl text-center md:text-4xl`}
				>
					Built for Drivers Who Move India
				</h1>
				<p className="text-center text-lg md:text-2xl md:max-w-2/4">
					From trip planning to payments, every feature is designed to simplify
					your day and grow your earnings.
				</p>
			</div>
			<div className="flex-1 flex items-center">
				<CustomerSteps />
			</div>
			<Footer />
		</div>
	);
};
export default CustomerDemo;
