import { languages } from '../i18n/settings';
import '../globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export async function generateStaticParams() {
	return languages.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
	const { locale } = await params;

	return {
		title:
			locale === 'hi'
				? 'Next.js 16 अंतर्राष्ट्रीयकरण'
				: 'Next.js 16 Internationalization',
		description:
			locale === 'hi'
				? 'Turbopack के साथ Next.js 16 में अंतर्राष्ट्रीयकरण'
				: 'Internationalization in Next.js 16 with Turbopack',
	};
}

export default async function RootLayout({ children, params }) {
	const { locale } = await params;

	return (
		<html lang={locale}>
			<body suppressHydrationWarning>
				<Navbar locale={locale} />
				<LanguageSwitcher locale={locale} />
				{children}
				<Footer locale={locale} />
			</body>
		</html>
	);
}
