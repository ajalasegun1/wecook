import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import React from 'react';
import SectHeader from '../SectHeader';
import {LIVEUSERS, LiveType} from '../../../constants';
import LiveSectItem from './LiveSectItem';

const LiveSection = () => {
  const renderItem: ListRenderItem<LiveType> = ({item}) => (
    <LiveSectItem data={item} />
  );
  return (
    <View>
      <View style={styles.top}>
        <SectHeader title="Currently live" />
      </View>
      <FlatList
        data={LIVEUSERS}
        renderItem={renderItem}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
      />
    </View>
  );
};

export default LiveSection;

const styles = StyleSheet.create({
  top: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
});
