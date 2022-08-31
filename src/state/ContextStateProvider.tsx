import React from 'react';
import WeatherContext from './useCustomContext';
import { useWeatherHandler } from './useWeatherReducer';

const ContextStateProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const { state, dispatch } = useWeatherHandler();

	const providerState = {
		state,
		dispatch,
	};

	return <WeatherContext.Provider value={providerState}>{children}</WeatherContext.Provider>;
};

export default ContextStateProvider;
