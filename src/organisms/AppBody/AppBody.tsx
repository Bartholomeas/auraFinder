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
	const sendRequest = async (choosenCity: Props) => {
		console.log(choosenCity);
		// `api.openweathermap.org/data/2.5/weather?q=Wieluń&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
		try {
			const data = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${choosenCity}&units=metric&appid=${
					import.meta.env.VITE_API_KEY
				}`
			);
			console.log(data);
		} catch {
			throw new Error('Something went wrong');
		}
	};

	// useEffect(() => {}, []);
	return (
		<div
			className='flex flex-col items-center gap-3 w-full h-full px-4 py-6 backdrop-blur-sm bg-black/30 rounded-lg text-basic-text 
		 sm:h-4/5 md:justify-between md:h-3/5 md:w-5/6 md:px-6'>
			<SearchBar onClickFunc={e => sendRequest(e)} />
			<div className='flex flex-col items-center h-full gap-5 w-full sm:justify-between sm:flex-row'>
				<InfosContainer>
					<City>Wieluń</City>
					<Temperature>20°C</Temperature>
					<TemperatureFelt>felt like 21°C</TemperatureFelt>
					<Weather>Shower rain</Weather>
				</InfosContainer>
				<InfosContainer>
					<Humidity>80</Humidity>
					<Pressure>1040</Pressure>
					<Wind direction='N'>3</Wind>
					<Visibility>5.3</Visibility>
				</InfosContainer>
				<InfosContainer isIcon={true}>
					<WeatherIcon />
				</InfosContainer>
			</div>
		</div>
	);
};

export default AppBody;
