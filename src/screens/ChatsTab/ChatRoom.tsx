import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Left from '../../assets/arrowleft2.svg';
import OnlineProfileIcon from '../../components/OnlineProfileIcon';
import one from '../../assets/profiles/1.jpeg';
import Phone from '../../assets/call.svg';
import Camera from '../../assets/video.svg';
import More from '../../assets/more.svg';
import {neutal} from '../../theme/colors';
import {ChatRoomScreenProp} from '../../navigation/types';
import ChatRoomHeader from './ChatRoomHeader';

const ChatRoom: FC<ChatRoomScreenProp> = ({navigation}) => {
  const renderItem = () => <></>;
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Left />
        </TouchableOpacity>
        <OnlineProfileIcon img={one} />
        <View style={{flex: 1}}>
          <Text style={styles.user}>Lagatha_24</Text>
          <Text style={styles.active}>Active now</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Phone />
          <Camera />
          <More />
        </View>
      </View>

      <FlatList
        data={[]}
        renderItem={renderItem}
        ListHeaderComponent={ChatRoomHeader}
      />
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nav: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    gap: 10,
  },
  user: {
    fontWeight: '500',
    color: neutal.n500,
  },
  active: {
    fontSize: 10,
    color: neutal.n300,
  },
});
