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

interface Props {
	choosenCity: string;
}

const AppBody = () => {
	const [weatherData, setWeatherData] = useState({
		main: {
			humidity: null,
			pressure: null,
			temp: null,
			feels_like: null,
		},
		name: '',
		visibility: null,
		weather: [
			{
				icon: '03d',
				main: 'clear',
			},
		],
		wind: { deg: null, speed: null },
	});

	const getWeatherData = async (choosenCity: Props) => {
		console.log(choosenCity);
		try {
			const data = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${choosenCity}&units=metric&appid=${
					import.meta.env.VITE_API_KEY
				}`
			);
			console.log(data);
			setWeatherData(data.data);
		} catch {
			throw new Error('Something went wrong');
		}
	};

	return (
		<div
			className='flex flex-col items-center gap-3 w-full h-full px-4 py-6 backdrop-blur-sm bg-black/30 rounded-lg text-basic-text 
		 sm:h-4/5 md:justify-between md:h-3/5 md:w-5/6 md:px-6'>
			<button
				onClick={() => {
					console.log(weatherData);
				}}>
				KLIK
			</button>
			<SearchBar onClickFunc={e => getWeatherData(e)} />
			<div className='flex flex-col items-center h-full gap-5 w-full sm:justify-between sm:flex-row'>
				<InfosContainer>
					<City>{weatherData.name}</City>
					<Temperature>{weatherData.main.temp}°C</Temperature>
					<TemperatureFelt>felt like {weatherData.main.temp}°C</TemperatureFelt>
					<Weather>{weatherData.weather[0].main}</Weather>
				</InfosContainer>
				<InfosContainer>
					<Humidity>{weatherData.main.humidity}</Humidity>
					<Pressure>{weatherData.main.pressure}</Pressure>
					<Wind direction='N'>{weatherData.wind.speed}</Wind>
					<Visibility>{weatherData.visibility}</Visibility>
				</InfosContainer>
				<InfosContainer isIcon={true}>
					<WeatherIcon iconType='03' />
				</InfosContainer>
			</div>
		</div>
	);
};

export default AppBody;
