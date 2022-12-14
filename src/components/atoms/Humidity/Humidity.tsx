import humidityIcon from '../../../assets/icons/humidity.svg';

const Humidity = ({ children }: { children: number | null }) => {
	return (
		<div className='flex items-center justify-center text-xl gap-1'>
			<img src={humidityIcon} className='w-[15px] mr-2' alt='Water drop icon' />
			<p className='font-light'>Humidity:</p>
			<p className=''>{children}%</p>
		</div>
	);
};

export default Humidity;
