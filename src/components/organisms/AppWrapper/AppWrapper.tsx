import { useWeatherHandler } from '../../../state/useWeatherReducer';
// import heh from '../../../../public/img/03.jpg';

function AppWrapper({ children }: { children: JSX.Element | JSX.Element[] }) {
	const { state } = useWeatherHandler();
	let weatherImage = state.weather[0].icon.split('').splice(0, 2).join('');
	console.log(weatherImage);
	return (
		<div
			className={`flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full p-4 bg-no-repeat bg-cover shadow-xl bg-[url('../../../../public/img/${weatherImage}.jpg')]
			md:rounded-lg md:max-w-[900px] md:max-h-[600px]`}>
			{children}
		</div>
	);
}

export default AppWrapper;
