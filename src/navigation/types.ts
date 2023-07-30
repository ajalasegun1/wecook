import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  VideoViewer: undefined;
  ChatRoom: undefined;
};

export type HomeScreenProp = StackScreenProps<RootStackParamList, 'Home'>;
export type VideoViewerScreenProp = StackScreenProps<
  RootStackParamList,
  'VideoViewer'
>;
export type ChatRoomScreenProp = StackScreenProps<
  RootStackParamList,
  'ChatRoom'
>;
