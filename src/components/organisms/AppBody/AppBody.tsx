import { useState, useEffect } from 'react';
import axios from 'axios';
import City from '../../atoms/City/City';
import InfosContainer from '../../molecules/InfosContainer/InfosContainer';
import Temperature from '../../atoms/Temperature/Temperature';
import TemperatureFelt from '../../atoms/TemperatureFelt/TemperatureFelt';
import Weather from '../../atoms/Weather/Weather';
import Humidity from '../../atoms/Humidity/Humidity';
import Pressure from '../../atoms/Pressure/Pressure';
import Wind from '../../atoms/Wind/Wind';
import Visibility from '../../atoms/Visibility/Visibility';
import WeatherIcon from '../../atoms/WeatherIcon/WeatherIcon';
import SearchBar from '../../atoms/SearchBar/SearchBar';
import { useCustomContext } from '../../../state/useCustomContext';

const AppBody = () => {
	const { state, dispatch } = useCustomContext();
	const [errorStatus, setError] = useState(false);

	const getWeatherData = async (choosenCity: string = 'Krakow') => {
		setError(false);
		try {
			const data = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${choosenCity}&units=metric&appid=${
					import.meta.env.VITE_API_KEY
				}`
			);

			dispatch({ type: 'SET_WEATHER_DATA', payload: data.data });
		} catch {
			setError(true);
			throw new Error('Something went wrong');
		}
	};

	const countWorldDirection = (deg: number): string => {
		const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
		let index = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;
		return directions[index];
	};

	useEffect(() => {
		getWeatherData('Krakow');
	}, [getWeatherData]);

	return (
		<div
			className='flex flex-col items-center gap-3 w-full h-full px-4 py-6 backdrop-blur-sm bg-black/50 rounded-lg text-basic-text 
		 sm:h-4/5 md:justify-between md:h-3/5 md:w-5/6 md:px-6'>
			<SearchBar errorStatus={errorStatus} onClickFunc={e => getWeatherData(e)} />
			<div className='flex flex-col items-center h-full gap-3 w-full sm:justify-between sm:flex-row'>
				<InfosContainer>
					<City>{state.name}</City>
					<Temperature>{state.main.temp}??C</Temperature>
					<TemperatureFelt>felt like {state.main.temp}??C</TemperatureFelt>
					<Weather>{state.weather[0].main}</Weather>
				</InfosContainer>
				<InfosContainer>
					<Humidity>{state.main.humidity}</Humidity>
					<Pressure>{state.main.pressure}</Pressure>
					<Wind direction={countWorldDirection(state.wind.deg)}>{state.wind.speed}</Wind>
					<Visibility>{state.visibility}</Visibility>
				</InfosContainer>
				<InfosContainer isIcon={true}>
					<WeatherIcon iconType={state.weather[0].icon} />
				</InfosContainer>
			</div>
		</div>
	);
};

export default AppBody;
