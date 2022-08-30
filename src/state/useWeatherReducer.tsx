import { useReducer } from 'react';

interface ReducerProps {
	state: WeatherState;
	dispatch: React.Dispatch<any>;
}

interface ReducerAction {
	type: string;
	payload: any;
}

interface WeatherState {
	main: {
		humidity: number | null;
		pressure: number | null;
		temp: number | null;
		feels_like: number | null;
	};
	name: string;
	visibility: number | null;
	weather: [
		{
			icon: string;
			main: string;
		}
	];
	wind: {
		deg: number | null;
		speed: number | null;
	};
}

const initialState: WeatherState = {
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
