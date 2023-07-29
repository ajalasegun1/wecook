import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomTab';
import VideoViewer from '../screens/HomeTab/VideoViewer';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="VideoViewer" component={VideoViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
