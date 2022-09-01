const WeatherIcon = ({ iconType = '01' }: { iconType: string }) => {
	let iconName = iconType.split('').splice(0, 2).join('');

	return (
		<>
			<img
				className='order-1 h-full sm:h-[100px] md:h-[100%]'
				src={`./icons/${iconName}.svg`}
				alt='Current weather icon'
			/>
		</>
	);
};

export default WeatherIcon;
