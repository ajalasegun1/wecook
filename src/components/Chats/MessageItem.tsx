import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {MessageType} from '../../constants';
import {neutal} from '../../theme/colors';
import Read from '../../assets/read.svg';
import Delivered from '../../assets/deliv.svg';

type Props = {
  data: MessageType;
};

const MessageItem: FC<Props> = ({data}) => {
  return (
    <View
      style={[
        styles.container,
        {alignItems: data.isSender ? 'flex-end' : 'flex-start'},
      ]}>
      <View
        style={[
          styles.bubble,
          {
            backgroundColor: data.isSender ? '#EBEBEB' : neutal.n500,
            borderBottomLeftRadius: data.isSender ? 12 : 0,
            borderBottomRightRadius: data.isSender ? 0 : 12,
            flexDirection: data.isSender ? 'row-reverse' : 'row',
          },
        ]}>
        <Text
          style={[styles.text, {color: data.isSender ? neutal.n500 : '#fff'}]}>
          {data.message}
        </Text>
        {data.status === 'delivered' ? <Delivered /> : <Read />}
      </View>
      <Text style={styles.time}>{data.time}</Text>
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  bubble: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignItems: 'center',
    gap: 10,
    maxWidth: '70%',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
  },
  time: {
    fontSize: 10,
    color: neutal.n400,
  },
});
