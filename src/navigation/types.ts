import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  VideoViewer: undefined;
};

export type HomeScreenProp = StackScreenProps<RootStackParamList, 'Home'>;
export type VideoViewerScreenProp = StackScreenProps<
  RootStackParamList,
  'VideoViewer'
>;
