import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function SleepCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>😴</Text>
        <Text style={styles.title}>Sleep</Text>
      </View>

      <View style={styles.sleepProgressWrapper}>
        <Text style={styles.sleepTime}>7h 44m</Text>
        <View style={styles.sleepProgress} />
        <View style={styles.sleepProgressFill} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '46%',
    padding: 8,
    borderRadius: 24,
    backgroundColor: 'white',
    marginTop: 16,
    height: 130,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sleepProgressWrapper: {
    marginTop: 16,
  },
  sleepTime: {
    color: '#aeaeae',
    fontWeight: '600',
    marginBottom: 4,
  },
  sleepProgress: {
    width: '100%',
    height: 15,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 24,
    position: 'relative',
  },
  sleepProgressFill: {
    width: '90%',
    height: 15,
    position: 'absolute',
    backgroundColor: '#2a9df4',
    borderRadius: 24,
    top: 23,
  },
});
