import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import one from '../assets/profiles/60.jpg';

type Props = {
  img: any;
};
const OnlineProfileIcon: FC<Props> = ({img}) => {
  return (
    <ImageBackground
      source={img}
      style={styles.container}
      imageStyle={{borderRadius: 34 / 2}}>
      <View style={styles.out}>
        <View style={styles.in} />
      </View>
    </ImageBackground>
  );
};

export default OnlineProfileIcon;

const styles = StyleSheet.create({
  container: {
    width: 34,
    height: 34,
  },
  out: {
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: -2,
  },
  in: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#36F855',
  },
});
