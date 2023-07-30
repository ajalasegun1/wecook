import {Dimensions, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {primary} from '../../theme/colors';
import Video from 'react-native-video';
import NavSect from '../../components/videoViewer/NavSect';
import CommentSection from '../../components/videoViewer/CommentSection';
import {useIsFocused} from '@react-navigation/native';
// https://picsum.photos/200
// https://xsgames.co/randomusers/avatar.php?g=male
// https://xsgames.co/randomusers/avatar.php?g=female
const {width, height} = Dimensions.get('window');
const VideoViewer = () => {
  const isFocused = useIsFocused();
  const [paused] = useState(isFocused ? false : true);
  return (
    <View style={[styles.container]}>
      <Video
        paused={paused}
        source={require('../../assets/videos/bunny.mp4')}
        style={styles.videoPlayer}
        resizeMode="cover"
        repeat
      />
      <KeyboardAvoidingView behavior={'height'} style={styles.aboveView}>
        <NavSect />
        <CommentSection />
      </KeyboardAvoidingView>
    </View>
  );
};

export default VideoViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary.p400,
  },
  videoPlayer: {
    width,
    height,
    backgroundColor: 'black',
  },
  aboveView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0000004d',
    justifyContent: 'space-between',
  },
});
