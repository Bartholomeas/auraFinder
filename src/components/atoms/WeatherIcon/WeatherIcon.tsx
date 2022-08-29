import { useEffect } from 'react';

const WeatherIcon = ({ iconType = '01' }: { iconType: string }) => {
	return (
		<img
			className='order-1 h-full sm:h-[100px] md:h-[100%]'
			src={`../../../../public/icons/${iconType}.svg`}
			alt='Current weather icon'
		/>
	);
};

export default WeatherIcon;
