import DriverSteps from '@/components/DriverAppSteps';
import { Trispace } from 'next/font/google';
import { useTranslation } from '../../i18n';

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default async function DriverDemo({ params }) {
	const { locale } = await params;
	const { t } = await useTranslation(locale, 'common');

	return (
		<div className="min-h-screen flex flex-col">
			<div className="w-full mt-[72px] flex-col flex items-center py-6 gap-4 px-4 bg-orange-100">
				<h1
					className={`${trispace.className} font-semibold row-span-1 tracking-tight text-yellow-950 text-2xl text-center md:text-4xl`}
				>
					{t('driver.hero.title')}
				</h1>
				<p className="text-center text-lg md:text-2xl md:max-w-2/4">
					{t('driver.hero.description')}
				</p>
			</div>
			<div className="flex-1 flex items-center">
				<DriverSteps locale={locale} />
			</div>
		</div>
	);
}