import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {neutal, primary} from '../../theme/colors';

const ChatRoomHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.small}>You accepted the request</Text>
      <Image
        source={require('../../assets/profiles/1.jpeg')}
        style={styles.img}
      />
      <Text style={styles.name}>Lagatha Lestrange</Text>
      <Text style={styles.small}>Lagatha_24</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.pri}>View profile</Text>
      </TouchableOpacity>
      <Text style={styles.small}>Today</Text>
    </View>
  );
};

export default ChatRoomHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  small: {
    fontSize: 10,
    color: neutal.n300,
    marginBottom: 10,
  },
  img: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginTop: 10,
  },
  name: {
    color: neutal.n500,
    marginVertical: 5,
  },
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: primary.p50,
    marginBottom: 20,
  },
  pri: {
    fontWeight: '500',
    fontSize: 10,
    color: primary.p500,
  },
});
