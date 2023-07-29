import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DISCOVER, DiscoverType} from '../../constants';
import DiscoverCard from './DiscoverCard';
import {neutal, primary} from '../../theme/colors';
import SectHeader from './SectHeader';

const DiscoverSection = () => {
  const renderItem: ListRenderItem<DiscoverType> = ({item}) => (
    <DiscoverCard data={item} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectHeader title="Discover" />
        {/* <Text style={styles.disc}>Discover</Text>
        <Text style={styles.see}>See all</Text> */}
      </View>
      <FlatList
        data={DISCOVER}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

export default DiscoverSection;

const styles = StyleSheet.create({
  container: {},
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  list: {
    paddingHorizontal: 20,
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
