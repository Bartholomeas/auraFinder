import City from '../../atoms/City/City';
import InfosContainer from '../../molecules/InfosContainer/InfosContainer';
import Temperature from '../../atoms/Temperature/Temperature';
import TemperatureFelt from '../../atoms/TemperatureFelt/TemperatureFelt';
import Weather from '../../atoms/Weather/Weather';
import Humidity from '../../atoms/Humidity/Humidity';
import Pressure from '../../atoms/Pressure/Pressure';
import Wind from '../../atoms/Wind/Wind';
import Visibility from '../../atoms/Visibility/Visibility';

const AppBody = () => {
	return (
		<div
			className='flex flex-col items-center gap-10 w-full h-full px-4 py-6 backdrop-blur-sm bg-black/30 rounded-lg text-basic-text 
		md:flex-row md:justify-between md:h-3/5 md:w-5/6 md:px-6'>
			<InfosContainer>
				<City>Wieluń</City>
				<Temperature>20°C</Temperature>
				<TemperatureFelt>felt like 21°C</TemperatureFelt>
				<Weather>Shower rain</Weather>
			</InfosContainer>
			<InfosContainer>
				<Humidity>80</Humidity>
				<Pressure>1040</Pressure>
				<Wind direction='N'>3km/h</Wind>
				<Visibility>5.3</Visibility>
			</InfosContainer>
		</div>
	);
};

export default AppBody;
