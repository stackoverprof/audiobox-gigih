import React from 'react';
import App from './App';
import AudioPlayer from '@components/_shared/AudioPlayer';
import ReactDOM from 'react-dom/client';
import store from './core/redux/store';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// nadin

const Main = () => (
	<React.StrictMode>
		<Provider store={store}>
			<SWRConfig>
				<HelmetProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
					<AudioPlayer />
					<ToastContainer
						position="bottom-right"
						autoClose={5000}
						pauseOnHover
						theme="dark"
					/>
				</HelmetProvider>
			</SWRConfig>
		</Provider>
	</React.StrictMode>
);

// INITIALIZE REACT-APP to Root Div
const Root = document.getElementById('root');
if (Root) ReactDOM.createRoot(Root).render(<Main />);

export default Main;
