import 'ol/ol.css';
import * as React from 'react'; // eslint-disable-line
import * as ReactDOM from 'react-dom'; // eslint-disable-line
import { Router } from 'react-router-dom'; // eslint-disable-line
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes/index';

const env = process.env.NODE_ENV || 'development';
const browserHistory = createBrowserHistory();

const RootApp = () => {
  return (
    <Router history={browserHistory}>
      {routes}
    </Router>
  );
};

// Render the main component into the dom
if (env === 'development') {
  window.onload = function () {
    const render = Component => {
      ReactDOM.render(
        <AppContainer>
          <Component />
        </AppContainer>,
        document.getElementById('app')
      );
    };
    render(RootApp);
    if (module.hot) {
      module.hot.accept('./routes', () => {
        render(RootApp);
      });
    }
  };
} else {
  window.onload = function () {
    ReactDOM.render(
      <RootApp />,
      document.getElementById('app')
    );
  };
}