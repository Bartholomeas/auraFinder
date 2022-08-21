import { Props } from '../../types/universalTypes';

function AppWrapper({ children }: Props) {
	return (
		<div
			className='flex items-center justify-center w-full h-full p-4 bg-no-repeat bg-rain-image bg-cover shadow-xl
		 md:rounded-lg md:max-w-[900px] md:max-h-[600px]'>
			{children}
		</div>
	);
}

export default AppWrapper;
