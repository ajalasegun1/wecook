import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import Left from '../../assets/arrowleft2.svg';
import OnlineProfileIcon from '../../components/OnlineProfileIcon';
import one from '../../assets/profiles/1.jpeg';
import Phone from '../../assets/call.svg';
import Camera from '../../assets/video.svg';
import More from '../../assets/more.svg';
import {neutal, primary} from '../../theme/colors';
import {ChatRoomScreenProp} from '../../navigation/types';
import ChatRoomHeader from './ChatRoomHeader';
import {MESSAGES, MessageStatus, MessageType} from '../../constants';
import MessageItem from '../../components/Chats/MessageItem';
import Send from '../../assets/send.svg';
import Attach from '../../assets/attachcircle.svg';
import Emoji from '../../assets/fluent_emoji-32-regular.svg';
import Mic from '../../assets/microphone2.svg';

const ChatRoom: FC<ChatRoomScreenProp> = ({navigation}) => {
  const list = useRef<FlatList>(null);
  const [messages, setMessages] = useState(MESSAGES);
  const [text, setText] = useState('');
  const renderItem: ListRenderItem<MessageType> = ({item}) => (
    <MessageItem data={item} />
  );
  const handleSend = () => {
    if (!text) return;
    let temp = [
      ...messages,
      {
        message: text,
        time: '10:40 am',
        status: MessageStatus.delivered,
        isSender: true,
      },
    ];
    setMessages([...temp]);
    setText('');
  };

  useEffect(() => {
    list?.current?.scrollToIndex({animated: true, index: messages.length - 1});
  }, [messages]);
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
        ref={list}
        data={messages}
        renderItem={renderItem}
        ListHeaderComponent={ChatRoomHeader}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{paddingHorizontal: 20}}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 700));
          wait.then(() => {
            list.current?.scrollToIndex({animated: true, index: info.index});
          });
        }}
      />
      {/* Using just height because we are not building for iOS also */}
      <KeyboardAvoidingView behavior={'height'} style={styles.footer}>
        <View style={styles.inputContainer}>
          <Attach />
          <TextInput
            placeholderTextColor={neutal.n300}
            style={styles.input}
            cursorColor={primary.p300}
            placeholder="Enter message"
            value={text}
            onChangeText={val => setText(val)}
          />
          <Emoji />
          <Mic />
        </View>
        <TouchableOpacity onPress={handleSend}>
          <Send />
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#ebebeb',
    borderRadius: 40 / 2,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
  },
  input: {
    fontSize: 12,
    color: neutal.n500,
    flex: 1,
  },
});
