/**
 * @format
 */

import "react-native-gesture-handler";
import "react-native-reanimated";
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import App from './App';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);