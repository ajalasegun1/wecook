import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {DiscoverType} from '../../constants';
import {neutal, primary} from '../../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import Dot from '../../assets/Ellipse10.svg';

type Props = {
  data: DiscoverType;
};
const DiscoverCard: FC<Props> = ({data}) => {
  return (
    <ImageBackground
      source={data.img}
      style={styles.container}
      imageStyle={{borderRadius: 8}}>
      <LinearGradient
        colors={['#00000000', '#00000000', '#00000080']}
        style={styles.gradient}>
        <View style={styles.new}>
          <Text style={{color: '#fff', fontSize: 12}}>NEW</Text>
        </View>
        <View style={styles.nameRow}>
          <Text style={styles.head}>{data.name}</Text>
          <Dot style={{marginTop: 2}} />
          <Text style={styles.head}>{data.age}</Text>
        </View>
        <Text style={styles.city}>{data.city}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default DiscoverCard;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 174,
    borderRadius: 8,
    backgroundColor: neutal.n50,
    marginRight: 15,
  },
  gradient: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    // padding: 10,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  head: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 12,
  },
  city: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  new: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: primary.p500,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
