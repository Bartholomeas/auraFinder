import windIcon from '../../../assets/icons/wind.svg';

const Wind = ({ children, direction }: { children: number | null; direction: string }) => {
	return (
		<div className='flex items-center justify-center gap-1 text-xl'>
			<img src={windIcon} className='w-[15px] mr-2' alt='Water drop icon' />
			<p className='font-light'>Wind:</p>
			<p className=''>{children}km/h</p>
			<p className='text-bold text-red-500'> to {direction}</p>
		</div>
	);
};

export default Wind;
