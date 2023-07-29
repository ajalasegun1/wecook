import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {neutal, primary} from '../../theme/colors';

type Props = {
  title: string;
};

const SectHeader: FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.disc}>{title}</Text>
      <Text style={styles.see}>See all</Text>
    </View>
  );
};

export default SectHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  disc: {
    fontWeight: '500',
    color: neutal.n500,
  },
  see: {
    fontSize: 12,
    color: primary.p300,
  },
});
