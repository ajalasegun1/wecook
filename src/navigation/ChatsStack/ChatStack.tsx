import {createStackNavigator} from '@react-navigation/stack';
import ChatsScreeen from '../../screens/ChatsTab/ChatsScreeen';

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ChatsScreeen} />
    </Stack.Navigator>
  );
};

export default ChatStack;
