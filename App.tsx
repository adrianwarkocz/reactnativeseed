import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { TitleText, PalevioletredText, BlueText } from './src/components/Texts'
import { CentredSafeAreaView } from './src/components/Containers'

const App = () => {
  return (
    <Provider store={store}>
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
