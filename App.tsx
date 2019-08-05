import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import { TitleText, PalevioletredText, BlueText } from './src/components/Texts'
import { CentredSafeAreaView } from './src/components/Containers'

const rootStore = configureStore();


const App = () => {
  return (
    <Provider store={rootStore}>
      <CentredSafeAreaView>
        <TitleText>Stack:</TitleText>
        <PalevioletredText>
          Styled Components
      </PalevioletredText>
        <BlueText>
          TypeScript
      </BlueText>
      </CentredSafeAreaView>
    </Provider>
  );
};

export default App;
