const FeatureCard = ({ title, content, imgSrc }) => {
	return (
		<div className="lg:w-[490px] w-[380px]"> 
			{/* <div className=""> */}
			<div className="">
				<h4 className="text-2xl font-semibold mb-2 text-nowrap">{title}</h4>
				<p className="text-xl text-gray-800 ml-6 ">{content}</p>
			</div>
			<img src={imgSrc} alt="" className="h-64 mx-auto" />
		</div>
		// </div>
	);
};
export default FeatureCard;
