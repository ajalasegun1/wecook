import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {LiveType} from '../../../constants';
import OnlineProfileIcon from '../../OnlineProfileIcon';
import one from '../../../assets/profiles/54.jpg';
import {neutal, primary} from '../../../theme/colors';
import BlackDot from '../../../assets/blackellipse.svg';

type Props = {
  data: LiveType;
};
const LiveSectItem: FC<Props> = ({data}) => {
  return (
    <View style={styles.card}>
      <View style={styles.head}>
        <OnlineProfileIcon img={one} />
        <View>
          <Text style={styles.username}>{data.username}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.small}>{data.city}</Text>
            <BlackDot style={{marginTop: 2}} />
            <Text style={styles.small}>Currently live</Text>
          </View>
        </View>
      </View>
      <Image source={data.img} style={styles.img} />
      <View style={styles.footer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.desc}</Text>
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={{fontSize: 10, color: '#fff'}}>Request to join</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LiveSectItem;

const styles = StyleSheet.create({
  card: {
    width: 264,
    // height: 356,
    backgroundColor: '#fff',
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 8,
  },
  head: {
    // paddingHorizontal: ,
    flexDirection: 'row',
    gap: 10,
    // backgroundColor: 'red',
    padding: 10,
  },
  username: {
    color: neutal.n500,
    fontWeight: '500',
  },
  small: {
    fontSize: 10,
    color: neutal.n300,
  },
  img: {
    height: 160,
    width: '100%',
    // resizeMode: 'contain',
  },
  footer: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  title: {
    color: neutal.n500,
    fontWeight: '500',
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
    color: neutal.n500,
    fontSize: 10,
  },
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: primary.p500,
    borderRadius: 8,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
