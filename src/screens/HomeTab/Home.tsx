import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeIcon from '../../assets/bottomTabIcons/homeActive.svg';

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Homeeee</Text>
      <HomeIcon width={25} height={25} />
      <Text>Hello o</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
