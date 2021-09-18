import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import avatarImg from '../assets/avatar.png';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.leftElement}>Overview</Text>
      <View style={styles.rightElement}>
        <Image source={avatarImg} style={styles.avatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    marginBottom: 16,
  },
  leftElement: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  rightElement: {
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  avatar: {
    width: 50,
    height: 50,
  },
});
