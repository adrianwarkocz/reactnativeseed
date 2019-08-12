import React, { PureComponent } from 'react'
import { Text, Button } from 'react-native'
import { CentredSafeAreaView } from '../../shared/styled/Containers'

export default class Home extends PureComponent {
  public render() {
    console.log(this.props)
    return (
        <CentredSafeAreaView>
        <Text>
          Im home
        </Text>
        <Button title="button" onPress={() => console.log('dupa')}>
            <Text></Text>
        </Button>
        </CentredSafeAreaView>
    );
  }
}