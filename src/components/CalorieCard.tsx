import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function CalorieCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>🍔</Text>
        <Text style={styles.title}>Calories</Text>
      </View>

      <View style={styles.calorieProgressWrapper}>
        <View style={styles.calorieProgress} />
        <View style={styles.calorieProgressFill}>
          <Text style={styles.calories}>982 Kcal</Text>
        </View>
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
    height: 280,
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
  calorieProgressWrapper: {
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },

  calorieProgress: {
    width: 130,
    height: 210,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 24,
    position: 'relative',
  },
  calories: {
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: 80,
  },
  calorieProgressFill: {
    width: 130,
    height: 150,
    position: 'absolute',
    backgroundColor: '#2a9df4',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
