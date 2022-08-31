import { useEffect } from 'react';
import { useCustomContext } from '../../../state/useCustomContext';

const AppWrapper = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const { state, dispatch } = useCustomContext();

	let imageName = state.weather[0].icon.split('').splice(0, 2).join('') + 'i';
	const images: any = {
		'01i': "url('./public/img/01.jpg')",
		'02i': "url('./public/img/02.jpg')",
		'03i': "url('./public/img/03.jpg')",
		'04i': "url('./public/img/04.jpg')",
		'09i': "url('./public/img/09.jpg')",
		'10i': "url('./public/img/10.jpg')",
		'11i': "url('./public/img/11.jpg')",
		'13i': "url('./public/img/13.jpg')",
		'50i': "url('./public/img/50.jpg')",
	};

	return (
		<div
			style={{ backgroundImage: images[imageName] }}
			className={`flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full p-4 bg-no-repeat bg-cover shadow-xl md:rounded-lg md:max-w-[900px] md:max-h-[600px]`}>
			{children}
		</div>
	);
};

export default AppWrapper;
