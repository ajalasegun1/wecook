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
    <View>
      <View style={styles.top}>
        <SectHeader title="Based on your preference" />
      </View>
      <FlatList
        data={PREFERENCES}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flat}
      />
    </View>
  );
};

export default PreferenceSection;

const styles = StyleSheet.create({
  top: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  flat: {
    paddingLeft: 20,
  },
});
