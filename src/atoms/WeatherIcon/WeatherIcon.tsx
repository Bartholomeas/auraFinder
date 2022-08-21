import weatherIcon from '../../assets/icons/01.svg';

const WeatherIcon = ({ iconType = '01' }: { iconType?: string }) => {
	return <img className='order-1 h-full sm:h-[100px] md:h-[100%]' src={weatherIcon} alt='Current weather icon' />;
};

export default WeatherIcon;
