import e from '../../assets/01.svg';

const WeatherIcon = ({ iconType = '01' }: { iconType?: string }) => {
	return <img className='order-1 h-[100%]' src={e} alt='Current weather icon' />;
};

export default WeatherIcon;
