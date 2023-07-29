import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeTab/Home';
import ActiveHome from '../assets/bottomTabIcons/homeActive.svg';
import HomeIcon from '../assets/bottomTabIcons/home.svg';
import MessageActive from '../assets/bottomTabIcons/messages1.svg';
import MessageIcon from '../assets/bottomTabIcons/messages2.svg';
import Bookmark from '..//assets/bottomTabIcons/archive.svg';
import Profile from '../assets/bottomTabIcons/profile.svg';
import AddCircle from '../assets/bottomTabIcons/addcircle.svg';
import {neutal, primary} from '../theme/colors';
import ChatStack from './ChatsStack/ChatStack';
import ExploreIcon from '../components/ExploreIcon/ExploreIcon';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (focused ? <ActiveHome /> : <HomeIcon />),
          tabBarActiveTintColor: primary.p500,
          tabBarInactiveTintColor: neutal.n500,
        }}
      />
      <Tab.Screen
        name="ChatTab"
        component={ChatStack}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({focused}) =>
            focused ? <MessageActive /> : <MessageIcon />,
          tabBarActiveTintColor: primary.p500,
          tabBarInactiveTintColor: neutal.n500,
        }}
      />
      <Tab.Screen
        name="ExploreTab"
        component={ChatStack}
        listeners={{
          tabPress: e => e.preventDefault(),
        }}
        options={{
          tabBarLabel: '',
          tabBarIconStyle: {
            marginTop: 15,
          },
          tabBarIcon: () => <ExploreIcon />,
        }}
      />
      <Tab.Screen
        name="BookmarkTabs"
        component={ChatStack}
        listeners={{
          tabPress: e => e.preventDefault(),
        }}
        options={{
          tabBarLabel: 'Bookmarks',
          tabBarIcon: () => <Bookmark />,
          tabBarActiveTintColor: primary.p500,
          tabBarInactiveTintColor: neutal.n500,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ChatStack}
        listeners={{
          tabPress: e => e.preventDefault(),
        }}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => <Profile />,
          tabBarActiveTintColor: primary.p500,
          tabBarInactiveTintColor: neutal.n500,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
