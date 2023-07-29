import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import StaticHeader from '../../components/Home/StaticHeader';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StaticHeader />
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
