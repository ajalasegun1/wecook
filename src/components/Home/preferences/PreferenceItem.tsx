import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {PreferenceType} from '../../../constants';
import {neutal, primary} from '../../../theme/colors';

type Props = {
  data: PreferenceType;
};
const PreferenceItem: FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <Image source={data.img} style={styles.img} />
      <View style={styles.card}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.desc}>{data.desc}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: '#fff', fontSize: 10}}>Send friend request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreferenceItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  img: {
    width: 164,
    height: 104,
  },
  card: {
    backgroundColor: '#fff',
    height: 96,
    width: 164,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  name: {
    fontWeight: '500',
    color: neutal.n500,
  },
  desc: {
    fontSize: 10,
    color: neutal.n500,
  },
  btn: {
    backgroundColor: primary.p500,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
