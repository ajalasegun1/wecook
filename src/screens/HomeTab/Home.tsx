import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StaticHeader from '../../components/Home/StaticHeader';
import FeedHeaderComponent from '../../components/Home/FeedHeaderComponent';

const Home = () => {
  const renderItem = () => <></>;
  return (
    <SafeAreaView style={styles.container}>
      <StaticHeader />
      <FlatList
        ListHeaderComponent={FeedHeaderComponent}
        data={[]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
