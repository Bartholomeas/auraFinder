import pressureIcon from '../../assets/pressure.svg';

const Pressure = ({ children }: { children: string }) => {
	return (
		<div className='flex items-center justify-center gap-1 text-xl'>
			<img src={pressureIcon} className='w-[15px] mr-2' alt='Water drop icon' />
			<p className='font-light'>Pressure:</p>
			<p className=''>{children}hPa</p>
		</div>
	);
};

export default Pressure;
