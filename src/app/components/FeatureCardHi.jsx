import { Noto_Sans_Devanagari } from 'next/font/google';

const notoHindi = Noto_Sans_Devanagari({
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const FeatureCard = ({ title, content, imgSrc }) => {
	return (
		<div className={`${notoHindi.className} lg:w-[490px] w-[380px]`}> 
			{/* <div className=""> */}
			<div className={`${notoHindi.className}`}>
				<h4 className="text-2xl lg:text-3xl font-semibold mb-2 text-nowrap">{title}</h4>
				<p className="text-xl text-gray-800 ml-8 ">{content}</p>
			</div>
			<img src={imgSrc} alt="" className="h-72 mx-auto" />
		</div>
		// </div>
	);
};
export default FeatureCard;
