import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/redux';
import { AppContainer} from './src/modules';

const rootStore = configureStore();

const App = () => {
  return (
    <Provider store={rootStore}>
      <AppContainer />
    </Provider>
  );
};

export default App;
