import React, { useContext } from 'react';
import { WeatherState } from './useWeatherReducer';
interface ContextProps {
	state: WeatherState;
	dispatch: React.Dispatch<any>;
}

const WeatherContext = React.createContext({} as ContextProps);

export const useCustomContext = () => {
	return useContext(WeatherContext);
};

export default WeatherContext;
