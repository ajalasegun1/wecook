import {StyleSheet, View} from 'react-native';
import React from 'react';
import DiscoverSection from './DiscoverSection';
import TrendingSection from './trending/TrendingSection';
import PreferenceSection from './preferences/PreferenceSection';

const FeedHeaderComponent = () => {
  return (
    <View style={styles.container}>
      <DiscoverSection />
      <TrendingSection />
      <PreferenceSection />
    </View>
  );
};

export default FeedHeaderComponent;

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
