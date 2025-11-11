import NavbarHi from '../components/NavbarHi';
import FooterHi from '../components/Footer-hi';
import { Noto_Sans_Devanagari, Trispace } from 'next/font/google';

const notoHindi = Noto_Sans_Devanagari({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const trispace = Trispace({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	variable: '--font-hindi',
});

const hindiLayout = ({ children }) => {
	return (
		<html lang="hi" className={`${notoHindi.className}`}>
			<body className={`antialiased font-hindi`}>
				<NavbarHi />
				{children}
				<FooterHi />
			</body>
		</html>
	);
};
export default hindiLayout;