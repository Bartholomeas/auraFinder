import React, { useReducer } from 'react';

interface ReducerProps {
	state: WeatherState;
	dispatch: React.Dispatch<any>;
}

interface ReducerAction {
	type: string;
	payload: any;
}

export interface WeatherState {
	main: {
		humidity: number;
		pressure: number;
		temp: number;
		feels_like: number;
	};
	name: string;
	visibility: number;
	weather: [
		{
			icon: string;
			main: string;
		}
	];
	wind: {
		deg: number;
		speed: number;
	};
}

const initialState: WeatherState = {
	main: {
		humidity: 0,
		pressure: 0,
		temp: 0,
		feels_like: 0,
	},
	name: '',
	visibility: 0,
	weather: [
		{
			icon: '03d',
			main: 'clear',
		},
	],
	wind: { deg: 0, speed: 0 },
};

const weatherDataReducer = (state: ReducerProps, action: ReducerAction): any => {
	switch (action.type) {
		case 'SET_WEATHER_DATA':
			return { ...state, ...action.payload };
		default:
			throw new Error('Something went wrong :(');
	}
};

export const useWeatherHandler = () => {
	const [state, dispatch] = useReducer(weatherDataReducer, initialState);

	return { state, dispatch };
};
