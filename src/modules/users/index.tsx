import React from 'react';
import Users from './component';
import { Text } from 'react-native';

export default {
  module: Users,
  name: 'Users',
  options: {
    headerLeft: (
      <Text>
        Back to Main Manu
      </Text>
    ),
    headerTitle: (<Text>Home</Text>),
    headerRight: (
      <Text>
        Logout
      </Text>
    ),
  },
};
