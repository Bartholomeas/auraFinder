import windIcon from '../../assets/wind.svg';

const Wind = ({ children, direction }: { children: string; direction: string }) => {
	return (
		<div className='flex items-center justify-center gap-1'>
			<img src={windIcon} className='w-[15px] mr-2' alt='Water drop icon' />
			<p className='font-light'>Humidity:</p>
			<p className=''>{children}%</p>
		</div>
	);
};

export default Wind;
