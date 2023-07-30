import {StyleSheet, View, FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import SectHeader from '../SectHeader';
import {PREFERENCES, PreferenceType} from '../../../constants';
import PreferenceItem from './PreferenceItem';

const PreferenceSection = () => {
  const renderItem: ListRenderItem<PreferenceType> = ({item}) => (
    <PreferenceItem data={item} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <SectHeader title="Based on your preference" />
      </View>
      <FlatList
        data={PREFERENCES}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flat}
        contentContainerStyle={{paddingBottom: 10, paddingLeft: 20}}
      />
    </View>
  );
};

export default PreferenceSection;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
  },
  top: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  flat: {
    // paddingLeft: 20,
  },
});
