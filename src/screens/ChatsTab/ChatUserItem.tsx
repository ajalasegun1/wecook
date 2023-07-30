import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {ChatListType} from '../../constants';
import OnlineProfileIcon from '../../components/OnlineProfileIcon';
import {neutal, secondary} from '../../theme/colors';
import Delivered from '../../assets/deliv.svg';
import Read from '../../assets/read.svg';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
type Props = {
  data: ChatListType;
  index: number;
};
const ChatUserItem: FC<Props> = ({data, index}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const onPress = () => navigation.navigate('ChatRoom');
  return (
    <TouchableOpacity disabled={index > 0} onPress={onPress}>
      <View style={styles.container}>
        <OnlineProfileIcon img={data.img} />
        <View style={{flex: 1}}>
          <Text style={styles.user}>{data.username}</Text>
          <Text style={styles.msg}>{data.message}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.time}>{data.time}</Text>
          {data.detail === 'delivered' ? (
            <Delivered />
          ) : data.detail === 'read' ? (
            <Read />
          ) : (
            <View style={styles.yellow}>
              <Text style={{fontSize: 10, color: '#fff'}}>3</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatUserItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  user: {
    fontWeight: '500',
    color: neutal.n500,
  },
  msg: {
    color: neutal.n500,
    fontSize: 10,
  },
  yellow: {
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15 / 2,
    backgroundColor: secondary.s500,
  },
  time: {
    color: neutal.n300,
    fontSize: 10,
    marginBottom: 5,
  },
});
