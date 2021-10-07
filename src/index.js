import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './components/app/App';
import { Provider } from 'react-redux';
import Weather from './service/index'
import { WeatherProvider } from './components/context/index';
import ErrorBoundry from './components/errorBoundry/index';
import {BrowserRouter as Router} from 'react-router-dom';
import './i18n';

const weather=new Weather();

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <WeatherProvider value={weather}>
          <ErrorBoundry>
            <Router>
              <App/>
            </Router>
          </ErrorBoundry>
        </WeatherProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
