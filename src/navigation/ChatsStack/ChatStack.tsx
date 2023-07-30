import {createStackNavigator} from '@react-navigation/stack';
import ChatsScreeen from '../../screens/ChatsTab/ChatsScreeen';

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChatsScreen" component={ChatsScreeen} />
    </Stack.Navigator>
  );
};

export default ChatStack;
