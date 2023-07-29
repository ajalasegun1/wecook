import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

const NavSect = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const goBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <View style={{gap: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{uri: 'https://xsgames.co/randomusers/avatar.php?g=male'}}
          style={styles.img}
        />
        <View>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
            You
          </Text>
          <Text style={{color: '#fff', fontSize: 9}}>1.3K Viewers</Text>
        </View>
      </View>

      <View style={styles.timeSect}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
          LIVE
        </Text>
        <Text style={{color: '#fff', fontSize: 20}}>•</Text>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>
          00:41
        </Text>
      </View>

      <TouchableWithoutFeedback onPress={goBack}>
        <AntDesign name="close" color={'#fff'} size={15} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default NavSect;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: '#fff',
  },
  timeSect: {
    backgroundColor: '#F44747',
    alignItems: 'center',
    paddingHorizontal: 6,
    borderRadius: 15,
    flexDirection: 'row',
    gap: 5,
  },
});
