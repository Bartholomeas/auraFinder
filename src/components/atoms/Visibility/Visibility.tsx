// import visibilityIcon from '../../assets/icons/visibility.svg';
import visibilityIcon from '../../../assets/icons/visibility.svg';

const Visibility = ({ children }: { children: number | null }) => {
	return (
		<div className='flex items-center justify-center gap-1 text-xl'>
			<img src={visibilityIcon} className='w-[15px] mr-2' alt='Water drop icon' />
			<p className='font-light'>Visibility:</p>
			<p className=''>{children && children / 1000}km</p>
		</div>
	);
};

export default Visibility;
