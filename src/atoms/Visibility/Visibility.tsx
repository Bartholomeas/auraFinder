import visibilityIcon from '../../assets/visibility.svg';

const Visibility = ({ children }: { children: string }) => {
	return (
		<div className='flex items-center justify-center gap-1'>
			<img src={visibilityIcon} className='w-[15px] mr-2' alt='Water drop icon' />
			<p className='font-light'>Visibility:</p>
			<p className=''>{children}km</p>
		</div>
	);
};

export default Visibility;
