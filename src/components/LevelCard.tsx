import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function LevelCard() {
  return (
    <View style={styles.container}>
      <View style={styles.percentageWrapper}>
        <Text style={styles.percentage}>82%</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>Almost there!</Text>
        <Text style={styles.steps}>👟 1.530 steps</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2a9df4',
    minHeight: 120,
    borderRadius: 28,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  percentageWrapper: {
    width: '50%',
  },
  percentage: {
    fontSize: 60,
    color: '#ffffff',
    fontWeight: '500',
    paddingLeft: 8,
  },
  details: {
    width: '50%',
    padding: 16,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  steps: {
    color: '#fff',
  },
});
