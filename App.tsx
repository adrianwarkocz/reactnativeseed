import React from 'react';
import { TitleText, PalevioletredText, BlueText } from './src/components/Texts'
import { CentredSafeAreaView } from './src/components/Containers'

const App = () => {
  return (
    <CentredSafeAreaView>
      <TitleText>Stack:</TitleText>
      <PalevioletredText>
        Styled Components
      </PalevioletredText>
      <BlueText>
        TypeScript
      </BlueText>
    </CentredSafeAreaView>
  );
};

export default App;
