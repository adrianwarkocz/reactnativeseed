import HomeModule from './Home';
import UsersModule from './Users';

import { createStackNavigator, createAppContainer } from 'react-navigation';

interface NavigationConfig {
    initialRouteName: string;
    headerLayoutPreset: 'center' | 'left';
}

interface NavigationStructure {
    [x: string]: any;
}

const navigationStructure: NavigationStructure = {
  [HomeModule.name]: {
    screen: HomeModule.module,
    navigationOptions: HomeModule.options,
  },
  [UsersModule.name]: {
    screen: UsersModule.module,
    navigationOptions: UsersModule.options,
  },
};

const navigationConfig: NavigationConfig = {
  initialRouteName: HomeModule.name,
  headerLayoutPreset: 'center',
};

const AppNavigator = createStackNavigator(navigationStructure, navigationConfig);
export const AppContainer = createAppContainer(AppNavigator);

export default {
  HomeModule,
  UsersModule
};
