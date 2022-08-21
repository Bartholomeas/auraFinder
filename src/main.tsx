import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './pages/App';
import AppWrapper from './organisms/AppWrapper/AppWrapper';
import AppBody from './organisms/AppBody/AppBody';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
