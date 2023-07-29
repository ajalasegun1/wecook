import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {neutal, primary} from '../../theme/colors';
import Bell from '../../assets/notification.svg';
import Search from '../../assets/search.svg';
import Filter from '../../assets/setting4.svg';

const StaticHeader = () => {
  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.header}>Hello Hamza</Text>
          <Text style={styles.desc}>Who do you want to cook with today?</Text>
        </View>
        <View style={styles.bellHolder}>
          <Bell />
        </View>
      </View>
      <View style={styles.searchHolder}>
        <Search />
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor={neutal.n100}
          cursorColor={primary.p300}
        />
        <View style={styles.verticalDivider} />
        <Filter />
      </View>
    </View>
  );
};

export default StaticHeader;

const styles = StyleSheet.create({
  outer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  header: {
    fontWeight: '700',
    fontSize: 16,
    color: neutal.n500,
  },
  desc: {
    fontSize: 12,
    color: neutal.n500,
  },
  bellHolder: {
    width: 40,
    height: 40,
    borderRadius: 6,
    borderColor: neutal.n50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchHolder: {
    borderWidth: 1,
    borderColor: neutal.n50,
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  input: {
    fontSize: 12,
    color: neutal.n500,
    flex: 1,
  },
  verticalDivider: {
    width: 1,
    height: 25,
    borderColor: neutal.n100,
    borderWidth: 0.5,
  },
});
