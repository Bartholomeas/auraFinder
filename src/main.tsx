import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './components/pages/App';
import AppWrapper from './components/organisms/AppWrapper/AppWrapper';
import AppBody from './components/organisms/AppBody/AppBody';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
