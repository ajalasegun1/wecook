import {StackScreenProps} from '@react-navigation/stack';

export type ChatStackParamList = {
  ChatsScreen: undefined;
};

export type ChatsScreenProp = StackScreenProps<
  ChatStackParamList,
  'ChatsScreen'
>;
