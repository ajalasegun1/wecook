import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import OnlineProfileIcon from '../../OnlineProfileIcon';
import one from '../../../assets/profiles/60.jpg';
import {neutal, primary} from '../../../theme/colors';
import BlackDot from '../../../assets/blackellipse.svg';
const TopSect = () => {
  return (
    <View style={styles.container}>
      <OnlineProfileIcon img={one} />
      <View style={{flex: 1}}>
        <Text style={styles.name}>Lagatha_24</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Text style={styles.date}>Florida</Text>
          <BlackDot />
          <Text style={styles.date}>Jan 3rd, 12:14pm</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.follow}>
        <Text style={{color: '#fff', fontWeight: '500', fontSize: 10}}>
          Follow
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopSect;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: 'row',
    paddingVertical: 15,
  },
  name: {
    fontWeight: '500',
    color: neutal.n500,
  },
  date: {
    fontSize: 10,
    color: neutal.n300,
  },
  follow: {
    backgroundColor: primary.p500,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
