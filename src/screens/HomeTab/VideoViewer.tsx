import {
  Dimensions,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {primary} from '../../theme/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import bunny from '../../assets/videos/bunny.mp4';
import NavSect from '../../components/videoViewer/NavSect';
import CommentSection from '../../components/videoViewer/CommentSection';
// https://picsum.photos/200
// https://xsgames.co/randomusers/avatar.php?g=male
// https://xsgames.co/randomusers/avatar.php?g=female
const {width, height} = Dimensions.get('window');
const VideoViewer = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container]}>
      <Video
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
