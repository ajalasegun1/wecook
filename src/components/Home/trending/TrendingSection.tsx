import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SectHeader from '../SectHeader';
import TopSect from './TopSect';
import {neutal} from '../../../theme/colors';
import VideoSect from './VideoSect';
import BlackDot from '../../../assets/blackellipse.svg';
import Heart from '../../../assets/heart.svg';
import Message from '../../../assets/message.svg';
import Download from '../../../assets/receivesquare.svg';
import Share from '../../../assets/share-android-24.svg';

const TrendingSection = () => {
  return (
    <View style={styles.container}>
      <SectHeader title="Trending posts" />
      <TopSect />
      <Text style={styles.text}>
        My process for making birthday cakes, take a look, my recipe is attached
        to this post.
      </Text>
      <VideoSect />

      <View style={styles.data}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text style={styles.bold}>299K</Text>
          <Text style={styles.small}>Views</Text>
          <BlackDot />
          <Text style={styles.bold}>29K</Text>
          <Text style={styles.small}>Likes</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text style={styles.bold}>11K</Text>
          <Text style={styles.small}>Comments</Text>
          <BlackDot />
          <Text style={styles.bold}>2.5K</Text>
          <Text style={styles.small}>Downloads</Text>
        </View>
      </View>

      <View style={styles.lower}>
        <Heart />
        <Message />
        <Download />
        <Share />
      </View>
    </View>
  );
};

export default TrendingSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  sect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: neutal.n500,
    fontSize: 12,
    lineHeight: 16,
  },
  data: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
  },
  bold: {
    fontSize: 10,
    fontWeight: '600',
    color: neutal.n600,
  },
  small: {
    color: neutal.n300,
    fontSize: 10,
  },
  lower: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
