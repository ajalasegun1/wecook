import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Explore from '../../assets/bottomTabIcons/addcircle.svg';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {primary} from '../../theme/colors';

const ExploreIcon = () => {
  const [pressed, setPressed] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: pressed ? withSpring('45deg') : withSpring('0deg')}],
    };
  });
  const editStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: pressed ? withSpring(-110) : withTiming(0),
        },
      ],
      width: pressed ? withSpring(50) : withSpring(40),
      height: pressed ? withSpring(50) : withSpring(40),
      elevation: pressed ? withSpring(3) : withSpring(0),
    };
  });

  const videoStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: pressed ? withSpring(-60) : withTiming(0),
        },
        {translateX: pressed ? withSpring(-50) : withTiming(0)},
      ],
      width: pressed ? withSpring(50) : withSpring(40),
      height: pressed ? withSpring(50) : withSpring(40),
      elevation: pressed ? withSpring(3) : withSpring(0),
    };
  });

  const reelStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: pressed ? withSpring(-60) : withTiming(0),
        },
        {translateX: pressed ? withSpring(50) : withTiming(0)},
      ],
      width: pressed ? withSpring(50) : withSpring(40),
      height: pressed ? withSpring(50) : withSpring(40),
      elevation: pressed ? withSpring(3) : withSpring(0),
    };
  });
  const onPress = () => {
    setPressed(val => !val);
  };
  const goToViewer = () => {
    setPressed(val => !val);
    navigation.navigate('VideoViewer');
  };

  return (
    <View style={styles.container}>
      <>
        <Animated.View style={[rStyle, styles.icon]}>
          <TouchableWithoutFeedback onPress={onPress}>
            <Explore />
          </TouchableWithoutFeedback>
        </Animated.View>

        <Animated.View style={[styles.edit, editStyle]}>
          <TouchableOpacity style={styles.iconContainer} disabled>
            <AntDesign name="edit" size={30} color={primary.p500} />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.video, videoStyle]}>
          <TouchableOpacity style={styles.iconContainer} disabled>
            <FontAwesome name="video-camera" size={30} color={primary.p500} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.reel, reelStyle]}>
          <TouchableOpacity onPress={goToViewer} style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="movie-open-play"
              size={30}
              color={primary.p500}
            />
          </TouchableOpacity>
        </Animated.View>
      </>
    </View>
  );
};

export default ExploreIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    zIndex: 1,
  },
  edit: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderWidth: 1,
    borderColor: primary.p500,
  },
  video: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderWidth: 1,
    borderColor: primary.p500,
  },
  reel: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderWidth: 1,
    borderColor: primary.p500,
  },
  iconContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
