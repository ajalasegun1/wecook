import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {forwardRef, useState} from 'react';
import Explore from '../../assets/bottomTabIcons/addcircle.svg';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {SvgProps} from 'react-native-svg';

const ExploreComponent = () => (
  <View>
    <Explore />
  </View>
);

const ExploreIcon = () => {
  const [pressed, setPressed] = useState(false);
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: pressed ? withSpring('45deg') : withSpring('0deg')}],
    };
  });
  const onPress = () => {
    console.log('pressed');
    setPressed(val => !val);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={rStyle}>
        <Explore />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default ExploreIcon;

const styles = StyleSheet.create({});
