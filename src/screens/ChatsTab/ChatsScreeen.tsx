import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ListRenderItem,
} from 'react-native';
import React from 'react';
import {neutal, primary} from '../../theme/colors';
import Search from '../../assets/search.svg';
import {CHATLIST, ChatListType} from '../../constants';
import ChatUserItem from './ChatUserItem';
const ChatsScreeen = () => {
  const renderItem: ListRenderItem<ChatListType> = ({item, index}) => (
    <ChatUserItem data={item} index={index} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputSect}>
        <Search />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor={neutal.n100}
          cursorColor={primary.p300}
        />
      </View>

      <FlatList data={CHATLIST} renderItem={renderItem} style={styles.list} />
    </View>
  );
};

export default ChatsScreeen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputSect: {
    margin: 20,
    borderWidth: 1,
    borderColor: neutal.n50,
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  input: {
    fontSize: 12,
    color: neutal.n500,
    flex: 1,
  },
  list: {
    marginHorizontal: 20,
  },
});
