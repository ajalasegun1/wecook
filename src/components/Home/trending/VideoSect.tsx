import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState, memo} from 'react';
import Video from 'react-native-video';
import Play from '../../../assets/videocircle.svg';

const VideoSect = () => {
  const [paused, setPaused] = useState(false);
  const [touched, setTouched] = useState(false);
  const togglePause = () => {
    setPaused(!paused);
  };
  const resetPaused = () => setPaused(true);
  const handleTouch = () => {
    setTouched(true);
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (touched) {
      timeout = setTimeout(() => setTouched(false), 2000);
    }

    () => clearTimeout(timeout);
  }, [touched]);
  return (
    <Pressable style={styles.container} onPress={handleTouch}>
      <View style={styles.container}>
        <Video
          source={require('../../../assets/videos/bunny.mp4')}
          style={styles.vid}
          resizeMode="cover"
          paused={paused}
          onEnd={resetPaused}
        />
        <View style={[styles.overlay, {display: touched ? 'flex' : 'none'}]}>
          <TouchableOpacity onPress={togglePause}>
            <Play />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(VideoSect);

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  vid: {
    height: 241,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#000000',
  },
  overlay: {
    height: 241,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#00000080',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
